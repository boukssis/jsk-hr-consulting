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
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-copper">
              Featured expertise
            </p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.05] text-ink">
              Six places to start
              <span className="mt-1 block font-display-italic text-sage-deep">
                when the people question is the hard one.
              </span>
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-ink"
          >
            Explore all services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
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
                className="group relative grid grid-cols-[auto_1fr_auto] items-start gap-x-4 gap-y-2 border-b border-ink/10 py-6 transition-colors duration-300 hover:bg-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper sm:grid-cols-[4.5rem_minmax(0,1.15fr)_minmax(0,0.95fr)_auto] sm:items-center sm:gap-x-8 sm:px-4 sm:py-8"
              >
                <span className="font-display text-xl text-copper sm:text-2xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[1.35rem] leading-tight text-ink sm:text-[1.7rem]">
                  {service.title}
                </span>
                <span className="col-span-2 col-start-2 text-sm leading-relaxed text-muted sm:col-span-1 sm:col-start-3">
                  {service.summary}
                </span>
                <ArrowRight className="mt-1 h-4 w-4 text-ink/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-copper sm:mt-0" />
              </Link>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
