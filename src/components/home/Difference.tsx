import { HeartHandshake, Scale, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const differentiators = [
  {
    icon: Scale,
    title: "Practical HR Expertise",
    description:
      "Clear, experienced guidance that helps leaders make thoughtful people decisions grounded in real workplace realities.",
  },
  {
    icon: HeartHandshake,
    title: "People-Centered Solutions",
    description:
      "Approaches shaped by respect, dignity, and integrity — because employees are valuable organizational resources.",
  },
  {
    icon: Sparkles,
    title: "Flexible Consulting Support",
    description:
      "Engagement sized to what your organization needs now, without requiring a complete in-house HR department.",
  },
];

export function Difference() {
  return (
    <section className="relative bg-ivory py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <SectionHeading
            eyebrow="The Right Expertise, When You Need It"
            title="Big-picture HR thinking. Personalized support for your business."
            description="Growing companies often need experienced HR guidance before they are ready to build an entire human resources department. JSK offers senior consulting support that brings clarity to people strategy, leadership, and workplace challenges."
          />

          <div className="space-y-6">
            {differentiators.map((item, index) => (
              <Reveal key={item.title} delay={0.08 * index}>
                <article className="group border-b border-sand/80 pb-6">
                  <div className="flex items-start gap-5">
                    <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.85rem] border border-sand bg-white text-sage transition duration-300 group-hover:border-sage/40 group-hover:bg-sage/10">
                      <item.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-sm text-sage">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-2xl text-navy">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
