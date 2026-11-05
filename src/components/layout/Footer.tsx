import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-white/10 bg-navy text-ivory">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-[0.9rem] bg-sage text-[13px] font-bold tracking-[0.08em] text-navy">
                JSK
              </span>
              <div>
                <p className="font-display text-xl">JSK</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory/60">
                  Human Resources Consulting
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/70">
              Experienced HR guidance for small and midsize organizations that
              value respect, dignity, and integrity in the workplace.
            </p>
            <p className="mt-5 text-sm text-ivory/55">
              {siteConfig.locationShort}
              <span className="mx-2 text-sage">·</span>
              Founded {siteConfig.founded}
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/75 transition hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage">
              Connect
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={siteConfig.linkedIn.personal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ivory/75 transition hover:text-ivory"
                >
                  <LinkedInIcon />
                  June&apos;s LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedIn.company}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ivory/75 transition hover:text-ivory"
                >
                  <LinkedInIcon />
                  Company LinkedIn
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-ivory/75 transition hover:text-ivory"
                >
                  Request a consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Private design concept · Not for public search indexing</p>
        </div>
      </Container>
    </footer>
  );
}
