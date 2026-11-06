"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type Point = readonly [number, number];

const field = { w: 420, h: 440 };
const center: Point = [210, 220];
const topics: { label: string; from: Point; to: Point; lift: number }[] = [
  { label: "Hiring", from: [28, 390], to: [210, 42], lift: -34 },
  { label: "Leadership", from: [392, 36], to: [360, 150], lift: -32 },
  { label: "Concerns", from: [18, 28], to: [292, 328], lift: 18 },
  { label: "Change", from: [400, 400], to: [128, 328], lift: 18 },
  { label: "Planning", from: [210, 210], to: [60, 150], lift: -32 },
];

function round(value: number) {
  return Math.round(value * 10) / 10;
}

function closedCurve(points: Point[], tension: number) {
  const count = points.length;
  let path = "";
  for (let index = 0; index < count; index += 1) {
    const prev = points[(index - 1 + count) % count];
    const current = points[index];
    const next = points[(index + 1) % count];
    const after = points[(index + 2) % count];
    const c1x = current[0] + ((next[0] - prev[0]) / 6) * tension;
    const c1y = current[1] + ((next[1] - prev[1]) / 6) * tension;
    const c2x = next[0] - ((after[0] - current[0]) / 6) * tension;
    const c2y = next[1] - ((after[1] - current[1]) / 6) * tension;
    const segment = `C ${round(c1x)} ${round(c1y)} ${round(c2x)} ${round(c2y)} ${round(next[0])} ${round(next[1])}`;
    path += index === 0 ? `M ${round(current[0])} ${round(current[1])} ${segment}` : ` ${segment}`;
  }
  return `${path} Z`;
}

function spoke(from: Point, clear: boolean) {
  const dx = from[0] - center[0];
  const dy = from[1] - center[1];
  const length = Math.hypot(dx, dy) || 1;
  const stop = clear ? 54 : 92;
  const end: Point = [center[0] + (dx / length) * stop, center[1] + (dy / length) * stop];
  const bend = clear ? (dx < 0 ? -12 : 12) : dx < 0 ? -36 : 40;
  const mx = (from[0] + end[0]) / 2 + bend;
  const my = (from[1] + end[1]) / 2 + bend * 0.1;
  return `M ${round(from[0])} ${round(from[1])} Q ${round(mx)} ${round(my)} ${round(end[0])} ${round(end[1])}`;
}

