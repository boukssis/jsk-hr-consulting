"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export type AccordionCategory = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  items: Array<{ title: string; description: string }>;
};

export function ServiceAccordion({
  categories,
}: {
  categories: AccordionCategory[];
}) {
  const [openId, setOpenId] = useState<string | null>(categories[0]?.id ?? null);

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {categories.map((category, index) => {
        const open = openId === category.id;
        return (
          <section
            key={category.id}
            id={category.id}
            className="scroll-mt-28"
          >
            <button
              type="button"
              className="flex w-full items-start gap-5 py-7 text-left transition hover:bg-stone/30 sm:gap-8 sm:px-2"
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : category.id)}
            >
              <span className="mt-1 font-display text-xl text-sage sm:text-2xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-forest">
                      {category.eyebrow}
                    </p>
                    <h2 className="mt-2 font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.1] text-ink">
                      {category.title}
                    </h2>
                  </div>
                  <ChevronDown
                    className={cn(
                      "mt-2 h-5 w-5 shrink-0 text-muted transition-transform duration-300",
                      open && "rotate-180",
                    )}
                    aria-hidden
                  />
                </div>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                  {category.summary}
                </p>
              </div>
            </button>

            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="pb-8 pl-0 sm:pl-[4.5rem]">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {category.items.map((item) => (
                      <li
                        key={item.title}
                        className="border border-ink/10 bg-ivory/70 p-5"
                      >
                        <h3 className="font-display text-xl text-ink">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7">
                    <Button href="/contact">Discuss This Service</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
