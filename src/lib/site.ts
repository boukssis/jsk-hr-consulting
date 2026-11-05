export const siteConfig = {
  name: "JSK Human Resources Consulting, LLC",
  shortName: "JSK",
  tagline: "Human Resources Consulting",
  consultant: "June Speranza Kerr",
  title: "Senior HR Consultant",
  founded: 2017,
  location: "Irmo, South Carolina, USA",
  locationShort: "Irmo, South Carolina",
  description:
    "Experienced human resources guidance for small and midsize organizations that need strategic HR support without a full in-house department.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  linkedIn: {
    company: "https://www.linkedin.com/company/junesperanzakerr/",
    personal: "https://www.linkedin.com/in/junesperanzakerr/",
  },
  preview: {
    isPrivateConcept: true,
    bannerText:
      "Private design concept for June Speranza Kerr — not an officially commissioned or endorsed website.",
  },
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const serviceInterestOptions = [
  "HR Advisory",
  "Leadership Development",
  "Talent Acquisition",
  "Employee Relations",
  "Organizational Change",
  "Career Coaching",
  "Other",
] as const;
