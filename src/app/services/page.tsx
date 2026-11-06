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
            Counsel for the
            <span className="font-display-italic text-copper"> moments </span>
            that matter.
          </>
        }
        description="Eight practice areas. Scan the map, then go straight to the work you need."
      />
      <ServiceIndex sections={serviceSections} />
      {serviceSections.map((section, index) => (
        <ServiceEditorial key={section.id} section={section} index={index} />
      ))}
      <CTABanner
        title="Tell us what needs attention."
        description="A short conversation is the right place to start."
        buttonLabel="Let's Talk"
      />
    </>
  );
}
