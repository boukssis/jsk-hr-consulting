import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(124,149,135,0.18), transparent 40%), radial-gradient(circle at 85% 15%, rgba(248,247,243,0.08), transparent 28%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(248,247,243,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(248,247,243,0.35) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <Container className="relative">
        <Reveal>
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.02] tracking-[-0.02em] text-ivory">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/72 sm:text-lg">
            {description}
          </p>
          <div className="mt-10 h-px w-24 bg-sage/70" aria-hidden />
        </Reveal>
      </Container>
    </section>
  );
}
