# Setup still to do

Three things are wired up in code but need accounts or DNS before they work.
Each is self-contained and none of them require a developer.

---

## 1. Calendly (makes /book work) — 20 minutes

Right now `/book` shows "Calendar not connected yet" and falls back to WhatsApp
and email. That's deliberate, it beats a broken embed, but it isn't the goal.

1. Sign up at [calendly.com](https://calendly.com). Free plan is enough for one
   event type.
2. Create **one** event type. Not three.
   - Name: **20-minute automation audit**
   - Duration: 20 minutes
   - Location: Google Meet, Zoom, or Phone
   - Add one required question: *"What task is eating the most time right now?"*
     This is what makes the call useful and it filters out tyre-kickers.
3. Set your availability. Be honest about it. A calendar showing 9am to 9pm
   seven days a week reads as "no clients".
4. Copy the event link. It looks like
   `https://calendly.com/your-name/20-minute-automation-audit`.
5. Paste it into `lib/site.ts`:

   ```ts
   booking: {
     calendly: "https://calendly.com/your-name/20-minute-automation-audit",
   ```

That's the only change. The embed picks up the brand colours automatically.

---

## 2. Resend (makes the contact form send) — 15 minutes

The form posts to `/api/contact`. Without an API key it returns a clear error
telling the visitor to email you instead, so nothing is silently lost, but the
form itself won't deliver until this is done.

1. Sign up at [resend.com](https://resend.com). Free tier covers 3,000
   emails/month, far more than you'll need.
2. **API Keys → Create API Key.** Copy it. You only see it once.
3. In Vercel: **Project → Settings → Environment Variables.** Add:

   | Name | Value | Environments |
   |---|---|---|
   | `RESEND_API_KEY` | the key you copied | Production, Preview, Development |

4. Redeploy. Vercel doesn't apply new env vars to existing builds.
5. Send yourself a test through the live form.

Until you verify a domain with Resend, mail sends from `onboarding@resend.dev`.
That works, it just looks slightly odd in your inbox. Once the domain below is
live, verify it with Resend and add a second variable:

| Name | Value |
|---|---|
| `CONTACT_FROM` | `Flow Mint <hello@yourdomain.com>` |

For local testing, put the key in `.env.local` (already gitignored):

```
RESEND_API_KEY=re_xxxxxxxxxx
```

---

## 3. Custom domain — 1 hour, mostly waiting on DNS

`flowmintdraft.vercel.app` and `flowmint@gmail.com` together tell someone
considering an AED 18,000 purchase that this is a side project. This is the
single cheapest credibility fix available and everything else is worth less
until it's done.

### Buy it

Namecheap, Cloudflare, or GoDaddy. Cloudflare sells at cost and its DNS is the
easiest to work with. Roughly AED 40 to 150 a year.

Suggested, in order of preference: `flowmint.ae` · `flowmint.io` ·
`flowmint.co` · `getflowmint.com`. A `.ae` signals local, which matters to a
Dubai SME.

### Point it at Vercel

1. Vercel → **Project → Settings → Domains → Add**. Enter the domain.
2. Vercel shows the exact records to create. Usually:

   | Type | Name | Value |
   |---|---|---|
   | `A` | `@` | `76.76.21.21` |
   | `CNAME` | `www` | `cname.vercel-dns.com` |

3. Add those at your registrar. Propagation is usually minutes, occasionally
   up to 48 hours.
4. Vercel issues the SSL certificate automatically once DNS resolves.

### Email on the domain

Cheapest credible options: Zoho Mail (free for one mailbox on your own domain)
or Google Workspace (about AED 25/user/month). Either gives you
`hello@flowmint.ae` instead of a Gmail address.

### Then update one file

In `lib/site.ts`:

```ts
email: "hello@yourdomain.ae",
url: "https://yourdomain.ae",
```

Everything else reads from there: metadata, canonical URLs, OG tags, the
footer, the contact page, and the API handler. One edit, whole site.

---

## Optional, once you have a first client

- **Trade licence number** in the footer. In the UAE this carries real weight.
- **A real headshot.** Drop a square image at `public/art/founder.webp` and set
  `founder.photo` in `lib/site.ts` to `"/art/founder.webp"`. Until then the
  About page shows your initials, which is honest and fine.
- **One worked example.** Build an automation for your own enquiries,
  screenshot the n8n canvas and the WhatsApp thread, and put it on the site.
  "Here's one I run for myself" is genuine proof and beats every animation.
