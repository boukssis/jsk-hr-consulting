import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

const strengths = [
  {
    title: "Experienced guidance",
    line: "Senior counsel when the decision matters.",
  },
  {
    title: "Practical solutions",
    line: "Advice leaders can actually use.",
  },
  {
    title: "A people-first approach",
    line: "Clear process, with care for the people in it.",
  },
];

export function Introduction() {
  return (
    <section className="bg-paper py-16 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-copper">
              Why organizations call
            </p>
            <h2 className="mt-4 max-w-[14ch] font-display text-[clamp(2.2rem,4.2vw,3.6rem)] leading-[1.02] text-ink">
              Senior-level perspective.
              <span className="mt-1 block font-display-italic text-sage-deep">
                Without the full-time overhead.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
              {siteConfig.name} gives growing organizations experienced HR
              guidance without a full internal department. Based in{" "}
              {siteConfig.locationShort}.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {strengths.map((item, index) => (
            <Reveal key={item.title} delay={0.06 * index}>
              <article className="group flex min-h-[260px] flex-col justify-between bg-[#f4f0e8] p-6 transition duration-300 hover:-translate-y-1 hover:bg-ink hover:text-paper sm:min-h-[300px] sm:p-8">
                <span className="font-display text-5xl leading-none text-copper">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-display text-[1.85rem] leading-tight text-ink transition-colors group-hover:text-paper">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted transition-colors group-hover:text-paper/70">
                    {item.line}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
