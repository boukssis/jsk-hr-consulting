import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function BrandStatement() {
  return (
    <section className="relative overflow-hidden bg-deep py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-15" />
      <svg
        className="pointer-events-none absolute -left-16 top-10 h-72 w-72 text-sage/15"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="0.7" />
      </svg>
      <Container className="relative">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage">
            Philosophy
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.2rem)] leading-[0.98] tracking-[-0.03em] text-ivory">
            Good business
            <br />
            <span className="font-display-italic text-sage">starts with people.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-ivory/70 sm:text-lg">
            Thoughtful HR strategy creates the conditions for people and
            organizations to move forward together.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
