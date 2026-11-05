import Link from "next/link";
import type { ServiceCategory } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type ServiceSectionProps = {
  category: ServiceCategory;
  index: number;
};

export function ServiceSection({ category, index }: ServiceSectionProps) {
  const inverted = index % 2 === 1;

  return (
    <section
      id={category.id}
      className={cn(
        "scroll-mt-32 py-16 sm:py-20",
        inverted ? "bg-white" : "bg-ivory",
      )}
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sage">
            {category.eyebrow}
          </p>
          <div className="mt-5 flex items-start gap-4">
            <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.9rem] bg-navy text-sage">
              <category.icon className="h-5 w-5" aria-hidden />
            </span>
            <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.08] text-navy">
              {category.title}
            </h2>
          </div>
          <p className="mt-5 text-base leading-relaxed text-slate">
            {category.summary}
          </p>
          <div className="mt-8">
            <Button href="/contact">Discuss This Service</Button>
          </div>
          <p className="mt-4 text-xs text-slate/80">
            Consulting support only — not legal representation.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid gap-4 sm:grid-cols-2">
            {category.items.map((item) => (
              <li
                key={item.title}
                className="border border-sand bg-white/70 p-5 transition hover:border-sage/40"
              >
                <h3 className="font-display text-xl text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate">
            Prefer a broader conversation first?{" "}
            <Link href="/contact" className="text-navy underline decoration-sage/50 underline-offset-4 hover:decoration-sage">
              Request a consultation
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
