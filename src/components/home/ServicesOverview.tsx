"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { featuredServices } from "@/data/services";
import { Container } from "@/components/ui/Container";

export function ServicesOverview() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-ivory py-16 sm:py-24">
      <Container>
        <div className="mb-8 max-w-2xl sm:mb-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-copper">
            Expertise
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.05] text-ink">
            Expert guidance for the moments that matter.
          </h2>
        </div>

        <ul className="border-t border-ink/15">
          {featuredServices.map((service, index) => (
            <motion.li
              key={service.id}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: reduceMotion ? 0 : index * 0.04, duration: 0.45 }}
            >
              <Link
                href={service.href}
                className="group relative grid grid-cols-[auto_1fr_auto] items-start gap-x-4 gap-y-2 border-b border-ink/15 py-5 transition-colors duration-300 hover:bg-ink hover:text-paper sm:grid-cols-[4.5rem_minmax(0,1.15fr)_minmax(0,0.95fr)_auto] sm:items-center sm:gap-x-8 sm:px-4 sm:py-7"
              >
                <span className="font-display text-xl text-copper sm:text-2xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[1.35rem] leading-tight text-ink transition-colors group-hover:text-paper sm:text-[1.65rem]">
                  {service.title}
                </span>
                <span className="col-span-2 col-start-2 text-sm leading-relaxed text-muted transition-colors group-hover:text-paper/65 sm:col-span-1 sm:col-start-3">
                  {service.summary}
                </span>
                <ArrowRight className="mt-1 h-4 w-4 text-ink/35 transition-all duration-300 group-hover:translate-x-1 group-hover:text-copper sm:mt-0" />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-copper transition-transform duration-500 group-hover:scale-x-100" />
              </Link>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
