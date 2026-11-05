import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Introduction() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
              Strategic Thinking. Human Understanding.
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.02em] text-ink">
              HR isn&apos;t just about policies.
              <br />
              <span className="font-display-italic text-forest">
                It&apos;s about people and progress.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.12} className="flex flex-col justify-end">
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Growing organizations often need experienced HR perspective before
              they are ready for a full in-house department. JSK brings senior
              consulting support that helps leaders navigate people decisions
              with clarity, care, and practical judgment.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              From workforce planning to leadership development and sensitive
              workplace matters, the work stays grounded in respect, dignity,
              and integrity.
            </p>
            <div className="mt-8 h-px w-20 bg-sage" aria-hidden />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
