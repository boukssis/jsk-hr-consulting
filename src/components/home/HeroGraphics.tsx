"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

export function HeroGraphics() {
  const reduceMotion = useReducedMotion();
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion) return;
    const layer = layerRef.current;
    if (!layer) return;

    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) return;

    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 24;
      const y = (event.clientY / window.innerHeight - 0.5) * 16;
      layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduceMotion]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="hero-grid absolute inset-0 opacity-70" />
      <div
        className="absolute -left-24 top-16 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(107,143,94,0.28), transparent 68%)",
        }}
      />
      <div
        className="absolute -right-16 bottom-10 h-80 w-80 rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(8,32,48,0.14), transparent 70%)",
        }}
      />

      <div
        ref={layerRef}
        className="absolute inset-0 transition-transform duration-700 ease-out will-change-transform"
      >
        <div
          className="absolute -right-[8%] top-[6%] h-[58vmin] w-[58vmin] rounded-full border border-sage/40"
          style={
            reduceMotion
              ? undefined
              : { animation: "pulse-ring 10s ease-in-out infinite" }
          }
        />
        <div
          className="absolute right-[2%] top-[16%] h-[38vmin] w-[38vmin] rounded-full border border-navy/15"
          style={
            reduceMotion
              ? undefined
              : { animation: "pulse-ring 12s ease-in-out infinite 0.5s" }
          }
        />
        <div
          className="absolute bottom-[14%] right-[10%] h-[20vmin] w-[20vmin] rounded-full border border-sage/50"
          style={
            reduceMotion
              ? undefined
              : { animation: "float-soft 9s ease-in-out infinite" }
          }
        />

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M780 90 C980 150 1140 270 1240 450"
            stroke="#6B8F5E"
            strokeWidth="1.4"
            strokeOpacity="0.6"
            pathLength="1"
            strokeDasharray="1"
            style={
              reduceMotion
                ? undefined
                : {
                    animation: "draw-line 2.4s ease forwards 0.25s",
                    strokeDashoffset: 1,
                  }
            }
          />
          <path
            d="M820 140 C1020 220 1160 360 1260 560"
            stroke="#082030"
            strokeWidth="1.1"
            strokeOpacity="0.2"
            pathLength="1"
            strokeDasharray="1"
            style={
              reduceMotion
                ? undefined
                : {
                    animation: "draw-line 2.8s ease forwards 0.45s",
                    strokeDashoffset: 1,
                  }
            }
          />
          <path
            d="M760 210 C960 300 1100 430 1200 600"
            stroke="#6B8F5E"
            strokeWidth="1"
            strokeOpacity="0.35"
            pathLength="1"
            strokeDasharray="1"
            style={
              reduceMotion
                ? undefined
                : {
                    animation: "draw-line 3s ease forwards 0.65s",
                    strokeDashoffset: 1,
                  }
            }
          />
          <path
            d="M70 560 C220 480 340 500 420 430 C500 360 560 300 680 280"
            stroke="#6B8F5E"
            strokeWidth="1"
            strokeOpacity="0.28"
            pathLength="1"
            strokeDasharray="1"
            style={
              reduceMotion
                ? undefined
                : {
                    animation: "draw-line 3.2s ease forwards 0.5s",
                    strokeDashoffset: 1,
                  }
            }
          />

          {[
            [780, 90],
            [920, 150],
            [1060, 250],
            [1160, 360],
            [1240, 450],
            [1260, 560],
            [840, 230],
            [1000, 340],
            [1140, 500],
            [70, 560],
            [220, 490],
            [420, 430],
            [680, 280],
          ].map(([cx, cy], i) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r={i % 4 === 0 ? 5 : 3.2}
              fill={i % 2 === 0 ? "#6B8F5E" : "#082030"}
              fillOpacity={i % 2 === 0 ? 0.75 : 0.3}
            />
          ))}
        </svg>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-ivory/70 to-ivory" />
    </div>
  );
}
