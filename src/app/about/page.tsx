import type { Metadata } from "next";
import { CTABanner } from "@/components/shared/CTABanner";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { Portrait } from "@/components/ui/Portrait";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About June Speranza Kerr",
  description:
    "Meet June Speranza Kerr, Senior HR Consultant and founder of JSK Human Resources Consulting, LLC in Irmo, South Carolina.",
};

const expertise = [
  "Human resources consulting",
  "Nuclear industry experience",
  "Construction industry experience",
  "Employee concerns",
  "Career transition coaching",
];

const values = ["Respect", "Dignity", "Integrity"] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        tone="light"
        eyebrow="About June"
        title={
          <>
            The experience behind
            <br />
            <span className="font-display-italic text-sage">the advice.</span>
          </>
        }
        description={`${siteConfig.consultant} provides senior HR consulting through ${siteConfig.name} — helping organizations navigate workplace challenges with clarity and care.`}
      />

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[auto_1fr] lg:gap-16">
            <Reveal>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <Portrait size="lg" priority />
                <p className="mt-6 font-display text-2xl text-navy">
                  {siteConfig.consultant}
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-sage-deep">
                  {siteConfig.title}
                </p>
                <dl className="mt-6 w-full max-w-xs space-y-3 border-t border-navy/10 pt-5 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Founded</dt>
                    <dd className="text-navy">{siteConfig.founded}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Location</dt>
                    <dd className="text-right text-navy">
                      {siteConfig.locationShort}
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>

            <div className="space-y-10">
              <Reveal delay={0.08}>
                <h2 className="font-display text-3xl text-navy sm:text-4xl">
                  Professional focus
                </h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
                  <p>
                    June is the founder of {siteConfig.name}, based in{" "}
                    {siteConfig.locationShort}. Since {siteConfig.founded}, she
                    has focused on providing experienced human resources guidance
                    to organizations that may not have the resources or budget
                    for a complete in-house HR department.
                  </p>
                  <p>
                    Her work supports small and midsize organizations as they
                    strengthen people practices, develop leaders, and navigate
                    workplace challenges with clarity.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {expertise.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-sage pl-4 text-sm font-medium text-navy"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={siteConfig.linkedIn.personal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-navy transition hover:text-sage-deep"
                  >
                    <LinkedInIcon />
                    June&apos;s LinkedIn
                  </a>
                  <a
                    href={siteConfig.linkedIn.company}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-navy transition hover:text-sage-deep"
                  >
                    <LinkedInIcon />
                    Company LinkedIn
                  </a>
                </div>
                <div className="mt-6">
                  <Button href="/contact">Schedule a Consultation</Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage">
              Philosophy
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] text-ivory">
              Employees deserve workplaces built on lasting values.
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {values.map((value) => (
                <div key={value} className="border border-white/15 px-4 py-10">
                  <p className="font-display text-3xl text-sage sm:text-4xl">
                    {value}
                  </p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-ivory/70">
              That belief informs how JSK advises leaders — encouraging clear
              communication, fair processes, and people practices that support
              both organizational goals and human dignity.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTABanner
        title="Let's discuss what your organization needs."
        description="If you're looking for experienced HR guidance with a people-first perspective, start with a conversation."
        buttonLabel="Request a Consultation"
      />
    </>
  );
}
