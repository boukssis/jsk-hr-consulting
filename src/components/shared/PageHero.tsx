import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  tone?: "light" | "dark" | "forest";
  align?: "left" | "split";
  aside?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "left",
  aside,
}: PageHeroProps) {
  const isDark = tone === "dark" || tone === "forest";

  return (
    <section
      id={isDark ? "site-hero" : undefined}
      data-hero={isDark ? "dark" : "light"}
      className={cn(
        "relative overflow-hidden",
        isDark
          ? "-mt-[var(--header-h)] bg-ink pt-[var(--header-h)] text-paper"
          : "bg-paper",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          isDark ? "hero-grid opacity-30" : "hero-grid-light opacity-80",
        )}
      />
      <Container
        className={cn(
          "relative grid gap-8 py-16 sm:py-20 lg:py-24",
          align === "split" && "lg:grid-cols-[1.2fr_0.8fr] lg:items-end",
          align === "left" &&
            "lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.7fr)] lg:items-end",
        )}
      >
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-copper">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.96] tracking-[-0.03em]">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.08}>
          <p
            className={cn(
              "max-w-md text-base leading-relaxed sm:text-lg",
              isDark ? "text-paper/70" : "text-muted",
            )}
          >
            {description}
          </p>
          {aside}
        </Reveal>
      </Container>
    </section>
  );
}
