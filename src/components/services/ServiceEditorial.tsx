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

export function ServiceEditorial({ section }: { section: ServiceSection }) {
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
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-14">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <p
                className={cn(
                  "shrink-0 font-display text-[clamp(2.4rem,6vw,3.75rem)] leading-none tracking-[-0.04em]",
                  isDark ? "text-sage/45" : "text-sage/40",
                )}
              >
                {section.number}
              </p>
              <h2
                className={cn(
                  "min-w-0 pt-1 font-display text-[clamp(1.55rem,3.2vw,2.4rem)] leading-[1.12] text-balance",
                  isDark ? "text-ivory" : "text-navy",
                )}
              >
                {section.title}
              </h2>
            </div>
            <p
              className={cn(
                "mt-4 max-w-sm text-base leading-relaxed",
                isDark ? "text-ivory/70" : "text-muted",
              )}
            >
              {section.summary}
            </p>
            <Link
              href="/contact"
              className={cn(
                "group mt-7 inline-flex items-center gap-2 rounded-sm border px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300",
                "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
                isDark
                  ? "border-sage/50 text-sage hover:border-sage hover:bg-sage hover:text-navy"
                  : "border-navy/20 text-navy hover:border-sage hover:bg-sage hover:text-navy",
              )}
            >
              Discuss this service
              <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          <ul className="grid gap-2.5 sm:grid-cols-2">
            {section.items.map((item, index) => (
              <motion.li
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: reduceMotion ? 0 : 0.04 * index,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className={cn(
                    "group flex h-full min-h-[88px] items-start gap-3 border px-4 py-4 transition-all duration-300",
                    "hover:-translate-y-0.5",
                    isDark
                      ? "border-white/12 bg-white/5 hover:border-sage/60 hover:bg-sage/10"
                      : "border-navy/10 bg-white/80 hover:border-sage hover:bg-soft hover:shadow-[0_16px_32px_-24px_rgba(8,32,48,0.35)]",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 font-display text-lg leading-none",
                      isDark ? "text-sage" : "text-sage-deep",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p
                      className={cn(
                        "text-sm font-semibold leading-snug sm:text-[0.95rem]",
                        isDark ? "text-ivory" : "text-navy",
                      )}
                    >
                      {item.title}
                    </p>
                    <p
                      className={cn(
                        "mt-1.5 line-clamp-2 text-xs leading-relaxed sm:text-[13px]",
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
