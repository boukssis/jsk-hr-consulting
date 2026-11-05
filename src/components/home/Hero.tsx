"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const item = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduceMotion ? 0 : 0.12 + i * 0.1,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-navy text-ivory">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 15% 20%, rgba(124,149,135,0.22), transparent 42%), radial-gradient(ellipse at 85% 75%, rgba(222,214,198,0.1), transparent 35%), linear-gradient(180deg, rgba(20,36,49,0.2), rgba(20,36,49,0.95))",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(248,247,243,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(248,247,243,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <Container className="relative grid min-h-[100svh] items-center gap-12 pb-16 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-40">
        <div>
          <motion.div custom={0} initial="hidden" animate="show" variants={item}>
            <Eyebrow light>Strategic HR Consulting | South Carolina</Eyebrow>
          </motion.div>

          <motion.h1
            className="mt-6 font-display text-[clamp(2.8rem,7vw,5.4rem)] leading-[0.96] tracking-[-0.03em]"
            custom={1}
            initial="hidden"
            animate="show"
            variants={item}
          >
            Stronger people.
            <br />
            Stronger businesses.
          </motion.h1>

          <motion.p
            className="mt-7 max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg"
            custom={2}
            initial="hidden"
            animate="show"
            variants={item}
          >
            Experienced human resources guidance for growing organizations,
            developing leaders, and navigating complex workplace challenges.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            custom={3}
            initial="hidden"
            animate="show"
            variants={item}
          >
            <Button href="/contact">Let&apos;s Talk About Your Business</Button>
            <Button href="/services" variant="outlineLight">
              Explore Our Services
            </Button>
          </motion.div>

          <motion.p
            className="mt-8 max-w-md border-l border-sage/50 pl-4 text-sm leading-relaxed text-ivory/60"
            custom={4}
            initial="hidden"
            animate="show"
            variants={item}
          >
            Independent HR expertise. Practical solutions. People-first
            leadership.
          </motion.p>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={reduceMotion ? false : { opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/5 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)]">
            <Image
              src="/june-speranza-kerr.jpg"
              alt="Professional portrait of June Speranza Kerr, Senior HR Consultant"
              fill
              preload
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="object-cover object-[center_20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-display text-2xl text-ivory">June Speranza Kerr</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sand">
                Senior HR Consultant
              </p>
            </div>
          </div>

          <motion.blockquote
            className="absolute -left-2 bottom-16 max-w-[250px] rounded-[1rem] border border-white/15 bg-navy/85 p-5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.55)] backdrop-blur-md sm:-left-8 sm:max-w-[280px]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
          >
            <p className="font-display text-lg leading-snug text-ivory">
              &ldquo;People are at the heart of every successful organization.&rdquo;
            </p>
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-sage">
              Brand Perspective
            </p>
          </motion.blockquote>

          <div
            className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full border border-sage/30 sm:-right-6 sm:-top-6"
            aria-hidden
          />
        </motion.div>
      </Container>
    </section>
  );
}
