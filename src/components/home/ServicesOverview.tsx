import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { homepageServices } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const featured = homepageServices.slice(0, 5);

export function ServicesOverview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 border-b border-ink/10 pb-10 lg:flex-row lg:items-end">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
              Services
            </p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2rem,4vw,3.3rem)] leading-[1.08] text-ink">
              Expertise shaped around your people priorities.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink transition hover:text-forest"
            >
              View all services
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>

        <div className="mt-2">
          {featured.map((service, index) => (
            <Reveal key={service.title} delay={0.04 * index}>
              <Link
                href={service.href}
                className="group grid gap-4 border-b border-ink/10 py-7 transition hover:bg-stone/40 sm:grid-cols-[5rem_1fr_auto] sm:items-center sm:gap-8 sm:px-3"
              >
                <span className="font-display text-2xl text-sage transition group-hover:text-forest">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-ink sm:text-[1.75rem]">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                    {service.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-forest">
                  Explore
                  <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
