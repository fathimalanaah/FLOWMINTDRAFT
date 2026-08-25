import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, Geist_Mono } from "next/font/google";
import { site } from "@/lib/site";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

const description =
  "I build WhatsApp assistants, lead routing and invoice processing for Dubai SMEs. Fixed prices published up front, built in your own accounts, yours to keep.";

export const metadata: Metadata = {
  // Makes every relative URL below absolute, which is what OG scrapers need.
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · AI automation for Dubai businesses`,
    template: `%s · ${site.name}`,
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} · AI automation for Dubai businesses`,
    description,
    url: "/",
    siteName: site.name,
    locale: "en_AE",
    type: "website",
    // Without this every link pasted into WhatsApp, LinkedIn or Slack renders
    // as a bare grey rectangle.
    images: [
      {
        url: "/art/og-base.webp",
        width: 2752,
        height: 1536,
        alt: `${site.name} · AI automation for Dubai businesses`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · AI automation for Dubai businesses`,
    description,
    images: ["/art/og-base.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${instrument.variable} ${geistMono.variable}`}>
      <body>
        <SmoothScroll />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-mint focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
