import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Portrait } from "@/components/ui/Portrait";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

export function PersonalIntro() {
  return (
    <section className="bg-[#f4f0e8] py-16 text-ink sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          <Reveal>
            <Portrait className="h-36 w-36 sm:h-44 sm:w-44" />
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-copper">
              The consultant
            </p>
            <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2.2rem,4.4vw,3.6rem)] leading-[1.02]">
              Experienced perspective.
              <span className="mt-1 block font-display-italic text-sage-deep">
                Practical people solutions.
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {siteConfig.consultant}, {siteConfig.title} in{" "}
              {siteConfig.locationShort}. She founded {siteConfig.shortName} in{" "}
              {siteConfig.founded} to work directly with leaders on hiring,
              employee concerns, and change.
            </p>
            <div className="mt-7">
              <Button href="/about" variant="outlineDark">
                Get to Know June
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
