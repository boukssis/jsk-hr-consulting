"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { ServiceSection } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const tones: Record<ServiceSection["tone"], string> = {
  ivory: "bg-ivory",
  white: "bg-white",
  soft: "bg-soft/70",
  navy: "bg-navy",
};

export function ServiceEditorial({
  section,
  total,
}: {
  section: ServiceSection;
  total: number;
}) {
  const isDark = section.tone === "navy";
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={section.id}
      className={cn(
        "scroll-target relative overflow-hidden border-b border-navy/8 py-14 sm:py-20",
        tones[section.tone],
      )}
    >
      {isDark ? (
        <div className="pointer-events-none absolute inset-0 hero-grid opacity-15" />
      ) : null}

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className={cn(
                "text-[11px] font-semibold uppercase tracking-[0.22em]",
                isDark ? "text-sage" : "text-sage-deep",
              )}
            >
              Service {section.number}
              <span className={isDark ? "text-ivory/35" : "text-navy/25"}>
                {" "}
                / {String(total).padStart(2, "0")}
              </span>
            </p>

            <h2
              className={cn(
                "mt-4 max-w-md font-display text-[clamp(1.85rem,4vw,2.85rem)] leading-[1.08] text-balance",
                isDark ? "text-ivory" : "text-navy",
              )}
            >
              {section.title}
            </h2>

            <p
              className={cn(
                "mt-4 max-w-md text-base leading-relaxed",
                isDark ? "text-ivory/70" : "text-muted",
              )}
            >
              {section.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className={cn(
                  "group inline-flex items-center gap-2 rounded-sm border px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300",
                  "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
                  isDark
                    ? "border-sage/50 text-sage hover:border-sage hover:bg-sage hover:text-navy"
                    : "border-navy/20 text-navy hover:border-sage hover:bg-sage hover:text-navy",
                )}
              >
                Discuss this service
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="#services-directory"
                className={cn(
                  "text-[11px] font-semibold uppercase tracking-[0.14em] transition",
                  isDark
                    ? "text-ivory/45 hover:text-sage"
                    : "text-muted hover:text-navy",
                )}
              >
                Back to directory
              </a>
            </div>
          </motion.div>

          <ul className="grid gap-2 sm:grid-cols-2">
            {section.items.map((item, itemIndex) => (
              <motion.li
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: reduceMotion ? 0 : 0.04 * itemIndex,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className={cn(
                    "flex h-full items-start gap-3 border px-4 py-4 transition-all duration-300",
                    "hover:-translate-y-0.5",
                    isDark
                      ? "border-white/12 bg-white/5 hover:border-sage/60 hover:bg-sage/10"
                      : "border-navy/10 bg-white/80 hover:border-sage hover:bg-soft hover:shadow-[0_16px_32px_-24px_rgba(8,32,48,0.35)]",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 shrink-0 font-display text-base leading-none",
                      isDark ? "text-sage" : "text-sage-deep",
                    )}
                  >
                    {String(itemIndex + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p
                      className={cn(
                        "text-sm font-semibold leading-snug",
                        isDark ? "text-ivory" : "text-navy",
                      )}
                    >
                      {item.title}
                    </p>
                    <p
                      className={cn(
                        "mt-1.5 text-xs leading-relaxed sm:text-[13px]",
                        isDark ? "text-ivory/55" : "text-muted",
                      )}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
