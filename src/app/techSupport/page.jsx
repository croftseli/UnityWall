"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const UPLOADS_ENABLED = false; // toggle to true when ready
const HOME_URL = "/";

export default function TechSupportPage() {
  const [submitting, setSubmitting] = useState(false);
  const [html, setHtml] = useState("");

  // When thank-you HTML is rendered, jump to top
  useEffect(() => {
    if (html) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [html]);

  if (html) return <div dangerouslySetInnerHTML={{ __html: html }} />;

  return (
    <div
      style={{
        fontFamily: "system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
        background: "#364153",
        minHeight: "100vh",
        padding: "24px 24px 96px",
        color: "#E5E7EB",
      }}
    >
      <div
        style={{
          maxWidth: 820,
          margin: "0 auto",
          background: "#1e2939",
          border: "1px solid #334155",
          borderRadius: 16,
          padding: 24,
          boxShadow: "0 2px 10px rgba(0,0,0,.25)",
        }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(64deg, rgba(139,172,223,1) 0%, rgba(177,211,233,1) 50%, rgb(251,246,156) 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h1>

        <p style={{ color: "#CBD5E1", margin: "0 0 18px" }}>
          Tell us what you need help with. We’ll email you a ticket number after
          submission.
        </p>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setSubmitting(true);

            const form = e.currentTarget;
            const fd = new FormData(form);

            // Honeypot
            if (fd.get("website")) {
              setHtml(renderThankYou("HIDDEN"));
              return;
            }

            if (UPLOADS_ENABLED) {
              const files = fd
                .getAll("attachments")
                .filter((v) => v instanceof File);
              let total = 0;
              for (const f of files) {
                total += f.size || 0;
                if (total > 25 * 1024 * 1024) {
                  alert(
                    "Total file size exceeds ~25 MB. Please upload smaller files."
                  );
                  setSubmitting(false);
                  return;
                }
              }
            } else {
              fd.delete("attachments"); // ensure no empty parts
            }

            const res = await fetch("/api/techsupport", {
              method: "POST",
              body: fd,
            });
            if (!res.ok) {
              const msg = await res.text().catch(() => "Unknown error");
              alert("Submission failed: " + msg);
              setSubmitting(false);
              return;
            }

            const data = await res.json();
            if (data?.ok) {
              const id = data.ticketId || "T-PENDING-000000";
              setHtml(renderThankYou(id));
            } else {
              alert("Submission failed.");
              setSubmitting(false);
            }
          }}
        >
          {/* Honeypot */}
          <div
            style={{
              position: "absolute",
              left: -10000,
              top: "auto",
              width: 1,
              height: 1,
              overflow: "hidden",
            }}
          >
            <label>
              Website <input name="website" autoComplete="off" />
            </label>
          </div>

          <div
            style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}
          >
            <Field label="Name *">
              <input name="name" required style={inputStyle} />
            </Field>
            <Field label="Company">
              <input name="company" style={inputStyle} />
            </Field>
            <Field label="Email *">
              <input type="email" name="email" required style={inputStyle} />
            </Field>
            <Field label="Phone">
              <input name="phone" placeholder="+1 ..." style={inputStyle} />
            </Field>
            <Field label="Priority *">
              <select name="priority" required style={selectStyle}>
                <option value="">Select…</option>
                <option>Low</option>
                <option>Normal</option>
                <option>High</option>
                <option>Urgent</option>
              </select>
            </Field>
            <Field label="Category *">
              <select name="category" required style={selectStyle}>
                <option value="">Select…</option>
                <option>Hardware</option>
                <option>Software</option>
                <option>Network</option>
                <option>Account / Access</option>
                <option>Billing</option>
                <option>Other</option>
              </select>
            </Field>
          </div>

          <div
            style={{
              display: "grid",
              gap: 16,
              gridTemplateColumns: "1fr",
              marginTop: 16,
            }}
          >
            <Field label="Subject *">
              <input name="subject" required style={inputStyle} />
            </Field>
            <Field label="Description *">
              <textarea
                name="description"
                required
                placeholder="What happened? What have you tried so far?"
                style={{ ...inputStyle, minHeight: 140 }}
              />
            </Field>

            {/* Attachments (disabled for now) */}
            <Field label="Attachments">
              {UPLOADS_ENABLED ? (
                <>
                  <input
                    type="file"
                    name="attachments"
                    multiple
                    style={fileStyle}
                  />
                  <p style={{ color: "#94A3B8", fontSize: 13 }}>
                    You can select multiple files (max total ~25MB).
                  </p>
                </>
              ) : (
                <>
                  <input
                    type="file"
                    name="attachments"
                    multiple
                    disabled
                    aria-disabled="true"
                    title="File uploads coming soon"
                    style={fileStyleDisabled}
                  />
                  <span style={pill}>Coming soon</span>
                </>
              )}
            </Field>
          </div>

          <input
            type="hidden"
            name="userAgent"
            value={typeof navigator !== "undefined" ? navigator.userAgent : ""}
          />

          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              marginTop: 8,
            }}
          >
            <button disabled={submitting} style={btnStyle}>
              {submitting ? "Submitting…" : "Submit request"}
            </button>
            <span style={{ color: "#A7B1C2", fontSize: 13 }}>
              {submitting ? "Uploading files…" : ""}
            </span>
          </div>

          <footer style={{ marginTop: 16, color: "#9FB1C7", fontSize: 12 }}>
            By submitting, you agree to our support terms.
          </footer>
        </form>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label
        style={{
          fontWeight: 600,
          marginBottom: 6,
          display: "block",
          color: "#E5E7EB",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

/* ---- Dark UI styles ---- */
const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid #475569",
  background: "#0B1220",
  color: "#F8FAFC",
  fontSize: 14,
  outline: "none",
};

const selectStyle = {
  ...inputStyle,
  paddingRight: "40px",
  WebkitAppearance: "none",
  MozAppearance: "none",
  appearance: "none",
  backgroundImage:
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23E5E7EB' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 12px center",
  backgroundSize: "14px 14px",
};

const fileStyle = { ...inputStyle, padding: "8px 10px", cursor: "pointer" };
const fileStyleDisabled = {
  ...inputStyle,
  padding: "8px 10px",
  cursor: "not-allowed",
  opacity: 0.6,
};

const pill = {
  display: "inline-block",
  marginTop: 8,
  padding: "6px 10px",
  borderRadius: 999,
  background: "#0B1220",
  border: "1px solid #475569",
  color: "#E5E7EB",
  fontSize: 12,
  fontWeight: 600,
};

const btnStyle = {
  appearance: "none",
  border: "1px solid #3B82F6",
  background: "#3B82F6",
  color: "#0B1220",
  padding: "10px 16px",
  borderRadius: 999,
  cursor: "pointer",
  fontWeight: 700,
};

/* ---- Thank-you HTML with big bottom space (never collides with footer) ---- */
function renderThankYou(ticketId) {
  return `<!doctype html><html><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Thanks — Request Received</title>
<style>
  :root { --pb: calc(32vh + env(safe-area-inset-bottom, 0px)); }
  html, body { height: auto; }
  body{
    box-sizing:border-box;
    font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
    margin:0;
    padding:24px 24px var(--pb);
    background:#364153;
    color:#E5E7EB;
    min-height:100vh;
  }
  .wrap{max-width:720px;margin:0 auto}
  .card{
    background:#1e2939;border:1px solid #334155;border-radius:16px;
    padding:24px;box-shadow:0 2px 10px rgba(0,0,0,.25)
  }
  h1{margin:0 0 12px;font-size:1.6rem;color:#F8FAFC}
  p{color:#CBD5E1}
  .spacer{height:10vh;}
  .pill{
    display:inline-block;margin-top:16px;padding:8px 14px;border-radius:999px;
    background:#0B1220;border:1px solid #475569;color:#E5E7EB;
    text-decoration:none;font-weight:600;font-size:14px
  }
  .pill:focus{outline:2px solid #3B82F6;outline-offset:3px}
</style></head><body>
  <div class="wrap">
    <div class="card">
      <h1>Thanks — we’ve got your request!</h1>
      <p>Your ticket number is <strong style="color:#F8FAFC">${ticketId}</strong>.</p>
      <p>We’ll be in touch by email shortly. You can reply to the confirmation to add more details or attachments.</p>
      <a class="pill" href="${
        typeof HOME_URL !== "undefined" ? HOME_URL : "/"
      }">← Back to site</a>
    </div>
    <div class="spacer"></div>
  </div>
</body></html>`;
}
