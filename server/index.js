import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT || 587;
const SMTP_SECURE = process.env.SMTP_SECURE === "true";
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const DEST_EMAIL = process.env.MY_EMAIL || SMTP_USER;

if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
  console.warn(
    "SMTP credentials not configured. Please set SMTP_HOST, SMTP_USER and SMTP_PASS in .env",
  );
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: SMTP_SECURE,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message)
    return res.status(400).json({ error: "Missing fields" });

  try {
    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      to: DEST_EMAIL,
      subject: `Portfolio contact from ${name} <${email}>`,
      text: message,
      html: `<p><strong>${name} &lt;${email}&gt;</strong></p><div>${message}</div>`,
    });

    console.log("Message sent:", info.messageId);
    return res.json({ ok: true });
  } catch (err) {
    console.error("Mail error:", err);
    return res.status(500).json({ error: "Failed to send" });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Mail server running on http://localhost:${port}`),
);
