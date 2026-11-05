"use client";

import { useReducedMotion } from "motion/react";

export function HeroGraphics() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="hero-grid absolute inset-0 opacity-70" />
      <div
        className="absolute -right-[8%] top-[12%] h-[55vmin] w-[55vmin] rounded-full border border-sage/40"
        style={reduceMotion ? undefined : { animation: "pulse-ring 10s ease-in-out infinite" }}
      />
      <div
        className="absolute -right-[2%] top-[22%] h-[38vmin] w-[38vmin] rounded-full border border-forest/25"
        style={
          reduceMotion
            ? undefined
            : { animation: "pulse-ring 12s ease-in-out infinite 0.8s" }
        }
      />
      <div className="absolute bottom-[18%] right-[8%] h-[18vmin] w-[18vmin] rounded-full border border-sage/50" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M720 120 C860 180 940 280 980 420"
          stroke="#A6B9AA"
          strokeWidth="1"
          strokeOpacity="0.55"
          pathLength="1"
          strokeDasharray="1"
          style={
            reduceMotion
              ? undefined
              : {
                  animation: "draw-line 2.4s ease forwards 0.4s",
                  strokeDashoffset: 1,
                }
          }
        />
        <path
          d="M760 160 C900 240 970 360 1000 520"
          stroke="#356655"
          strokeWidth="1"
          strokeOpacity="0.35"
          pathLength="1"
          strokeDasharray="1"
          style={
            reduceMotion
              ? undefined
              : {
                  animation: "draw-line 2.8s ease forwards 0.7s",
                  strokeDashoffset: 1,
                }
          }
        />
        <circle cx="720" cy="120" r="4" fill="#356655" fillOpacity="0.7" />
        <circle cx="860" cy="210" r="3" fill="#A6B9AA" />
        <circle cx="940" cy="320" r="3.5" fill="#356655" fillOpacity="0.55" />
        <circle cx="980" cy="420" r="4.5" fill="#24463D" fillOpacity="0.45" />
        <circle cx="1000" cy="520" r="3" fill="#A6B9AA" />

        <g
          className={reduceMotion ? undefined : "animate-float-soft"}
          style={{ transformOrigin: "180px 540px" }}
        >
          <line
            x1="80"
            y1="560"
            x2="260"
            y2="480"
            stroke="#172526"
            strokeOpacity="0.12"
          />
          <line
            x1="260"
            y1="480"
            x2="340"
            y2="580"
            stroke="#172526"
            strokeOpacity="0.12"
          />
          <circle cx="80" cy="560" r="3" fill="#356655" fillOpacity="0.45" />
          <circle cx="260" cy="480" r="4" fill="#24463D" fillOpacity="0.35" />
          <circle cx="340" cy="580" r="3" fill="#A6B9AA" />
        </g>
      </svg>

      <p className="absolute bottom-[12%] right-[6%] hidden font-display text-[clamp(4rem,10vw,8rem)] leading-none text-ink/[0.035] lg:block">
        JSK
      </p>
    </div>
  );
}
