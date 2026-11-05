import { Eyebrow } from "@/components/ui/Eyebrow";
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
  tone = "light",
  align = "left",
  aside,
}: PageHeroProps) {
  const isDark = tone === "dark" || tone === "forest";

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b",
        tone === "light" && "border-ink/10 bg-ivory",
        tone === "dark" && "border-transparent bg-ink",
        tone === "forest" && "border-transparent bg-deep",
      )}
    >
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-60" />
      <Container
        className={cn(
          "relative py-16 sm:py-20 lg:py-24",
          align === "split" && "grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end",
        )}
      >
        <Reveal>
          <Eyebrow light={isDark}>{eyebrow}</Eyebrow>
          <h1
            className={cn(
              "mt-5 max-w-4xl font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.02] tracking-[-0.025em]",
              isDark ? "text-ivory" : "text-ink",
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              "mt-6 max-w-2xl text-base leading-relaxed sm:text-lg",
              isDark ? "text-ivory/70" : "text-muted",
            )}
          >
            {description}
          </p>
        </Reveal>
        {aside ? <Reveal delay={0.1}>{aside}</Reveal> : null}
      </Container>
    </section>
  );
}
