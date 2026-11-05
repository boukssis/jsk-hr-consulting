"use client";

import { useEffect, useState } from "react";
import type { ServiceSection } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const navLabels: Record<string, string> = {
  "strategic-hr": "Strategic HR",
  "talent-acquisition": "Talent",
  "leadership-development": "Leadership",
  "employee-relations": "Relations",
  "organizational-change": "Org Change",
  compensation: "Compensation",
  "complex-transitions": "Transitions",
  "career-transition": "Career",
};

export function ServiceIndex({ sections }: { sections: ServiceSection[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean) as HTMLElement[];

    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <section className="sticky top-[var(--header-h)] z-30 border-b border-navy/10 bg-ivory/95 backdrop-blur-md">
      <Container className="py-2.5 sm:py-3">
        <nav aria-label="Service index">
          {/* Mobile: tidy 2-col grid. Tablet+: wrap chips so nothing is clipped. */}
          <ul className="grid grid-cols-2 gap-1.5 sm:flex sm:flex-wrap sm:justify-start">
            {sections.map((section) => {
              const isActive = active === section.id;
              return (
                <li key={section.id} className="min-w-0 sm:min-w-0">
                  <a
                    href={`#${section.id}`}
                    className={cn(
                      "flex w-full items-center justify-center gap-1.5 rounded-sm border px-2.5 py-2.5 text-center transition-all duration-300 sm:w-auto sm:justify-start sm:px-3 sm:py-2",
                      "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
                      isActive
                        ? "border-navy bg-navy text-ivory shadow-[0_10px_20px_-14px_rgba(8,32,48,0.7)]"
                        : "border-navy/10 bg-white text-muted hover:border-sage hover:bg-soft hover:text-navy",
                    )}
                  >
                    <span
                      className={cn(
                        "shrink-0 font-display text-sm leading-none",
                        isActive ? "text-sage" : "text-sage-deep",
                      )}
                    >
                      {section.number}
                    </span>
                    <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.08em] sm:tracking-[0.1em]">
                      {navLabels[section.id] ?? section.title}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
