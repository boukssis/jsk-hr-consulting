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
    "Strategic HR guidance for growing businesses, stronger leaders, and workplaces built to thrive.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://jsk-hr-consulting.vercel.app",
  linkedIn: {
    company: "https://www.linkedin.com/company/junesperanzakerr/",
    personal: "https://www.linkedin.com/in/junesperanzakerr/",
  },
  /** Keep search engines from indexing until officially approved. */
  noindex: true,
  /** Form stays closed until a verified recipient is authorized. */
  acceptEnquiries: Boolean(
    process.env.CONTACT_TO_EMAIL &&
      process.env.RESEND_API_KEY &&
      process.env.CONTACT_ACCEPT_ENQUIRIES === "true",
  ),
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const headerLinks = navLinks.filter((link) => link.href !== "/contact");

export const serviceInterestOptions = [
  "HR Advisory",
  "Leadership Development",
  "Talent Acquisition",
  "Employee Relations",
  "Organizational Change",
  "Career Coaching",
  "Other",
] as const;

export const expertiseStrip = [
  "HR Strategy",
  "Leadership",
  "Employee Relations",
  "Organizational Change",
] as const;
