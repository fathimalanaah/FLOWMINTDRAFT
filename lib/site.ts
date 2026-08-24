// Single source of truth for everything that appears in more than one place.
// Swapping the email to a domain address is a one-line change here.

export const site = {
  name: "Flow Mint",
  tagline: "Automations that pay for themselves",
  city: "Dubai",
  email: "flowmint@gmail.com",
  phoneDisplay: "+971 58 562 0044",
  phoneLink: "+971585620044",
  whatsapp: "https://wa.me/971585620044",
} as const;

export const mailto = `mailto:${site.email}`;
export const tel = `tel:${site.phoneLink}`;

/** The four stages every Flow Mint build passes through. Order carries meaning. */
export const stages = [
  {
    key: "intake",
    name: "Intake",
    line: "Work arrives — a form, an email, a WhatsApp message, a PDF — and gets read the same way every time.",
  },
  {
    key: "route",
    name: "Route",
    line: "Rules decide where it goes. The urgent ones jump the queue. Nothing waits for someone to notice it.",
  },
  {
    key: "agent",
    name: "Agent",
    line: "The judgement calls — drafting a reply, pulling the right price, checking a document — run on a model with your data behind it.",
  },
  {
    key: "handoff",
    name: "Handoff",
    line: "The result lands where your team already works. Your CRM, your inbox, your sheet. No new app to learn.",
  },
] as const;

/** Starting prices, benchmarked against published Dubai/UAE market ranges (Aug 2026). */
export const packages = [
  {
    name: "Starter",
    price: "AED 6,000",
    unit: "one-off",
    summary: "One workflow, fixed scope, running in your own accounts.",
    includes: [
      "One workflow, scoped and priced before we start",
      "Built in your accounts — n8n, Make, or your existing stack",
      "Two rounds of changes after handover",
      "A written runbook so your team can maintain it",
    ],
    excludes: ["Ongoing changes after the two rounds", "New workflows"],
    retainer: null,
  },
  {
    name: "Growth",
    price: "AED 18,000",
    unit: "setup",
    retainer: "AED 3,500/month",
    summary: "Several workflows plus one AI agent, with someone on the hook when it breaks.",
    includes: [
      "Up to four connected workflows",
      "One AI agent — support, sales, or internal",
      "CRM and WhatsApp Business integration",
      "Monthly review, changes, and monitoring",
    ],
    excludes: ["Custom software builds", "Data migration projects"],
    featured: true,
  },
  {
    name: "Embedded",
    price: "AED 9,000",
    unit: "per month",
    summary: "We keep building. New automations every month, and we own the maintenance.",
    includes: [
      "Continuous build — new automations as they are needed",
      "All existing workflows maintained and monitored",
      "Priority response",
      "Quarterly review of what to automate next",
    ],
    excludes: ["Exclusivity", "Staff placed on your site"],
    retainer: null,
  },
] as const;

export const services = [
  {
    slug: "whatsapp",
    name: "WhatsApp AI assistant",
    from: "AED 12,000",
    what: "An assistant on your WhatsApp Business number that answers the questions your team answers forty times a day.",
    running:
      "A customer messages at 11pm asking about pricing and availability. They get a straight answer in Arabic or English, and if they want to buy, the conversation lands in your CRM with the context attached.",
    tools: ["WhatsApp Business API", "n8n", "your CRM"],
    timeline: "2–3 weeks",
  },
  {
    slug: "lead-routing",
    name: "Lead capture and routing",
    from: "AED 8,000",
    what: "Every enquiry from every channel, captured, scored, and sent to the right person before it goes cold.",
    running:
      "A form submission, a WhatsApp message, and a phone enquiry all arrive as the same shape of record. The ones worth chasing today are flagged today.",
    tools: ["n8n or Make", "CRM", "email and WhatsApp"],
    timeline: "1–2 weeks",
  },
  {
    slug: "documents",
    name: "Document and invoice processing",
    from: "AED 9,000",
    what: "Invoices, delivery notes, and contracts read automatically and written into your accounts system.",
    running:
      "A supplier emails a PDF invoice. The line items are extracted, checked against the purchase order, and queued for approval. Nobody retypes anything.",
    tools: ["document AI", "n8n", "your accounting system"],
    timeline: "3–4 weeks",
  },
  {
    slug: "agents",
    name: "Custom AI agent",
    from: "AED 18,000",
    what: "An agent that does a specific job in your business, with your data behind it and limits you set.",
    running:
      "A sales agent that drafts quotes from your real price list, or an internal one that answers staff questions from your own documents. It asks before it acts on anything that matters.",
    tools: ["Claude or GPT", "your document store", "n8n"],
    timeline: "4–6 weeks",
  },
  {
    slug: "consulting",
    name: "Support and optimisation",
    from: "AED 1,200",
    fromUnit: "per month",
    what: "Someone who knows your setup, watching it and improving it.",
    running:
      "Workflows are monitored, failures get caught before you hear about them from a customer, and each month something gets a little faster.",
    tools: ["monitoring", "monthly review"],
    timeline: "ongoing",
  },
] as const;

/** What genuinely moves a quote. Written to be read by a sceptic. */
export const priceFactors = [
  {
    factor: "How many systems have to talk",
    detail: "Two is straightforward. Six, where two of them are older than your company, is not.",
  },
  {
    factor: "Whether your tools have a usable API",
    detail:
      "Most modern software does. Some local accounting and property systems do not, and working around that costs real time.",
  },
  {
    factor: "The state of your data",
    detail: "If the same customer exists three times under three spellings, that gets fixed first.",
  },
  {
    factor: "Arabic content",
    detail: "Bilingual flows need more testing, and someone who reads both to check the output.",
  },
] as const;
