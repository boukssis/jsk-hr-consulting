import type { Metadata } from "next";
import { CTABanner } from "@/components/shared/CTABanner";
import { PageHero } from "@/components/shared/PageHero";
import { ScrollToHash } from "@/components/shared/ScrollToHash";
import { ServiceEditorial } from "@/components/services/ServiceEditorial";
import { ServiceIndex } from "@/components/services/ServiceIndex";
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
        description="Eight focused areas. Clear guidance. People first."
      />

      <ServiceIndex sections={serviceSections} />

      {serviceSections.map((section) => (
        <ServiceEditorial
          key={section.id}
          section={section}
          total={serviceSections.length}
        />
      ))}

      <CTABanner
        title={
          <>
            Ready to talk through
            <br />
            your priorities?
          </>
        }
        buttonLabel="Request a Consultation"
      />
    </>
  );
}
