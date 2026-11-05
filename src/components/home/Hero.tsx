"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroGraphics } from "./HeroGraphics";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const item = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduceMotion ? 0 : 0.1 + i * 0.11,
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-ivory">
      <HeroGraphics />

      <Container className="relative flex min-h-[calc(100svh-5rem)] flex-col justify-center py-16 lg:py-20">
        <div className="max-w-6xl">
          <motion.div custom={0} initial="hidden" animate="show" variants={item}>
            <Eyebrow>Independent HR Consulting · South Carolina</Eyebrow>
          </motion.div>

          <motion.h1
            className="mt-7 max-w-[11ch] font-sans text-[clamp(3.4rem,8vw,8.5rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-navy sm:max-w-none"
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
            <span className="font-display-italic text-[clamp(3.4rem,8vw,8.5rem)] leading-[0.92] tracking-[-0.04em] text-sage">
              business work.
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 h-[3px] w-full origin-left bg-sage/70 sm:-bottom-2"
              initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: reduceMotion ? 0 : 0.85,
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </motion.div>

          <motion.p
            className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            custom={3}
            initial="hidden"
            animate="show"
            variants={item}
          >
            Experienced HR guidance for stronger teams, confident leaders, and
            growing organizations.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
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

          <motion.p
            className="mt-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted"
            custom={5}
            initial="hidden"
            animate="show"
            variants={item}
          >
            Strategic HR · Leadership · Employee Relations
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
