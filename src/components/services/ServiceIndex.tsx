"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { ServiceSection } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export function ServiceIndex({ sections }: { sections: ServiceSection[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-paper py-12 sm:py-16">
      <Container>
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-copper">
              Practice areas
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.9rem,3.4vw,2.8rem)] text-ink">
              Choose a focus. Jump straight in.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted">Eight areas. One conversation.</p>
        </div>

        <nav aria-label="Service map">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sections.map((section, index) => {
              const featured = index === 0;
              return (
                <motion.li
                  key={section.id}
                  className={featured ? "sm:col-span-2" : undefined}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: reduceMotion ? 0 : 0.04 * index, duration: 0.45 }}
                >
                  <a
                    href={`#${section.id}`}
                    className={cn(
                      "group relative flex h-full min-h-[150px] flex-col justify-between overflow-hidden p-5 transition-colors duration-300 sm:min-h-[180px] sm:p-6",
                      featured
                        ? "bg-ink text-paper hover:bg-sage-deep"
                        : "bg-ivory text-ink hover:bg-ink hover:text-paper",
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className={cn(
                          "font-display text-3xl leading-none",
                          featured ? "text-copper" : "text-copper group-hover:text-copper",
                        )}
                      >
                        {section.number}
                      </span>
                      <ArrowUpRight className="h-4 w-4 opacity-50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl leading-tight">{section.title}</h3>
                      <p
                        className={cn(
                          "mt-2 max-w-sm text-sm leading-relaxed",
                          featured
                            ? "text-paper/65"
                            : "text-muted group-hover:text-paper/65",
                        )}
                      >
                        {section.summary}
                      </p>
                    </div>
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
