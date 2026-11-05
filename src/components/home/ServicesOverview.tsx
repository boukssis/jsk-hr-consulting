import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { homepageServices } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesOverview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="Everything your people strategy needs to move forward."
            description="From strategic advisory to leadership development and workplace transitions, each engagement is shaped around your organization's priorities."
          />
          <Reveal delay={0.15}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy transition hover:text-sage"
            >
              View all services
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {homepageServices.map((service, index) => (
            <Reveal key={service.title} delay={0.05 * index}>
              <Link
                href={service.href}
                className="group flex h-full flex-col border border-sand bg-ivory/60 p-7 transition duration-300 hover:-translate-y-1 hover:border-sage/45 hover:bg-white hover:shadow-[0_28px_50px_-36px_rgba(20,36,49,0.45)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-[0.85rem] bg-navy text-sage transition duration-300 group-hover:bg-sage group-hover:text-navy">
                  <service.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-7 font-display text-2xl text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
                  {service.description}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-sage">
                  Learn more
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
