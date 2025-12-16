export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { google } from "googleapis";
import { Readable } from "stream";

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_TAB = process.env.GOOGLE_SHEET_TAB || "Sheet1";
const DRIVE_PARENT = process.env.GOOGLE_DRIVE_PARENT_FOLDER_ID;

export async function POST(req) {
  try {
    const form = await req.formData();

    // Honeypot
    if (form.get("website")) {
      return NextResponse.json({ ok: true, ticketId: "HIDDEN" });
    }

    const fields = {
      name: form.get("name") || "",
      company: form.get("company") || "",
      email: form.get("email") || "",
      phone: form.get("phone") || "",
      priority: form.get("priority") || "",
      category: form.get("category") || "",
      subject: form.get("subject") || "",
      description: form.get("description") || "",
      userAgent: form.get("userAgent") || "",
    };

    // Files (skip empties)
    const files = form.getAll("attachments").filter(
      (f) =>
        typeof f === "object" &&
        "arrayBuffer" in f &&
        typeof f.size === "number" &&
        f.size > 0 &&
        typeof f.name === "string" &&
        f.name.trim() !== ""
    );

    // Auth (Service Account)
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SA_EMAIL,
      key: getPrivateKey(),
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });
    const drive = google.drive({ version: "v3", auth });
    const sheets = google.sheets({ version: "v4", auth });

    // Ticket ID from row count
    const rowCount = await getRowCount(sheets, SHEET_ID, SHEET_TAB);
    const year = new Date().getFullYear();
    const ticketId = `T-${year}-${String(rowCount + 1).padStart(6, "0")}`;

    // Create per-ticket folder in Shared Drive
    const folder = await drive.files.create({
      requestBody: {
        name: ticketId,
        mimeType: "application/vnd.google-apps.folder",
        parents: [DRIVE_PARENT],
      },
      fields: "id, webViewLink, driveId",
      supportsAllDrives: true,
    });
    const folderId = folder.data.id;
    const folderUrl = folder.data.webViewLink;

    // Optional public link (org policy may block this)
    try {
      await drive.permissions.create({
        fileId: folderId,
        requestBody: { role: "reader", type: "anyone" },
        supportsAllDrives: true,
      });
    } catch {}

    // Upload each file
    for (const f of files) {
      const fileName = sanitize(f.name);
      if (!fileName) continue;
      const mimeType = f.type || "application/octet-stream";
      const buffer = Buffer.from(await f.arrayBuffer());

      await drive.files.create({
        requestBody: { name: fileName, parents: [folderId] },
        media: { mimeType, body: Readable.from(buffer) },
        fields: "id, webViewLink",
        supportsAllDrives: true,
      });
    }

    // Append row to sheet (Attachments column = Folder link)
    const attachmentsCell = `=HYPERLINK("${folderUrl}","Folder")`;
    const values = [[
      new Date().toISOString(),
      ticketId,
      fields.name,
      fields.company,
      fields.email,
      fields.phone,
      fields.priority,
      fields.category,
      fields.subject,
      fields.description,
      attachmentsCell,
      "", // Source IP (left blank)
      fields.userAgent,
      "Open",
    ]];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_TAB}!A1`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    // Return ticketId only; the client renders the thank-you HTML
    return NextResponse.json({ ok: true, ticketId });
  } catch (err) {
    console.error(err);
    return new NextResponse(err?.message || "Server error", { status: 500 });
  }
}

/* ---------------- helpers ---------------- */

function getPrivateKey() {
  let k = process.env.GOOGLE_SA_KEY || "";
  if (k.includes("\\n")) k = k.replace(/\\n/g, "\n");
  if (k.includes("\\r")) k = k.replace(/\\r/g, "\r");
  k = k.trim();
  if ((k.startsWith('"') && k.endsWith('"')) || (k.startsWith("'") && k.endsWith("'"))) {
    k = k.slice(1, -1).trim();
  }
  if (!k.includes("BEGIN PRIVATE KEY") || !k.includes("END PRIVATE KEY")) {
    throw new Error("GOOGLE_SA_KEY is not a valid PEM. Paste the service account PRIVATE KEY, not an API key.");
  }
  return k;
}

async function getRowCount(sheets, spreadsheetId, tab) {
  const resp = await sheets.spreadsheets.values.get({ spreadsheetId, range: `${tab}!A:A` });
  const rows = resp.data.values ? resp.data.values.length : 0;
  return Math.max(rows - 1, 0);
}

function sanitize(name) {
  const n = String(name || "").replace(/[\n\r/\\\t\0]/g, "-").slice(0, 200).trim();
  return n;
}
