import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTABanner } from "@/components/shared/CTABanner";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/data/industries";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Industry Expertise | Nuclear, Construction & Growing Businesses",
  description:
    "HR consulting experience across nuclear and energy environments, construction workforces, and growing small to midsize businesses.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        tone="dark"
        eyebrow="Industries"
        title={
          <>
            Where the work
            <span className="font-display-italic text-copper"> gets complex.</span>
          </>
        }
        description="Nuclear and energy environments, construction workforces, and growing businesses that need senior HR guidance."
      />

      {industries.map((industry, index) => {
        const points = industry.points.slice(0, 4);
        const imageRight = index === 1;

        if (index === 2) {
          return (
            <section
              key={industry.id}
              id={industry.id}
              className="scroll-target bg-soft/60 py-16 sm:py-24"
            >
              <Container>
                <Reveal>
                  <div className="relative mb-10 min-h-[280px] overflow-hidden sm:min-h-[380px]">
                    <Image
                      src={industry.image}
                      alt={industry.imageAlt}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-ink/35" />
                  </div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-copper">
                    0{index + 1} · {industry.eyebrow}
                  </p>
                  <h2 className="mt-3 max-w-3xl font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] text-ink">
                    {industry.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                    {industry.intro}
                  </p>
                  <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {points.map((point) => (
                      <li key={point.title} className="border-t border-ink/15 pt-4">
                        <h3 className="font-display text-xl text-ink">{point.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
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
            className={cn(
              "scroll-target py-16 sm:py-24",
              index === 0 ? "bg-paper" : "bg-ivory",
            )}
          >
            <Container>
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <Reveal className={imageRight ? "lg:order-2" : undefined}>
                  <div className="relative aspect-[5/4] overflow-hidden bg-soft">
                    <Image
                      src={industry.image}
                      alt={industry.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 48vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.08}>
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-copper">
                    0{index + 1} · {industry.eyebrow}
                  </p>
                  <h2 className="mt-3 font-display text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.05] text-ink">
                    {industry.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {industry.intro}
                  </p>
                  <ul className="mt-8 space-y-5">
                    {points.map((point) => (
                      <li key={point.title} className="border-t border-ink/10 pt-4">
                        <h3 className="font-display text-xl text-ink">{point.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">
                          {point.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/services"
                    className="mt-8 inline-flex text-[12px] font-medium uppercase tracking-[0.14em] text-ink underline decoration-copper decoration-1 underline-offset-4 transition hover:text-copper"
                  >
                    Related services
                  </Link>
                </Reveal>
              </div>
            </Container>
          </section>
        );
      })}

      <CTABanner
        title="Bring the context. We'll talk through the people side."
        buttonLabel="Let's Talk"
      />
    </>
  );
}
