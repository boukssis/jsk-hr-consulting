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
      const x = (event.clientX / window.innerWidth - 0.5) * 18;
      const y = (event.clientY / window.innerHeight - 0.5) * 12;
      layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduceMotion]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="hero-grid absolute inset-0 opacity-80" />
      <div
        ref={layerRef}
        className="absolute inset-0 transition-transform duration-500 ease-out will-change-transform"
      >
        <div
          className="absolute -right-[6%] top-[8%] h-[52vmin] w-[52vmin] rounded-full border border-sage/35"
          style={
            reduceMotion
              ? undefined
              : { animation: "pulse-ring 11s ease-in-out infinite" }
          }
        />
        <div
          className="absolute right-[4%] top-[18%] h-[34vmin] w-[34vmin] rounded-full border border-navy/10"
          style={
            reduceMotion
              ? undefined
              : { animation: "pulse-ring 13s ease-in-out infinite 0.6s" }
          }
        />
        <div className="absolute bottom-[16%] right-[12%] h-[16vmin] w-[16vmin] rounded-full border border-sage/40" />

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M860 110 C1040 170 1160 280 1220 430"
            stroke="#6B8F5E"
            strokeWidth="1.2"
            strokeOpacity="0.55"
            pathLength="1"
            strokeDasharray="1"
            style={
              reduceMotion
                ? undefined
                : {
                    animation: "draw-line 2.6s ease forwards 0.35s",
                    strokeDashoffset: 1,
                  }
            }
          />
          <path
            d="M900 150 C1080 230 1180 360 1240 540"
            stroke="#082030"
            strokeWidth="1"
            strokeOpacity="0.18"
            pathLength="1"
            strokeDasharray="1"
            style={
              reduceMotion
                ? undefined
                : {
                    animation: "draw-line 3s ease forwards 0.55s",
                    strokeDashoffset: 1,
                  }
            }
          />
          <path
            d="M820 220 C980 300 1080 420 1140 560"
            stroke="#6B8F5E"
            strokeWidth="1"
            strokeOpacity="0.3"
            pathLength="1"
            strokeDasharray="1"
            style={
              reduceMotion
                ? undefined
                : {
                    animation: "draw-line 2.8s ease forwards 0.75s",
                    strokeDashoffset: 1,
                  }
            }
          />

          {[
            [860, 110],
            [980, 170],
            [1100, 270],
            [1180, 380],
            [1220, 430],
            [1240, 540],
            [900, 250],
            [1040, 360],
            [1140, 560],
          ].map(([cx, cy], i) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r={i % 3 === 0 ? 4.5 : 3}
              fill={i % 2 === 0 ? "#6B8F5E" : "#082030"}
              fillOpacity={i % 2 === 0 ? 0.7 : 0.28}
            />
          ))}

          <g className={reduceMotion ? undefined : "animate-float-soft"}>
            <line
              x1="90"
              y1="620"
              x2="280"
              y2="520"
              stroke="#082030"
              strokeOpacity="0.12"
            />
            <line
              x1="280"
              y1="520"
              x2="360"
              y2="640"
              stroke="#082030"
              strokeOpacity="0.12"
            />
            <line
              x1="280"
              y1="520"
              x2="420"
              y2="470"
              stroke="#6B8F5E"
              strokeOpacity="0.35"
            />
            <circle cx="90" cy="620" r="3.5" fill="#6B8F5E" fillOpacity="0.55" />
            <circle cx="280" cy="520" r="4.5" fill="#082030" fillOpacity="0.3" />
            <circle cx="360" cy="640" r="3" fill="#6B8F5E" fillOpacity="0.5" />
            <circle cx="420" cy="470" r="3.5" fill="#334D40" fillOpacity="0.45" />
          </g>
        </svg>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ivory" />
    </div>
  );
}
