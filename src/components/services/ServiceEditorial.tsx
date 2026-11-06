import type { ServiceSection } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function ServiceEditorial({
  section,
  index,
}: {
  section: ServiceSection;
  index: number;
}) {
  const isDark = index % 2 === 1;

  return (
    <section
      id={section.id}
      className={cn(
        "scroll-target relative overflow-hidden py-16 sm:py-20",
        isDark ? "bg-ink text-paper" : "bg-ivory text-ink",
      )}
    >
      {isDark ? <div className="pointer-events-none absolute inset-0 hero-grid opacity-20" /> : null}
      <Container className="relative">
        <Reveal>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <div>
              <p className="font-display text-[clamp(3.5rem,8vw,6rem)] leading-none text-copper/80">
                {section.number}
              </p>
              <h2 className="mt-2 max-w-[14ch] font-display text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.05]">
                {section.title}
              </h2>
              <p
                className={cn(
                  "mt-4 max-w-sm text-base leading-relaxed",
                  isDark ? "text-paper/70" : "text-muted",
                )}
              >
                {section.summary}
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {section.items.map((item) => (
                <li
                  key={item.title}
                  className={cn(
                    "border p-4 transition-colors duration-300",
                    isDark
                      ? "border-white/12 hover:border-copper/70 hover:bg-white/5"
                      : "border-ink/10 bg-paper hover:border-copper hover:bg-soft/80",
                  )}
                >
                  <h3 className="font-display text-lg leading-snug">{item.title}</h3>
                  <p
                    className={cn(
                      "mt-2 text-sm leading-relaxed",
                      isDark ? "text-paper/60" : "text-muted",
                    )}
                  >
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
