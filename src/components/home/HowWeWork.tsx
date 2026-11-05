import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Clarify priorities, challenges, and what meaningful progress would look like for your organization.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "Review workforce realities, processes, and opportunities with a practical, people-centered lens.",
  },
  {
    number: "03",
    title: "Strategize",
    description:
      "Shape a focused approach aligned with your business context — not a one-size-fits-all template.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "Help put the plan into action and adapt as needs evolve through the engagement.",
  },
];

export function HowWeWork() {
  return (
    <section className="bg-soft/50 py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage-deep">
            Working Together
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.3rem)] leading-[1.08] text-navy">
            A clear path from conversation to action.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-0 md:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={0.06 * index}>
              <article
                className={`h-full border-navy/10 px-0 py-6 md:border-l md:px-6 md:py-0 ${
                  index === 0 ? "md:border-l-0 md:pl-0" : ""
                }`}
              >
                <span className="font-display text-3xl text-sage">
                  {step.number}
                </span>
                <h3 className="mt-5 font-display text-2xl text-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
