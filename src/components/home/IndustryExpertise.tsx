import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const panels = [
  {
    title: "Nuclear & Energy",
    description:
      "Experience across complex operating environments where workforce continuity, leadership, and clear communication matter.",
    image: "/images/energy.jpg",
    href: "/industries#nuclear",
    large: true,
  },
  {
    title: "Construction",
    description:
      "Support for project-driven workforces, leadership development, and people decisions under shifting timelines.",
    image: "/images/construction.jpg",
    href: "/industries#construction",
    large: false,
  },
  {
    title: "Growing Businesses",
    description:
      "Flexible HR consulting for organizations that need senior guidance without building a full department.",
    image: "/images/workspace.jpg",
    href: "/industries#smb",
    large: false,
  },
];

export function IndustryExpertise() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sage-deep">
            Industry Expertise
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.3rem)] leading-[1.08] text-navy">
            Experience across nuclear, construction, and complex operational
            environments.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {panels.map((panel, index) => (
            <Reveal
              key={panel.title}
              delay={0.06 * index}
              className={panel.large ? "lg:row-span-2" : undefined}
            >
              <Link
                href={panel.href}
                className={`group relative block overflow-hidden ${
                  panel.large ? "min-h-[420px] lg:h-full" : "min-h-[240px]"
                }`}
              >
                <Image
                  src={panel.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/10" />
                <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-8">
                  <h3 className="font-display text-3xl text-ivory">
                    {panel.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/75">
                    {panel.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-sage">
                    Explore
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
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
