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
        <div className="max-w-5xl">
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
            className="mt-7 max-w-md text-base leading-relaxed text-muted sm:mt-8 sm:text-lg"
            custom={3}
            initial="hidden"
            animate="show"
            variants={item}
          >
            Strategic HR for stronger teams, confident leaders, and growing
            organizations.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center"
            custom={4}
            initial="hidden"
            animate="show"
            variants={item}
          >
            <Button href="/contact">Let&apos;s Talk</Button>
            <Button href="/services" variant="outlineDark">
              Explore Services
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
