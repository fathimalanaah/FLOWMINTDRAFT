"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

const fields = [
  { name: "name", label: "Your name", type: "text", autoComplete: "name" },
  { name: "company", label: "Company", type: "text", autoComplete: "organization" },
  { name: "contact", label: "Email or WhatsApp number", type: "text", autoComplete: "email" },
] as const;

/**
 * Posts to /api/contact, which sends through Resend. Every outcome is shown to
 * the visitor: success, validation failure, and send failure with the email
 * address as a fallback. Nothing is silently swallowed.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus({ kind: "sending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          contact: data.get("contact"),
          task: data.get("task"),
          website: data.get("website"),
        }),
      });

      const result = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setStatus({
          kind: "error",
          message: result.error ?? `Something went wrong. Please email ${site.email} directly.`,
        });
        return;
      }

      form.reset();
      setStatus({ kind: "sent" });
    } catch {
      setStatus({
        kind: "error",
        message: `Could not reach the server. Please email ${site.email} or message on WhatsApp.`,
      });
    }
  }

  if (status.kind === "sent") {
    return (
      <div role="status" className="border border-mint/40 bg-surface p-7">
        <p className="font-mono text-[0.8125rem] tracking-[0.14em] uppercase text-mint">Message sent</p>
        <p className="mt-4 text-[1.0625rem] text-fg">
          Thanks. I read these myself and reply within one working day, usually sooner.
        </p>
        <p className="mt-3 text-[0.9375rem] text-muted">
          If it is urgent, message me on{" "}
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-mint underline">
            WhatsApp
          </a>{" "}
          instead.
        </p>
      </div>
    );
  }

  const sending = status.kind === "sending";

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="label block text-fg">
            {field.label}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            autoComplete={field.autoComplete}
            required
            disabled={sending}
            className="mt-2 w-full border border-line bg-surface px-4 py-3 text-[1rem] text-fg transition-colors placeholder:text-muted/60 hover:border-line-strong focus:border-mint focus:outline-none disabled:opacity-60"
          />
        </div>
      ))}

      <div>
        <label htmlFor="task" className="label block text-fg">
          What is the task eating the most time right now?
        </label>
        <p className="mt-1.5 text-[0.875rem] text-muted">
          A sentence is enough. The more specific you are, the more useful my first reply.
        </p>
        <textarea
          id="task"
          name="task"
          rows={4}
          required
          disabled={sending}
          className="mt-2 w-full border border-line bg-surface px-4 py-3 text-[1rem] text-fg transition-colors hover:border-line-strong focus:border-mint focus:outline-none disabled:opacity-60"
        />
      </div>

      {/* Honeypot: visually hidden, never announced, never tabbable. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="bg-mint px-6 py-3 font-mono text-[0.8125rem] tracking-[0.12em] uppercase text-ink transition-colors hover:bg-fg disabled:opacity-60"
      >
        {sending ? "Sending…" : "Send message"}
      </button>

      {status.kind === "error" ? (
        <p role="alert" className="border-l-2 border-sand pl-4 text-[0.9375rem] text-sand">
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
