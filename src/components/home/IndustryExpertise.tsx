import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const list = [
  {
    title: "Nuclear & Energy",
    line: "Workforce continuity in complex operating environments.",
    href: "/industries#nuclear",
  },
  {
    title: "Construction",
    line: "People practices for project-driven teams.",
    href: "/industries#construction",
  },
  {
    title: "Growing Businesses",
    line: "Senior HR support without a full department.",
    href: "/industries#smb",
  },
];

export function IndustryExpertise() {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <Container>
        <Reveal className="mb-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-copper">
            Industries
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.05] text-ink">
            Where the work gets complex.
          </h2>
        </Reveal>
        <div className="grid items-stretch gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <Link
              href="/industries"
              className="group relative block min-h-[320px] overflow-hidden bg-soft sm:min-h-[460px]"
            >
              <Image
                src="/images/workspace.jpg"
                alt="A quiet workplace interior"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </Link>
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal>
              <p className="max-w-sm text-base leading-relaxed text-muted">
                Experience across nuclear and energy settings, construction
                workforces, and growing small to midsize businesses.
              </p>
            </Reveal>
            <ul className="mt-8 border-t border-ink/10">
              {list.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-start justify-between gap-4 border-b border-ink/10 py-5"
                  >
                    <div>
                      <p className="font-display text-sm text-copper">0{index + 1}</p>
                      <h3 className="mt-1 font-display text-2xl text-ink transition-colors group-hover:text-sage-deep">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{item.line}</p>
                    </div>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-ink/35 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-copper" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
