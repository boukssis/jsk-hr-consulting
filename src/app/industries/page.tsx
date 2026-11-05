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
    "HR consulting expertise relevant to nuclear and energy environments, construction workforces, and small to midsize businesses across sectors.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industry Expertise"
        title="HR expertise for complex industries."
        description="Organizations in technically demanding industries require strong leadership, careful workforce planning, and thoughtful employee relations. These are fields of professional expertise and potential service — not claims of named current client engagements."
      />

      {industries.map((industry, index) => {
        const reverse = index % 2 === 1;
        return (
          <section
            key={industry.id}
            id={industry.id}
            className={`scroll-mt-32 py-16 sm:py-24 ${
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
                  <div className="relative aspect-[5/4] overflow-hidden border border-sand">
                    <Image
                      src={industry.image}
                      alt={industry.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 48vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-navy/35 via-transparent to-transparent" />
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sage">
                    {industry.eyebrow}
                  </p>
                  <h2 className="mt-4 font-display text-[clamp(1.9rem,3.5vw,3rem)] leading-[1.08] text-navy">
                    {industry.title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-slate">
                    {industry.intro}
                  </p>
                  <ul className="mt-8 space-y-5">
                    {industry.points.map((point) => (
                      <li
                        key={point.title}
                        className="border-l-2 border-sage/50 pl-4"
                      >
                        <h3 className="font-display text-xl text-navy">
                          {point.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-slate">
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

      <section className="border-y border-sand bg-white py-14">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sage">
              Important Note
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Industry sections describe relevant fields of expertise and the
              types of people challenges common in those environments. They do
              not imply current named clients, partnerships, nuclear
              certifications, or safety credentials.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTABanner
        title="Discuss the people challenges in your industry."
        description="Whether you operate in a complex industrial setting or a growing midsize business, experienced HR guidance can help you move forward with clarity."
        buttonLabel="Schedule a Conversation"
      />
    </>
  );
}
