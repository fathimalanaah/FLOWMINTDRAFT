"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/**
 * No backend yet, and the form does not pretend otherwise: it composes the
 * message and hands it to the visitor's mail client, so nothing is silently
 * swallowed. Swap in a real handler (Resend, Formspree) before launch and the
 * markup stays as it is.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company")}`,
      `Contact: ${data.get("contact")}`,
      "",
      "The task eating the most time right now:",
      String(data.get("task")),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Enquiry from ${data.get("name")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {[
        { name: "name", label: "Your name", type: "text", autoComplete: "name" },
        { name: "company", label: "Company", type: "text", autoComplete: "organization" },
        {
          name: "contact",
          label: "Email or WhatsApp number",
          type: "text",
          autoComplete: "email",
        },
      ].map((field) => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className="label block text-fg"
          >
            {field.label}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            autoComplete={field.autoComplete}
            required
            className="mt-2 w-full border border-line bg-surface px-4 py-3 text-[1rem] text-fg transition-colors placeholder:text-muted/60 hover:border-line-strong focus:border-mint focus:outline-none"
          />
        </div>
      ))}

      <div>
        <label htmlFor="task" className="label block text-fg">
          What is the task eating the most time right now?
        </label>
        <p className="mt-1.5 text-[0.875rem] text-muted">
          A sentence is enough. The more specific, the more useful our first reply.
        </p>
        <textarea
          id="task"
          name="task"
          rows={4}
          required
          className="mt-2 w-full border border-line bg-surface px-4 py-3 text-[1rem] text-fg transition-colors hover:border-line-strong focus:border-mint focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="bg-mint px-6 py-3 font-mono text-[0.8125rem] tracking-[0.12em] uppercase text-ink transition-colors hover:bg-fg"
      >
        Send message
      </button>

      {sent ? (
        <p role="status" className="text-[0.9375rem] text-mint">
          Your mail app should have opened with the message ready to send. If it did not, write to{" "}
          {site.email} or message us on WhatsApp.
        </p>
      ) : null}
    </form>
  );
}
