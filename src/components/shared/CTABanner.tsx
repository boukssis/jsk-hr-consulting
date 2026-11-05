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
  eyebrow = "Next step",
  title,
  description,
  buttonLabel = "Start a Conversation",
  href = "/contact",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-20" />
      <svg
        className="pointer-events-none absolute -right-10 top-8 h-64 w-64 text-sage/25"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="100" cy="100" r="46" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="100" cy="100" r="22" stroke="currentColor" strokeWidth="0.8" />
      </svg>
      <Container className="relative">
        <Reveal className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage">
            {eyebrow}
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] text-ivory">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/70 sm:text-lg">
              {description}
            </p>
          ) : null}
          <div className="mt-9">
            <Button href={href} variant="sage">
              {buttonLabel}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
