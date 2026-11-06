import type { Metadata } from "next";
import { CTABanner } from "@/components/shared/CTABanner";
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

const focus = [
  "Human resources consulting",
  "Nuclear and energy environments",
  "Construction workforces",
  "Employee concerns",
  "Career transition coaching",
];

const reasons = [
  {
    title: "Senior counsel, sized to the need",
    line: "Experienced guidance without standing up a full internal HR department.",
  },
  {
    title: "Comfort with complex settings",
    line: "A practice shaped by nuclear, energy, and construction environments.",
  },
  {
    title: "A steady point of view",
    line: "Advice grounded in respect, dignity, and integrity.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section
        id="site-hero"
        data-hero="dark"
        className="relative -mt-[var(--header-h)] overflow-hidden bg-ink pt-[var(--header-h)] text-paper"
      >
        <div className="pointer-events-none absolute inset-0 hero-grid opacity-30" />
        <Container className="relative grid items-end gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-copper">
              About
            </p>
            <h1 className="mt-4 max-w-[12ch] font-display text-[clamp(2.6rem,5.6vw,4.8rem)] leading-[0.96] tracking-[-0.03em]">
              Experienced perspective.
              <span className="mt-2 block font-display-italic text-copper">
                Practical people solutions.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-md text-base leading-relaxed text-paper/70 sm:text-lg">
              {siteConfig.consultant} is a senior HR consultant and the founder of{" "}
              {siteConfig.name}, based in {siteConfig.locationShort}.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-ivory py-16 sm:py-24">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            <Reveal>
              <Portrait priority />
              <p className="mt-6 font-display text-3xl text-ink">{siteConfig.consultant}</p>
              <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.16em] text-taupe">
                {siteConfig.title}
              </p>
              <dl className="mt-6 max-w-xs space-y-3 border-t border-ink/10 pt-5 text-sm">
                <div className="flex justify-between gap-6">
                  <dt className="text-muted">Founded</dt>
                  <dd className="text-ink">{siteConfig.founded}</dd>
                </div>
                <div className="flex justify-between gap-6">
                  <dt className="text-muted">Location</dt>
                  <dd className="text-right text-ink">{siteConfig.locationShort}</dd>
                </div>
              </dl>
            </Reveal>

            <div>
              <Reveal>
                <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.08] text-ink">
                  A practice built for organizations that need judgment, not a larger org chart.
                </h2>
                <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-muted">
                  <p>
                    Since {siteConfig.founded}, June has focused on human resources
                    consulting for organizations that want experienced support
                    without the cost of a complete in-house department.
                  </p>
                  <p>
                    Her work includes nuclear and construction environments,
                    employee concerns, and career transition coaching — alongside
                    the broader people decisions that come with growth and change.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <ul className="mt-10 grid gap-x-8 sm:grid-cols-2">
                  {focus.map((item) => (
                    <li
                      key={item}
                      className="border-t border-ink/10 py-3 text-sm text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  <a
                    href={siteConfig.linkedIn.personal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-ink transition hover:text-copper"
                  >
                    <LinkedInIcon />
                    June&apos;s LinkedIn
                  </a>
                  <a
                    href={siteConfig.linkedIn.company}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-ink transition hover:text-copper"
                  >
                    <LinkedInIcon />
                    Company LinkedIn
                  </a>
                </div>
                <div className="mt-8">
                  <Button href="/contact">Let&apos;s Talk</Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-copper">
              Why clients call
            </p>
            <div className="mt-8 grid gap-8 lg:grid-cols-3">
              {reasons.map((reason, index) => (
                <div key={reason.title} className="border-t border-ink/15 pt-5">
                  <p className="font-display text-sm text-copper">0{index + 1}</p>
                  <h2 className="mt-3 font-display text-2xl text-ink">{reason.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{reason.line}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink py-16 text-paper sm:py-24">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-copper">
              Philosophy
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.3rem)] leading-[1.08]">
              Workplaces hold together when people are treated with respect,
              dignity, and integrity.
            </h2>
            <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-display text-2xl text-copper sm:text-3xl">
              <span>Respect</span>
              <span className="text-paper/25">/</span>
              <span>Dignity</span>
              <span className="text-paper/25">/</span>
              <span>Integrity</span>
            </p>
          </Reveal>
        </Container>
      </section>

      <CTABanner
        title="If the people question is the hard one, start here."
        buttonLabel="Let's Talk"
      />
    </>
  );
}
