import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Portrait } from "@/components/ui/Portrait";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

const focus = [
  "Senior HR Consulting",
  "Nuclear & Construction",
  "Employee Concerns",
  "Career Transition Coaching",
];

export function PersonalIntro() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          <Reveal>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <Portrait size="sm" />
              <p className="mt-5 font-display text-xl text-navy">
                {siteConfig.consultant}
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-sage-deep">
                {siteConfig.title}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage-deep">
              Meet June
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.05] text-navy">
              Experience that
              <br />
              <span className="font-display-italic text-sage">
                puts people first.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              June Speranza Kerr provides experienced human resources guidance
              through {siteConfig.name}, based in {siteConfig.locationShort}.
              Since {siteConfig.founded}, her work has supported organizations
              that need strategic HR perspective without a complete in-house
              department.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {focus.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-sage pl-4 text-sm font-medium text-navy"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button href="/about" variant="outlineDark">
                More About June
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
