import { NextResponse } from "next/server";
import { site } from "@/lib/site";

/**
 * Contact handler.
 *
 * The form used to compose a `mailto:` and set window.location. On Gmail web,
 * Outlook web, or any phone without a configured mail client that silently did
 * nothing, so enquiries were being lost with no error shown to the sender.
 *
 * This posts through Resend instead. Set RESEND_API_KEY in the environment
 * (Vercel → Settings → Environment Variables) and it sends. Without the key it
 * returns a clear 503 rather than pretending to have succeeded, and the client
 * shows the fallback address.
 */

export const runtime = "nodejs";

type Payload = {
  name?: unknown;
  company?: unknown;
  contact?: unknown;
  task?: unknown;
  /** Honeypot. Real people leave it empty; most bots fill every field. */
  website?: unknown;
};

const asString = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  if (asString(body.website, 100)) {
    // Silently accept so the bot does not retry, but send nothing.
    return NextResponse.json({ ok: true });
  }

  const name = asString(body.name, 120);
  const company = asString(body.company, 120);
  const contact = asString(body.contact, 160);
  const task = asString(body.task, 4000);

  if (!name || !company || !contact || !task) {
    return NextResponse.json(
      { error: "Please fill in every field so I can reply properly." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error: `Message could not be sent automatically. Please email ${site.email} directly.`,
      },
      { status: 503 },
    );
  }

  const text = [
    `Name: ${name}`,
    `Company: ${company}`,
    `Contact: ${contact}`,
    "",
    "The task eating the most time right now:",
    task,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Until the custom domain is verified with Resend this must stay on
        // their shared sending domain. See DOMAIN-SETUP.md.
        from: process.env.CONTACT_FROM ?? "Flow Mint <onboarding@resend.dev>",
        to: [site.email],
        reply_to: contact.includes("@") ? contact : undefined,
        subject: `Enquiry from ${name} (${company})`,
        text,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Resend rejected the message:", response.status, detail);
      return NextResponse.json(
        { error: `Message could not be sent. Please email ${site.email} directly.` },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact send failed:", error);
    return NextResponse.json(
      { error: `Message could not be sent. Please email ${site.email} directly.` },
      { status: 502 },
    );
  }
}
