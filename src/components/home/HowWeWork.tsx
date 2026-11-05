import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Initial Conversation",
    description:
      "Understand organizational priorities, current challenges, and what meaningful progress would look like.",
  },
  {
    number: "02",
    title: "Assessment",
    description:
      "Explore the existing workforce, processes, and opportunities with a practical, people-centered lens.",
  },
  {
    number: "03",
    title: "Tailored Strategy",
    description:
      "Develop a focused approach aligned with your business realities — not a one-size-fits-all template.",
  },
  {
    number: "04",
    title: "Implementation Support",
    description:
      "Help put the plan into action and adapt as needs evolve through the engagement.",
  },
];

export function HowWeWork() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="A clear path from conversation to action."
          description="This proposed engagement framework outlines how consulting support can unfold. Each engagement is shaped around the organization's context and priorities."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={0.07 * index}>
              <article className="relative h-full border border-sand bg-ivory/40 p-7">
                <span className="font-display text-4xl text-sage/80">
                  {step.number}
                </span>
                <h3 className="mt-6 font-display text-2xl text-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {step.description}
                </p>
                {index < steps.length - 1 ? (
                  <span
                    className="pointer-events-none absolute -right-3 top-10 hidden h-px w-6 bg-sage/40 xl:block"
                    aria-hidden
                  />
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
