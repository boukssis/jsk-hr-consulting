import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function BrandStatement() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-15" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.98] tracking-[-0.03em] text-ivory">
            Good business
            <br />
            <span className="font-display-italic text-sage">starts with people.</span>
          </h2>
        </Reveal>
      </Container>
    </section>
  );
}
