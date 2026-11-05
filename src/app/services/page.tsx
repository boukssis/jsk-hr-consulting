import type { Metadata } from "next";
import { CTABanner } from "@/components/shared/CTABanner";
import { PageHero } from "@/components/shared/PageHero";
import { ServiceAccordion } from "@/components/services/ServiceAccordion";
import { Container } from "@/components/ui/Container";
import { serviceCategories } from "@/data/services";

export const metadata: Metadata = {
  title: "HR Consulting Services",
  description:
    "Strategic HR advisory, talent acquisition, leadership development, employee relations, compensation strategy, and complex business transitions.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        tone="dark"
        eyebrow="Services"
        title={
          <>
            Personalized HR solutions.
            <br />
            <span className="font-display-italic text-sage">
              Real business challenges.
            </span>
          </>
        }
        description="Experienced consulting support for organizations that need clear people strategy, stronger leadership, and thoughtful workplace practices."
        aside={
          <div className="border border-white/15 bg-white/5 p-6 text-sm leading-relaxed text-ivory/70">
            Support is provided as HR consulting guidance — not legal
            representation.
          </div>
        }
        align="split"
      />

      <section className="bg-ivory py-10">
        <Container>
          <div className="flex flex-wrap gap-2">
            {serviceCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="border border-ink/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink transition hover:border-forest hover:text-forest"
              >
                {category.title}
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white pb-20 pt-4 sm:pb-28">
        <Container>
          <ServiceAccordion
            categories={serviceCategories.map(
              ({ id, eyebrow, title, summary, items }) => ({
                id,
                eyebrow,
                title,
                summary,
                items,
              }),
            )}
          />
        </Container>
      </section>

      <CTABanner
        title="Ready to talk through your people priorities?"
        description="Share a little about your organization and the HR challenges you're navigating."
        buttonLabel="Request a Consultation"
      />
    </>
  );
}
