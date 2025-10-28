// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Accept JSON or form-encoded bodies
    const ct = req.headers.get("content-type") || "";
    let body;
    if (ct.includes("application/json")) {
      body = await req.json();
    } else {
      const form = await req.formData();
      body = Object.fromEntries(form.entries());
    }

    const { name, email, message } = body || {};
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    // SMTP transport (Gmail works if you use an App Password)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,                  // e.g. "smtp.gmail.com"
      port: Number(process.env.SMTP_PORT || 465),   // 465 secure, 587 STARTTLS
      secure: Number(process.env.SMTP_PORT || 465) === 465,
      auth: {
        user: process.env.SMTP_USER,                // your Gmail address
        pass: process.env.SMTP_PASS,                // app password, not your login pw
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || `"Brivience Contact" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO || process.env.SMTP_USER,
      replyTo: email,
      subject: `New message from ${name} — Brivience site`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><b>From:</b> ${name} &lt;${email}&gt;</p><p>${(message || "")
        .replace(/\n/g, "<br>")}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
