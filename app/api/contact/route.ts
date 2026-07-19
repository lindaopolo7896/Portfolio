import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, message, company } = (body ?? {}) as Record<
    string,
    unknown
  >;

  // honeypot filled → almost certainly a bot; pretend success
  if (typeof company === "string" && company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    name.trim().length === 0 ||
    message.trim().length === 0 ||
    !EMAIL_RE.test(email)
  ) {
    return NextResponse.json(
      { error: "Please fill in your name, a valid email, and a message." },
      { status: 400 },
    );
  }

  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const {
    SMTP_HOST = "smtp.gmail.com",
    SMTP_PORT = "465",
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO,
  } = process.env;

  if (!SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: SMTP_USER / SMTP_PASS are not configured.");
    return NextResponse.json(
      { error: "The contact form isn't configured yet." },
      { status: 500 },
    );
  }

  const port = Number(SMTP_PORT);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio contact form" <${SMTP_USER}>`,
      to: CONTACT_TO ?? SMTP_USER,
      replyTo: `"${name.replaceAll('"', "'")}" <${email}>`,
      subject: `Portfolio inquiry from ${name}`,
      text: `${message}\n\n— ${name} (${email})`,
    });
  } catch (err) {
    console.error("Contact form: failed to send email.", err);
    return NextResponse.json(
      { error: "Couldn't send the message right now — please retry." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
