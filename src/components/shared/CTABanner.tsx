import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type CTABannerProps = {
  eyebrow?: string;
  title: string;
  description: string;
  buttonLabel?: string;
  href?: string;
};

export function CTABanner({
  eyebrow = "Next step",
  title,
  description,
  buttonLabel = "Start a Conversation",
  href = "/contact",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(124,149,135,0.28), transparent 35%), radial-gradient(circle at 80% 70%, rgba(222,214,198,0.12), transparent 30%)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sage/50 to-transparent" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sage">
            {eyebrow}
          </p>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.08] text-ivory">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ivory/72 sm:text-lg">
            {description}
          </p>
          <div className="mt-9">
            <Button href={href}>{buttonLabel}</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
