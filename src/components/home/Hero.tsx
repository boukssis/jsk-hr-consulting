"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroGraphics } from "./HeroGraphics";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const item = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduceMotion ? 0 : 0.08 + i * 0.12,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-ivory sm:min-h-[calc(100svh-5rem)]">
      <HeroGraphics />

      <Container className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center py-14 sm:min-h-[calc(100svh-5rem)] lg:py-20">
        <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-4xl">
            <motion.div custom={0} initial="hidden" animate="show" variants={item}>
              <Eyebrow>Independent HR Consulting · South Carolina</Eyebrow>
            </motion.div>

            <motion.h1
              className="mt-6 font-sans text-[clamp(2.85rem,9.5vw,7.8rem)] font-semibold leading-[0.9] tracking-[-0.048em] text-navy"
              custom={1}
              initial="hidden"
              animate="show"
              variants={item}
            >
              People make
            </motion.h1>

            <motion.div
              className="relative mt-1 inline-block max-w-full"
              custom={2}
              initial="hidden"
              animate="show"
              variants={item}
            >
              <span className="font-display-italic text-[clamp(2.85rem,9.5vw,7.8rem)] leading-[0.9] tracking-[-0.04em] text-sage">
                business work.
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left bg-gradient-to-r from-sage via-sage-deep to-transparent sm:-bottom-2"
                initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: reduceMotion ? 0 : 0.9,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </motion.div>

            <motion.p
              className="mt-7 max-w-lg text-base leading-relaxed text-muted sm:mt-8 sm:text-lg"
              custom={3}
              initial="hidden"
              animate="show"
              variants={item}
            >
              Experienced HR guidance for stronger teams, confident leaders, and
              growing organizations.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center"
              custom={4}
              initial="hidden"
              animate="show"
              variants={item}
            >
              <Button href="/contact">Let&apos;s Talk About Your Business</Button>
              <Button href="/services" variant="outlineDark">
                Explore Our Services
              </Button>
            </motion.div>
          </div>

          <motion.aside
            className="relative hidden lg:block"
            custom={5}
            initial="hidden"
            animate="show"
            variants={item}
          >
            <div className="ml-auto max-w-sm border border-navy/10 bg-white/55 p-7 backdrop-blur-[2px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage-deep">
                The human element
              </p>
              <p className="mt-4 font-display text-2xl leading-snug text-navy">
                Strategy is clearer when people are at the center of every
                decision.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Strategic HR", "Leadership", "Relations"].map((tag) => (
                  <span
                    key={tag}
                    className="border border-navy/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.div
          className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-navy/10 pt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted lg:mt-16"
          custom={6}
          initial="hidden"
          animate="show"
          variants={item}
        >
          <span>Strategic HR</span>
          <span className="hidden h-3 w-px bg-navy/15 sm:block" aria-hidden />
          <span>Leadership Development</span>
          <span className="hidden h-3 w-px bg-navy/15 sm:block" aria-hidden />
          <span>Employee Relations</span>
        </motion.div>
      </Container>
    </section>
  );
}
