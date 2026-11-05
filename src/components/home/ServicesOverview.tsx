"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { homepageServices } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const shortLines: Record<string, string> = {
  "strategic-hr": "People strategy that fits how you grow.",
  "leadership-development": "Stronger leaders. Clearer teams.",
  "talent-acquisition": "Find and shape the talent you need.",
  "employee-relations": "Fair, steady workplace guidance.",
  "organizational-change": "Navigate change with confidence.",
  "career-transition": "Move forward with clarity.",
};

export function ServicesOverview() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage-deep">
              What we do
            </p>
            <h2 className="mt-3 max-w-lg font-display text-[clamp(1.9rem,4vw,3rem)] leading-[1.08] text-navy">
              Clear services.{" "}
              <span className="font-display-italic text-sage">Real impact.</span>
            </h2>
          </div>
          <Button href="/services" variant="outlineDark" className="!px-5 !py-3 self-start sm:self-auto">
            View all services
          </Button>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {homepageServices.map((service, index) => {
            const featured = index === 0;
            return (
              <motion.div
                key={service.id}
                className={featured ? "sm:col-span-2 lg:col-span-1" : undefined}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: reduceMotion ? 0 : 0.05 * index,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={service.href}
                  className={cn(
                    "group relative flex h-full min-h-[180px] flex-col justify-between overflow-hidden border p-6 transition-all duration-300",
                    "hover:-translate-y-1 active:translate-y-0 active:scale-[0.99]",
                    featured
                      ? "border-navy bg-navy text-ivory hover:border-sage hover:shadow-[0_24px_48px_-20px_rgba(8,32,48,0.55)]"
                      : "border-navy/10 bg-ivory hover:border-sage hover:bg-navy hover:shadow-[0_20px_40px_-24px_rgba(8,32,48,0.55)]",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "font-display text-3xl leading-none",
                        featured ? "text-sage" : "text-sage group-hover:text-sage",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300",
                        featured
                          ? "border-sage/40 text-sage group-hover:border-sage group-hover:bg-sage group-hover:text-navy"
                          : "border-navy/10 text-navy group-hover:border-sage group-hover:bg-sage group-hover:text-navy",
                      )}
                    >
                      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  <div className="mt-8">
                    <h3
                      className={cn(
                        "font-display text-xl leading-snug sm:text-[1.4rem]",
                        featured
                          ? "text-ivory"
                          : "text-navy transition group-hover:text-ivory",
                      )}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-2 text-sm leading-relaxed",
                        featured
                          ? "text-ivory/65"
                          : "text-muted transition group-hover:text-ivory/70",
                      )}
                    >
                      {shortLines[service.id] ?? service.description}
                    </p>
                  </div>

                  <span
                    className={cn(
                      "pointer-events-none absolute bottom-0 left-0 h-1 bg-sage transition-all duration-500",
                      featured ? "w-full" : "w-0 group-hover:w-full",
                    )}
                    aria-hidden
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
