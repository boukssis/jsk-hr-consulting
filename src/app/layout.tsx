import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const display = DM_Serif_Display({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | HR Consulting South Carolina`,
    template: `%s | ${siteConfig.shortName} HR Consulting`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.consultant }],
  creator: siteConfig.name,
  robots: siteConfig.noindex
    ? {
        index: false,
        follow: false,
        googleBot: { index: false, follow: false },
      }
    : { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Strategic HR Consulting`,
    description: siteConfig.description,
    images: [
      {
        url: "/june-speranza-kerr.jpg",
        width: 800,
        height: 800,
        alt: "June Speranza Kerr, Senior HR Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Strategic HR Consulting`,
    description: siteConfig.description,
    images: ["/june-speranza-kerr.jpg"],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#202B31",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${display.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory text-ink">
        <Header />
        <main className="flex-1 pt-[var(--header-h)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
