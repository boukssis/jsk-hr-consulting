"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroGraphics } from "./HeroGraphics";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const item = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduceMotion ? 0 : 0.08 + i * 0.1,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-ivory">
      <HeroGraphics />

      <Container className="relative flex min-h-[calc(100svh-5rem)] flex-col justify-center py-16 lg:py-24">
        <div className="max-w-5xl">
          <motion.div custom={0} initial="hidden" animate="show" variants={item}>
            <Eyebrow>Independent HR Advisory · South Carolina</Eyebrow>
          </motion.div>

          <motion.h1
            className="mt-7 font-display text-[clamp(3.2rem,11vw,7.5rem)] leading-[0.92] tracking-[-0.035em] text-ink"
            custom={1}
            initial="hidden"
            animate="show"
            variants={item}
          >
            People first.
          </motion.h1>

          <motion.div
            className="relative mt-1 inline-block"
            custom={2}
            initial="hidden"
            animate="show"
            variants={item}
          >
            <span className="font-display-italic text-[clamp(3.2rem,11vw,7.5rem)] leading-[0.92] tracking-[-0.035em] text-forest">
              Business forward.
            </span>
            <motion.span
              className="absolute -bottom-2 left-0 h-[2px] w-full origin-left bg-sage"
              initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: reduceMotion ? 0 : 0.75, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>

          <motion.p
            className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            custom={3}
            initial="hidden"
            animate="show"
            variants={item}
          >
            Strategic HR guidance for growing businesses, stronger leaders, and
            workplaces built to thrive.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            custom={4}
            initial="hidden"
            animate="show"
            variants={item}
          >
            <Button href="/contact">Let&apos;s Work Together</Button>
            <Button href="/services" variant="outlineDark">
              Explore Our Expertise
            </Button>
          </motion.div>

          <motion.p
            className="mt-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted"
            custom={5}
            initial="hidden"
            animate="show"
            variants={item}
          >
            Strategic HR · Leadership Development · Employee Relations
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
