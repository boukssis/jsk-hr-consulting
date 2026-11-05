import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Portrait } from "@/components/ui/Portrait";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

const focus = [
  "HR Consulting",
  "Nuclear & Construction",
  "Employee Concerns",
  "Career Coaching",
];

export function PersonalIntro() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-10">
            <Portrait size="sm" />
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage-deep">
                Meet June
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.08] text-navy">
                Experience that{" "}
                <span className="font-display-italic text-sage">
                  puts people first.
                </span>
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {siteConfig.consultant}, Senior HR Consultant — {siteConfig.locationShort}.
                Founded {siteConfig.founded}.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {focus.map((item) => (
                  <span
                    key={item}
                    className="border border-navy/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-navy"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-7">
                <Button href="/about" variant="outlineDark">
                  More About June
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