function OrderField({ calm }: { calm: boolean }) {
  const ease = [0.22, 1, 0.36, 1] as const;
  const duration = calm ? 0 : 3.6;
  const times = calm ? undefined : [0, 0.34, 1];
  const start = closedCurve(
    topics.map((topic) => topic.from),
    0.15,
  );
  const end = closedCurve(
    topics.map((topic) => topic.to),
    1.05,
  );
  const shift = calm
    ? { duration: 0 }
    : { duration, times, ease };

  return (
    <div className="relative aspect-[420/440] w-full">
      <svg viewBox={`0 0 ${field.w} ${field.h}`} className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
        <motion.path
          fill="#E4E9E1"
          initial={calm ? false : { d: start, opacity: 0.35 }}
          animate={calm ? { d: end, opacity: 0.82 } : { d: [start, start, end], opacity: [0.35, 0.35, 0.82] }}
          transition={shift}
        />
        <motion.path
          fill="none"
          stroke="#40594B"
          strokeWidth="1.6"
          initial={calm ? false : { d: start, opacity: 0.9 }}
          animate={calm ? { d: end, opacity: 0.95 } : { d: [start, start, end], opacity: [0.95, 0.95, 0.95] }}
          transition={shift}
        />
        {topics.map((topic) => (
          <motion.path
            key={`${topic.label}-line`}
            fill="none"
            stroke="#B77D5D"
            strokeWidth="1.25"
            strokeLinecap="round"
            initial={calm ? false : { d: spoke(topic.from, false), opacity: 0.85 }}
            animate={
              calm
                ? { d: spoke(topic.to, true), opacity: 0.9 }
                : { d: [spoke(topic.from, false), spoke(topic.from, false), spoke(topic.to, true)], opacity: [0.9, 0.9, 0.9] }
            }
            transition={shift}
          />
        ))}
        <motion.circle
          cx={center[0]}
          cy={center[1]}
          fill="#F7F5F0"
          stroke="#40594B"
          strokeWidth="1.4"
          initial={calm ? false : { r: 28, opacity: 0.25 }}
          animate={calm ? { r: 46, opacity: 1 } : { r: [28, 28, 46], opacity: [0.25, 0.25, 1] }}
          transition={shift}
        />
        {topics.map((topic) => (
          <motion.circle
            key={`${topic.label}-dot`}
            r="5.5"
            fill="#B77D5D"
            stroke="#FDFCFA"
            strokeWidth="2"
            initial={calm ? false : { cx: topic.from[0], cy: topic.from[1] }}
            animate={
              calm
                ? { cx: topic.to[0], cy: topic.to[1] }
                : { cx: [topic.from[0], topic.from[0], topic.to[0]], cy: [topic.from[1], topic.from[1], topic.to[1]] }
            }
            transition={shift}
          />
        ))}
      </svg>
      <motion.div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${(center[0] / field.w) * 100}%`, top: `${(center[1] / field.h) * 100}%` }}
        initial={calm ? false : { opacity: 0, scale: 0.7 }}
        animate={calm ? { opacity: 1, scale: 1 } : { opacity: [0, 0, 1], scale: [0.7, 0.7, 1] }}
        transition={shift}
      >
        <Image
          src="/jsk-monogram.png"
          alt="JSK"
          width={148}
          height={64}
          className="h-9 w-auto max-w-[4.6rem] object-contain"
        />
      </motion.div>
      {topics.map((topic) => (
        <motion.span
          key={topic.label}
          className="absolute whitespace-nowrap border border-sage-deep/30 bg-ivory/90 px-2.5 py-1 text-[0.78rem] font-medium text-ink"
          initial={
            calm
              ? false
              : {
                  left: `${(topic.from[0] / field.w) * 100}%`,
                  top: `${(topic.from[1] / field.h) * 100}%`,
                  x: "-50%",
                  y: topic.lift,
                  opacity: 0.65,
                }
          }
          animate={
            calm
              ? {
                  left: `${(topic.to[0] / field.w) * 100}%`,
                  top: `${(topic.to[1] / field.h) * 100}%`,
                  x: "-50%",
                  y: topic.lift,
                  opacity: 1,
                }
              : {
                  left: [
                    `${(topic.from[0] / field.w) * 100}%`,
                    `${(topic.from[0] / field.w) * 100}%`,
                    `${(topic.to[0] / field.w) * 100}%`,
                  ],
                  top: [
                    `${(topic.from[1] / field.h) * 100}%`,
                    `${(topic.from[1] / field.h) * 100}%`,
                    `${(topic.to[1] / field.h) * 100}%`,
                  ],
                  x: "-50%",
                  y: topic.lift,
                  opacity: [0.7, 0.7, 1],
                }
          }
          transition={shift}
        >
          {topic.label}
        </motion.span>
      ))}
    </div>
  );
}

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
      data-hero="light"
      className="relative -mt-[var(--header-h)] min-h-[calc(72svh+var(--header-h))] overflow-hidden bg-ivory text-ink"
    >
      <Image
        src="/images/hero-botanical.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ivory/75 via-ivory/25 to-transparent" />
      <div className="pointer-events-none absolute top-1/2 right-[11%] z-10 hidden w-[min(40%,28rem)] -translate-y-1/2 md:block">
        <OrderField calm={Boolean(reduceMotion)} />
      </div>

      <Container className="relative flex min-h-[calc(72svh+var(--header-h))] flex-col justify-center pb-12 pt-[calc(var(--header-h)+1.5rem)]">
        <div className="max-w-xl">
          <motion.p
            className="text-[11px] font-medium uppercase tracking-[0.32em] text-copper"
            initial="hidden"
            animate="show"
            variants={rise(0.05)}
          >
            Human resources consulting
          </motion.p>

          <h1 className="mt-5 font-display text-[clamp(2.8rem,5.8vw,5.2rem)] leading-[0.92] tracking-[-0.045em]">
            <motion.span className="block" initial="hidden" animate="show" variants={rise(0.16)}>
              Better people
            </motion.span>
            <motion.span className="block" initial="hidden" animate="show" variants={rise(0.26)}>
              decisions.
            </motion.span>
            <motion.span
              className="mt-3 block pl-[12%] font-display-italic text-copper"
              initial="hidden"
              animate="show"
              variants={rise(0.38)}
            >
              Stronger businesses.
            </motion.span>
          </h1>

          <motion.span
            className="mt-6 block h-px w-16 origin-left bg-copper"
            initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: reduceMotion ? 0 : 0.7, duration: 0.7, ease }}
          />

          <motion.p
            className="mt-5 max-w-sm text-base leading-relaxed text-ink/75"
            initial="hidden"
            animate="show"
            variants={rise(0.5)}
          >
            June helps growing organizations with hiring, leadership, and change.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial="hidden"
            animate="show"
            variants={rise(0.62)}
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
