import type { Metadata } from "next";
import { Difference } from "@/components/home/Difference";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { HowWeWork } from "@/components/home/HowWeWork";
import { HumanCentered } from "@/components/home/HumanCentered";
import { IndustryExpertise } from "@/components/home/IndustryExpertise";
import { PersonalIntro } from "@/components/home/PersonalIntro";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { TestimonialPlaceholder } from "@/components/shared/TestimonialPlaceholder";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "HR Consulting in South Carolina | Strategic People Guidance",
  description: `${siteConfig.name} provides experienced human resources consulting for small and midsize organizations in Irmo, South Carolina and beyond.`,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Difference />
      <ServicesOverview />
      <IndustryExpertise />
      <HumanCentered />
      <HowWeWork />
      <PersonalIntro />
      <TestimonialPlaceholder />
      <FinalCTA />
    </>
  );
}
