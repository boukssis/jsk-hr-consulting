import type { Metadata } from "next";
import Image from "next/image";
import { CTABanner } from "@/components/shared/CTABanner";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
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

const reasons = [
  {
    title: "Senior consulting perspective",
    description:
      "Thoughtful guidance shaped by experience working with organizations and people through complex workplace situations.",
  },
  {
    title: "People-first philosophy",
    description:
      "A clear belief that employees deserve respect, dignity, and integrity in every workplace interaction.",
  },
  {
    title: "Flexible support for growing organizations",
    description:
      "Consulting sized for businesses that need experienced HR help without building a full internal department.",
  },
  {
    title: "Discretion and professionalism",
    description:
      "Sensitive people matters are approached with care, confidentiality, and steady judgment.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About June"
        title="Experience you can trust. A people-first approach."
        description="June Speranza Kerr provides senior HR consulting through JSK Human Resources Consulting, LLC — helping organizations navigate workplace challenges with clarity and care."
      />

      <section className="bg-ivory py-16 sm:py-24">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden border border-sand bg-sand/20">
                <Image
                  src="/june-speranza-kerr.jpg"
                  alt="Professional portrait of June Speranza Kerr"
                  fill
                  sizes="(max-width: 1024px) 90vw, 38vw"
                  className="object-cover object-[center_18%]"
                  preload
                />
              </div>
              <div className="mx-auto mt-6 max-w-md border border-sand bg-white p-5">
                <p className="font-display text-2xl text-navy">
                  {siteConfig.consultant}
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-sage">
                  {siteConfig.title}
                </p>
                <dl className="mt-5 space-y-3 text-sm text-slate">
                  <div className="flex justify-between gap-4 border-b border-sand/70 pb-2">
                    <dt>Business</dt>
                    <dd className="text-right text-navy">{siteConfig.name}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-sand/70 pb-2">
                    <dt>Founded</dt>
                    <dd className="text-navy">{siteConfig.founded}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>Location</dt>
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
                  Professional biography
                </h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-slate">
                  <p>
                    June Speranza Kerr is a Senior HR Consultant and the founder
                    of {siteConfig.name}, based in {siteConfig.locationShort}.
                    Since founding the practice in {siteConfig.founded}, she has
                    focused on providing experienced human resources guidance to
                    organizations that may not have the resources or budget for a
                    complete in-house HR department.
                  </p>
                  <p>
                    Her work supports small and midsize organizations as they
                    strengthen people practices, develop leaders, and navigate
                    workplace challenges with clarity. June approaches each
                    engagement with professionalism, discretion, and a genuine
                    commitment to treating people well.
                  </p>
                  <p>
                    Publicly stated areas of professional focus include senior HR
                    consulting, nuclear and construction industry experience,
                    employee concerns, and career transition coaching.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <h2 className="font-display text-3xl text-navy">
                  Philosophy & approach
                </h2>
                <p className="mt-5 text-base leading-relaxed text-slate">
                  Employees are valuable organizational resources. They deserve
                  to be treated with respect, dignity, and integrity. That belief
                  informs how JSK advises leaders — encouraging clear
                  communication, fair processes, and people practices that
                  support both organizational goals and human dignity.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <h2 className="font-display text-3xl text-navy">Key expertise</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {expertise.map((item) => (
                    <li
                      key={item}
                      className="border border-sand bg-white px-4 py-3 text-sm text-navy"
                    >
                      <span className="mr-2 text-sage">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sage">
              Why Work With JSK
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.9rem,3.5vw,3rem)] text-navy">
              A boutique consulting relationship built on trust.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={0.06 * index}>
                <article className="h-full border border-sand p-7">
                  <span className="font-display text-sm text-sage">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-navy">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    {reason.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-16">
        <Container>
          <Reveal className="flex flex-col items-start justify-between gap-8 border border-sand bg-white p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sage">
                Connect
              </p>
              <h2 className="mt-3 font-display text-3xl text-navy">
                Continue the conversation on LinkedIn
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate">
                Follow June&apos;s professional profile or the company page for
                updates and context about her consulting practice.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <a
                href={siteConfig.linkedIn.personal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-navy transition hover:text-sage"
              >
                <LinkedInIcon />
                June&apos;s LinkedIn
              </a>
              <a
                href={siteConfig.linkedIn.company}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-navy transition hover:text-sage"
              >
                <LinkedInIcon />
                Company LinkedIn
              </a>
              <Button href="/contact" className="mt-2">
                Schedule a Consultation
              </Button>
            </div>
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
