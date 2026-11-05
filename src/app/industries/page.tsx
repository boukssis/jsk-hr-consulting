import type { Metadata } from "next";
import Image from "next/image";
import { CTABanner } from "@/components/shared/CTABanner";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industry Expertise | Nuclear, Construction & Growing Businesses",
  description:
    "HR consulting experience across nuclear and energy environments, construction workforces, and growing small to midsize businesses.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        tone="forest"
        eyebrow="Industries"
        title={
          <>
            HR expertise for
            <br />
            <span className="font-display-italic text-sage">
              complex environments.
            </span>
          </>
        }
        description="Organizations in demanding industries need strong leadership, careful workforce planning, and thoughtful employee relations."
      />

      {industries.map((industry, index) => {
        const reverse = index % 2 === 1;
        const fullBleed = index === 1;

        if (fullBleed) {
          return (
            <section
              key={industry.id}
              id={industry.id}
              className="relative scroll-mt-28 min-h-[70vh] overflow-hidden"
            >
              <Image
                src={industry.image}
                alt={industry.imageAlt}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-ink/70" />
              <Container className="relative flex min-h-[70vh] items-center py-20">
                <Reveal className="max-w-2xl text-ivory">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage">
                    {industry.eyebrow}
                  </p>
                  <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.08]">
                    {industry.title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-ivory/75">
                    {industry.intro}
                  </p>
                  <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                    {industry.points.map((point) => (
                      <li key={point.title} className="border-t border-white/20 pt-4">
                        <h3 className="font-display text-xl">{point.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                          {point.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </Container>
            </section>
          );
        }

        return (
          <section
            key={industry.id}
            id={industry.id}
            className={`scroll-mt-28 py-16 sm:py-24 ${
              reverse ? "bg-white" : "bg-ivory"
            }`}
          >
            <Container>
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal>
                  <div className="relative aspect-[5/4] overflow-hidden bg-stone">
                    <Image
                      src={industry.image}
                      alt={industry.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 48vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
                    {industry.eyebrow}
                  </p>
                  <h2 className="mt-4 font-display text-[clamp(1.9rem,3.5vw,3rem)] leading-[1.08] text-ink">
                    {industry.title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-muted">
                    {industry.intro}
                  </p>
                  <ul className="mt-8 space-y-5">
                    {industry.points.map((point) => (
                      <li key={point.title} className="border-l-2 border-sage pl-4">
                        <h3 className="font-display text-xl text-ink">
                          {point.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">
                          {point.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </Container>
          </section>
        );
      })}

      <CTABanner
        title="Discuss the people challenges in your industry."
        description="Whether you operate in a complex industrial setting or a growing midsize business, experienced HR guidance can help you move forward with clarity."
        buttonLabel="Schedule a Conversation"
      />
    </>
  );
}
