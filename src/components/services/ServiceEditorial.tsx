import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ServiceSection } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const tones: Record<ServiceSection["tone"], string> = {
  ivory: "bg-ivory text-navy",
  white: "bg-white text-navy",
  soft: "bg-soft/70 text-navy",
  navy: "bg-navy text-ivory",
};

export function ServiceEditorial({
  section,
  showCta = false,
}: {
  section: ServiceSection;
  showCta?: boolean;
}) {
  const isDark = section.tone === "navy";

  return (
    <section
      id={section.id}
      className={cn("scroll-target py-16 sm:py-20", tones[section.tone])}
    >
      <Container>
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div>
              <p
                className={cn(
                  "font-display text-4xl",
                  isDark ? "text-sage" : "text-sage",
                )}
              >
                {section.number}
              </p>
              <h2
                className={cn(
                  "mt-4 font-display text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.08]",
                  isDark ? "text-ivory" : "text-navy",
                )}
              >
                {section.title}
              </h2>
              <p
                className={cn(
                  "mt-5 text-base leading-relaxed",
                  isDark ? "text-ivory/70" : "text-muted",
                )}
              >
                {section.summary}
              </p>
              {showCta ? (
                <Link
                  href="/contact"
                  className={cn(
                    "mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition",
                    isDark
                      ? "text-sage hover:text-ivory"
                      : "text-sage-deep hover:text-navy",
                  )}
                >
                  Discuss this area
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              ) : null}
            </div>

            <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {section.items.map((item) => (
                <li
                  key={item.title}
                  className={cn(
                    "border-t pt-4",
                    isDark ? "border-white/15" : "border-navy/10",
                  )}
                >
                  <h3
                    className={cn(
                      "font-display text-xl",
                      isDark ? "text-ivory" : "text-navy",
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-sm leading-relaxed",
                      isDark ? "text-ivory/65" : "text-muted",
                    )}
                  >
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
