import type { Metadata } from "next";
import { CTABanner } from "@/components/shared/CTABanner";
import { PageHero } from "@/components/shared/PageHero";
import { ScrollToHash } from "@/components/shared/ScrollToHash";
import { ServiceEditorial } from "@/components/services/ServiceEditorial";
import { Container } from "@/components/ui/Container";
import { serviceSections } from "@/data/services";

export const metadata: Metadata = {
  title: "HR Consulting Services",
  description:
    "Strategic HR advisory, talent acquisition, leadership development, employee relations, organizational change, and career transition coaching.",
};

export default function ServicesPage() {
  return (
    <>
      <ScrollToHash />
      <PageHero
        tone="dark"
        eyebrow="Services"
        title={
          <>
            Better people strategy.
            <br />
            <span className="font-display-italic text-sage">
              Better business decisions.
            </span>
          </>
        }
        description="From leadership development to complex workforce challenges, JSK brings experienced HR guidance when it matters."
      />

      <section className="border-b border-navy/10 bg-ivory py-8">
        <Container>
          <nav aria-label="Service index">
            <ul className="flex flex-wrap gap-x-5 gap-y-3">
              {serviceSections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted transition hover:text-navy"
                  >
                    <span className="text-sage">{section.number}</span>{" "}
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="mt-5 max-w-2xl text-xs leading-relaxed text-muted">
            Support is provided as HR consulting guidance — not legal
            representation.
          </p>
        </Container>
      </section>

      {serviceSections.map((section, index) => (
        <ServiceEditorial
          key={section.id}
          section={section}
          showCta={index === 0 || index === serviceSections.length - 1}
        />
      ))}

      <CTABanner
        title="Ready to talk through your people priorities?"
        description="Share a little about your organization and the HR challenges you're navigating."
        buttonLabel="Request a Consultation"
      />
    </>
  );
}
