import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-ivory">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label={`${siteConfig.name} home`}>
              <Logo tone="light" className="opacity-95" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/65">
              Strategic HR guidance for growing organizations that value respect,
              dignity, and integrity in the workplace.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sage">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/70 transition hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sage">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={siteConfig.linkedIn.personal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ivory/70 transition hover:text-ivory"
                >
                  <LinkedInIcon />
                  June Speranza Kerr
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedIn.company}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ivory/70 transition hover:text-ivory"
                >
                  <LinkedInIcon />
                  Company page
                </a>
              </li>
              <li className="pt-2 text-sm text-ivory/55">
                {siteConfig.locationShort}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-ivory/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {siteConfig.name}</p>
          <p>Founded {siteConfig.founded}</p>
        </div>
      </Container>
    </footer>
  );
}
