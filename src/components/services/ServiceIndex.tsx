"use client";

import { useEffect, useState } from "react";
import type { ServiceSection } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

function shortTitle(title: string) {
  return title
    .replace(" & Workforce Planning", "")
    .replace(" & Organizational Strategy", "")
    .replace(" Strategic HR Consulting", " Strategic HR")
    .replace("Complex Business Transitions", "Complex Transitions")
    .replace("Career Transition Coaching", "Career Coaching");
}

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
      <Container className="py-3">
        <nav aria-label="Service index" className="-mx-1 overflow-x-auto scrollbar-none">
          <ul className="flex min-w-max gap-2 px-1 pb-0.5">
            {sections.map((section) => {
              const isActive = active === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-all duration-300",
                      "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
                      isActive
                        ? "border-navy bg-navy text-ivory shadow-[0_12px_24px_-14px_rgba(8,32,48,0.75)]"
                        : "border-navy/10 bg-white text-muted hover:border-sage hover:bg-soft hover:text-navy",
                    )}
                  >
                    <span className={isActive ? "text-sage" : "text-sage-deep"}>
                      {section.number}
                    </span>
                    <span className="max-w-[10rem] truncate sm:max-w-none">
                      {shortTitle(section.title)}
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
