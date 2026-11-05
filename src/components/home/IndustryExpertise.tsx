import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { homepageIndustries } from "@/data/industries";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function IndustryExpertise() {
  return (
    <section className="bg-navy py-20 text-ivory sm:py-28">
      <Container>
        <SectionHeading
          light
          eyebrow="Industry Expertise"
          title="Experience where people decisions matter most."
          description="June's professional background includes nuclear and construction environments, as well as complex operational settings where thoughtful people practices are essential."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {homepageIndustries.map((industry, index) => (
            <Reveal key={industry.title} delay={0.06 * index}>
              <Link
                href={industry.href}
                className="group relative block min-h-[320px] overflow-hidden border border-white/10"
              >
                <Image
                  src={industry.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/20" />
                <div className="absolute inset-0 p-7 sm:p-8">
                  <div className="flex h-full flex-col justify-end">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sage">
                      Field of expertise
                    </p>
                    <h3 className="mt-3 font-display text-3xl">{industry.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/75">
                      {industry.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-sand">
                      Explore
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
