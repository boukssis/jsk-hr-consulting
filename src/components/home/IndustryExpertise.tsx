import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const panels = [
  {
    title: "Nuclear & Energy",
    line: "Complex operations. Clear people practices.",
    image: "/images/energy.jpg",
    href: "/industries#nuclear",
  },
  {
    title: "Construction",
    line: "Project teams that stay aligned.",
    image: "/images/construction.jpg",
    href: "/industries#construction",
  },
  {
    title: "Growing Businesses",
    line: "Senior HR support without a full department.",
    image: "/images/workspace.jpg",
    href: "/industries#smb",
  },
];

export function IndustryExpertise() {
  return (
    <section className="bg-ivory py-16 sm:py-24">
      <Container>
        <Reveal className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage-deep">
              Industries
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,4vw,3rem)] leading-[1.08] text-navy">
              Built for complex environments.
            </h2>
          </div>
          <Link
            href="/industries"
            className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy transition hover:text-sage-deep"
          >
            Explore industries
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>

        <div className="grid gap-3 md:grid-cols-3">
          {panels.map((panel, index) => (
            <Reveal key={panel.title} delay={0.05 * index}>
              <Link
                href={panel.href}
                className="group relative block min-h-[240px] overflow-hidden sm:min-h-[280px]"
              >
                <Image
                  src={panel.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/10 transition group-hover:from-navy/95" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
                  <h3 className="font-display text-2xl text-ivory">{panel.title}</h3>
                  <p className="mt-2 text-sm text-ivory/75">{panel.line}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-sage">
                    Explore
                    <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
