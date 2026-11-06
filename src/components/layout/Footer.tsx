import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.4fr_0.7fr_0.9fr]">
          <div>
            <Link href="/" aria-label={`${siteConfig.name} home`}>
              <Logo tone="light" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/65">
              Independent HR consulting for organizations that need senior
              guidance on people, leadership, and change.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-copper">
              Navigate
            </p>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/70 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-copper">
              Connect
            </p>
            <ul className="mt-5 space-y-2.5">
              <li>
                <a
                  href={siteConfig.linkedIn.personal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-paper/70 transition-colors hover:text-paper"
                >
                  <LinkedInIcon />
                  {siteConfig.consultant}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedIn.company}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-paper/70 transition-colors hover:text-paper"
                >
                  <LinkedInIcon />
                  Company page
                </a>
              </li>
              <li className="pt-2 text-sm text-paper/55">{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {siteConfig.name}
          </p>
          <p>Private design concept · Founded {siteConfig.founded}</p>
        </div>
      </Container>
    </footer>
  );
}
