import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { homepageServices } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function ServicesOverview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage-deep">
              Services
            </p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2rem,4vw,3.3rem)] leading-[1.08] text-navy">
              Expertise shaped around your people priorities.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy transition hover:text-sage-deep"
            >
              View all services
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {homepageServices.map((service, index) => {
            const featured = index === 0;
            return (
              <Reveal
                key={service.id}
                delay={0.05 * index}
                className={cn(featured && "md:col-span-2 xl:col-span-1 xl:row-span-2")}
              >
                <Link
                  href={service.href}
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden border border-navy/10 bg-ivory p-6 transition duration-300 hover:-translate-y-1 hover:border-sage/50 hover:bg-soft/40 sm:p-7",
                    featured && "min-h-[280px] xl:min-h-full xl:justify-between",
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-display text-3xl text-sage transition group-hover:text-sage-deep">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center border border-navy/10 text-navy transition group-hover:border-sage group-hover:bg-sage group-hover:text-navy">
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </span>
                  </div>

                  <div className={cn("mt-8", featured && "xl:mt-auto xl:pt-16")}>
                    <h3
                      className={cn(
                        "font-display text-navy",
                        featured
                          ? "text-[1.85rem] leading-tight sm:text-[2.1rem]"
                          : "text-2xl",
                      )}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                      {service.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-sage-deep">
                      Explore
                      <span className="h-px w-6 bg-sage transition-all group-hover:w-10" />
                    </span>
                  </div>

                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full border border-sage/20 opacity-0 transition duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
