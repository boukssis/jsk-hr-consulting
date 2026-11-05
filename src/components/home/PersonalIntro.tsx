import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

const focus = [
  "HR Consulting",
  "Nuclear & Construction",
  "Employee Concerns",
  "Career Transition Coaching",
];

export function PersonalIntro() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden bg-stone">
              <Image
                src="/june-speranza-kerr.jpg"
                alt="Portrait of June Speranza Kerr"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover object-[center_18%]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
              About June
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.05] text-ink">
              Personal experience.
              <br />
              <span className="font-display-italic text-forest">
                Professional perspective.
              </span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              {siteConfig.consultant} is the Senior HR Consultant behind{" "}
              {siteConfig.name}, based in {siteConfig.locationShort}. Since{" "}
              {siteConfig.founded}, she has provided experienced human resources
              guidance to organizations that need strategic support without a
              complete in-house HR department.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {focus.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-sage pl-4 text-sm font-medium text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button href="/about" variant="outlineDark">
                Learn More About June
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
