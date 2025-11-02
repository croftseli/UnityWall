export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { google } from "googleapis";
import { Readable } from "stream"; // 👈 NEW

// ENV
const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_TAB = process.env.GOOGLE_SHEET_TAB || "Sheet1";
const DRIVE_PARENT = process.env.GOOGLE_DRIVE_PARENT_FOLDER_ID;
const SUPPORT_EMAIL = process.env.SUPPORT_EMAIL; // optional

export async function POST(req) {
  try {
    const form = await req.formData();

    // Honeypot
    if (form.get("website")) {
      return NextResponse.json({ ok: true, html: renderThankYou("HIDDEN") });
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

    // Files from multipart
    const files = form.getAll("attachments").filter((f) => typeof f === "object" && "arrayBuffer" in f);

    // Auth (Service Account)
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SA_EMAIL,
      key: (process.env.GOOGLE_SA_KEY || "").replace(/\\n/g, "\n"),
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

    // Create per-ticket folder
    const folder = await drive.files.create({
      requestBody: {
        name: ticketId,
        mimeType: "application/vnd.google-apps.folder",
        parents: [DRIVE_PARENT],
      },
      fields: "id, webViewLink",
    });
    const folderId = folder.data.id;
    const folderUrl = folder.data.webViewLink;

    // Try to make folder link-shareable
    try {
      await drive.permissions.create({
        fileId: folderId,
        requestBody: { role: "reader", type: "anyone" },
      });
    } catch {}

    // Upload files (wrap Buffer -> Readable)
    const uploadedNames = [];
    for (const f of files) {
      const fileName = sanitize(f.name || "upload.bin");
      const mimeType = f.type || "application/octet-stream";
      const buffer = Buffer.from(await f.arrayBuffer());

      const up = await drive.files.create({
        requestBody: { name: fileName, parents: [folderId] },
        media: { mimeType, body: Readable.from(buffer) }, // 👈 FIX: stream, not Buffer
        fields: "id, webViewLink",
      });

      // Make file link-shareable (best effort)
      try {
        await drive.permissions.create({
          fileId: up.data.id,
          requestBody: { role: "reader", type: "anyone" },
        });
      } catch {}

      uploadedNames.push(fileName);
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
      "", // Source IP
      fields.userAgent,
      "Open",
    ]];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_TAB}!A1`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json({ ok: true, html: renderThankYou(ticketId) });
  } catch (err) {
    console.error(err);
    return new NextResponse(err?.message || "Server error", { status: 500 });
  }
}

/* ---------------- helpers ---------------- */

async function getRowCount(sheets, spreadsheetId, tab) {
  const resp = await sheets.spreadsheets.values.get({ spreadsheetId, range: `${tab}!A:A` });
  const rows = resp.data.values ? resp.data.values.length : 0;
  return Math.max(rows - 1, 0); // subtract header
}

function sanitize(name) {
  return String(name || "file").replace(/[\n\r/\\\t\0]/g, "-").slice(0, 200);
}

function renderThankYou(ticketId) {
  return `<!doctype html><html><head>
<meta charSet="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Thanks — Request Received</title>
<style>
body{font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;margin:0;padding:24px;background:#fafafa}
.card{max-width:720px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:24px;box-shadow:0 2px 10px rgba(0,0,0,.04)}
h1{margin:0 0 12px;font-size:1.6rem}
p{color:#374151}
</style></head><body>
  <div class="card">
    <h1>Thanks — we’ve got your request!</h1>
    <p>Your ticket number is <strong>${ticketId}</strong>.</p>
    <p>We’ll be in touch by email shortly. You can reply to the confirmation to add more details or attachments.</p>
  </div>
</body></html>`;
}
