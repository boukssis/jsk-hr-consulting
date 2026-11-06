import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Portrait } from "@/components/ui/Portrait";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

export function PersonalIntro() {
  return (
    <section className="bg-[#f4f0e8] py-16 text-ink sm:py-24">
      <Container>
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-copper">
            About
          </p>
          <h2 className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] tracking-[-0.04em]">
            <span>Meet</span>
            <Portrait className="h-16 w-16 sm:h-20 sm:w-20" />
            <span>
              June
              <span className="font-display-italic text-copper">.</span>
            </span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 border-t border-ink/10 pt-8 lg:grid-cols-[1.1fr_auto] lg:items-end">
          <Reveal>
            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {siteConfig.consultant} is a {siteConfig.title.toLowerCase()} in{" "}
              {siteConfig.locationShort}. She founded {siteConfig.shortName} in{" "}
              {siteConfig.founded} so organizations could get senior HR counsel
              without building a full department.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Button href="/about">Get to Know June</Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
