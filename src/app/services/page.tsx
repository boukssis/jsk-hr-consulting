import type { Metadata } from "next";
import { CTABanner } from "@/components/shared/CTABanner";
import { PageHero } from "@/components/shared/PageHero";
import { ServiceSection } from "@/components/services/ServiceSection";
import { serviceCategories } from "@/data/services";

export const metadata: Metadata = {
  title: "HR Consulting Services",
  description:
    "Personalized HR solutions including strategic advisory, talent acquisition, leadership development, employee relations, compensation strategy, and complex business transitions.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Personalized HR solutions. Real business challenges."
        description="JSK provides experienced consulting support for organizations that need clear people strategy, stronger leadership, and thoughtful workplace practices — without building a full in-house HR department."
      />

      <section className="border-b border-sand bg-white py-12">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap gap-3 px-5 sm:px-8 lg:px-10">
          {serviceCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="rounded-full border border-sand px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy transition hover:border-sage hover:bg-sage/10"
            >
              {category.title}
            </a>
          ))}
        </div>
      </section>

      {serviceCategories.map((category, index) => (
        <ServiceSection key={category.id} category={category} index={index} />
      ))}

      <CTABanner
        title="Ready to talk through your people priorities?"
        description="Share a little about your organization and the HR challenges you're navigating. We'll follow up to explore whether JSK is the right fit."
        buttonLabel="Request a Consultation"
      />
    </>
  );
}
