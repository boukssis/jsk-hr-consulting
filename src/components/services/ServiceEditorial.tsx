import type { ServiceSection } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const bands = ["bg-paper", "bg-ivory", "bg-soft/70"] as const;

export function ServiceEditorial({
  section,
  index,
}: {
  section: ServiceSection;
  index: number;
}) {
  return (
    <section
      id={section.id}
      className={cn("scroll-target py-16 sm:py-20", bands[index % bands.length])}
    >
      <Container>
        <Reveal>
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div>
              <p className="font-display text-5xl leading-none text-copper sm:text-6xl">
                {section.number}
              </p>
              <h2 className="mt-3 max-w-[16ch] font-display text-[clamp(1.8rem,3.2vw,2.8rem)] leading-[1.08] text-ink">
                {section.title}
              </h2>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-muted">
                {section.summary}
              </p>
            </div>

            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {section.items.map((item) => (
                <li key={item.title} className="grid gap-1 py-4 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)] sm:gap-6 sm:py-5">
                  <h3 className="font-display text-xl leading-snug text-ink">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
