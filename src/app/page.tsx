import type { Metadata } from "next";
import { BrandStatement } from "@/components/home/BrandStatement";
import { ExpertiseStrip } from "@/components/home/ExpertiseStrip";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { HowWeWork } from "@/components/home/HowWeWork";
import { IndustryExpertise } from "@/components/home/IndustryExpertise";
import { Introduction } from "@/components/home/Introduction";
import { PersonalIntro } from "@/components/home/PersonalIntro";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "HR Consulting in South Carolina | Strategic People Guidance",
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExpertiseStrip />
      <Introduction />
      <ServicesOverview />
      <BrandStatement />
      <IndustryExpertise />
      <PersonalIntro />
      <HowWeWork />
      <FinalCTA />
    </>
  );
}
