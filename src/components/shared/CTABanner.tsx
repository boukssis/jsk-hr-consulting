import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type CTABannerProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  buttonLabel?: string;
  href?: string;
};

export function CTABanner({
  eyebrow = "Consultation",
  title,
  description,
  buttonLabel = "Let's Talk",
  href = "/contact",
}: CTABannerProps) {
  return (
    <section className="bg-ink text-paper">
      <Container className="grid items-end gap-8 py-16 sm:py-20 lg:grid-cols-[1.4fr_auto] lg:py-24">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-copper">
            {eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.05]">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-lg text-base leading-relaxed text-paper/65">
              {description}
            </p>
          ) : null}
        </Reveal>
        <Reveal delay={0.08}>
          <Button href={href} variant="outlineLight">
            {buttonLabel}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
