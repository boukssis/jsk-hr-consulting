"use client";

import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { ServiceSection } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export function ServiceIndex({ sections }: { sections: ServiceSection[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services-directory"
      className="scroll-target border-b border-navy/8 bg-white py-12 sm:py-16"
    >
      <Container>
        <div className="mb-8 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage-deep">
              Jump to a focus area
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.7rem,3vw,2.4rem)] leading-tight text-navy">
              Choose where to start.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted">
            Tap any area to scroll straight to it.
          </p>
        </div>

        <nav aria-label="Service directory">
          <ul className="grid gap-px overflow-hidden border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
            {sections.map((section, index) => (
              <motion.li
                key={section.id}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  delay: reduceMotion ? 0 : 0.03 * index,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={`#${section.id}`}
                  className={cn(
                    "group flex h-full min-h-[132px] flex-col justify-between bg-white p-5 transition-all duration-300",
                    "hover:bg-navy active:scale-[0.99] sm:min-h-[148px] sm:p-6",
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-display text-2xl leading-none text-sage transition group-hover:text-sage">
                      {section.number}
                    </span>
                    <ArrowDownRight className="h-4 w-4 shrink-0 text-navy/30 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-sage" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg leading-snug text-navy transition group-hover:text-ivory sm:text-xl">
                      {section.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted transition group-hover:text-ivory/65">
                      {section.summary}
                    </p>
                  </div>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
