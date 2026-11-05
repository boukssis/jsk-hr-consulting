import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function HumanCentered() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <div className="texture-dots pointer-events-none absolute inset-0 opacity-40" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-8 h-px w-16 bg-sage" aria-hidden />
          <blockquote className="font-display text-[clamp(1.9rem,4.5vw,3.4rem)] leading-[1.15] tracking-[-0.02em] text-navy">
            &ldquo;Successful organizations don&apos;t just manage people. They
            invest in them.&rdquo;
          </blockquote>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
            At the center of JSK&apos;s approach is a simple conviction: employees
            deserve to be treated with respect, dignity, and integrity. Clear
            communication, thoughtful leadership, and fair workplace practices
            create the conditions where people and organizations can both thrive.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
