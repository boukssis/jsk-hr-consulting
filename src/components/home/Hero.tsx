"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  const rise = (delay: number) =>
    reduceMotion
      ? {
          hidden: { opacity: 1, y: 0 },
          show: { opacity: 1, y: 0 },
        }
      : {
          hidden: { opacity: 0, y: 28 },
          show: {
            opacity: 1,
            y: 0,
            transition: { delay, duration: 0.85, ease },
          },
        };

  return (
    <section
      id="site-hero"
      className="relative -mt-[var(--header-h)] min-h-[100svh] overflow-hidden bg-ink text-paper"
    >
      <Image
        src="/images/architecture.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className={
          reduceMotion
            ? "object-cover object-[68%_center]"
            : "animate-ken-burns object-cover object-[68%_center]"
        }
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink from-[8%] via-ink/75 to-ink/25" />
      <div className="absolute inset-x-0 top-0 h-[28%] bg-gradient-to-b from-ink to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/80 to-transparent" />

      <Container className="relative flex min-h-[100svh] flex-col justify-center pt-[var(--header-h)]">
        <motion.p
          className="text-[11px] font-medium uppercase tracking-[0.32em] text-copper"
          initial="hidden"
          animate="show"
          variants={rise(0.05)}
        >
          Human resources consulting
        </motion.p>

        <h1 className="mt-6 max-w-[13ch] font-display text-[clamp(3.3rem,7.2vw,6.8rem)] leading-[0.88] tracking-[-0.05em]">
          <motion.span
            className="block"
            initial="hidden"
            animate="show"
            variants={rise(0.16)}
          >
            Better people
          </motion.span>
          <motion.span
            className="block"
            initial="hidden"
            animate="show"
            variants={rise(0.28)}
          >
            decisions.
          </motion.span>
          <motion.span
            className="relative mt-3 inline-block font-display-italic text-copper"
            initial="hidden"
            animate="show"
            variants={rise(0.42)}
          >
            Stronger businesses.
            <motion.span
              className="absolute -bottom-1 left-0 h-[3px] w-full origin-left bg-copper sm:-bottom-2"
              initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: reduceMotion ? 0 : 0.85, duration: 0.9, ease }}
            />
          </motion.span>
        </h1>

        <motion.p
          className="mt-7 max-w-md text-base leading-relaxed text-paper/80 sm:text-lg"
          initial="hidden"
          animate="show"
          variants={rise(0.55)}
        >
          Senior HR guidance for organizations navigating people, leadership,
          and change.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-col gap-3 sm:flex-row"
          initial="hidden"
          animate="show"
          variants={rise(0.68)}
        >
          <Button
            href="/contact"
            className="!border-paper !bg-paper !text-ink hover:!border-copper hover:!bg-copper hover:!text-ink"
          >
            Let&apos;s Talk
          </Button>
          <Button href="/services" variant="outlineLight">
            Explore Services
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
