import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

export function PersonalIntro() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden border border-sand bg-sand/30">
              <Image
                src="/june-speranza-kerr.jpg"
                alt="Portrait of June Speranza Kerr"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover object-[center_18%]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sage">
              About the Consultant
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.05] text-navy">
              Meet June Speranza Kerr
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate sm:text-lg">
              June is the Senior HR Consultant behind {siteConfig.name}, based
              in {siteConfig.locationShort}. Since {siteConfig.founded}, she has
              provided experienced human resources guidance to organizations that
              need strategic support without building a complete in-house HR
              department.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
              Her professional focus includes senior HR consulting, nuclear and
              construction industry experience, employee concerns, and career
              transition coaching — always grounded in respect, dignity, and
              integrity.
            </p>
            <div className="mt-8">
              <Button href="/about">Learn More About June</Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
