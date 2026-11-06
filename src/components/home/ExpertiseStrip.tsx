import { expertiseStrip } from "@/lib/site";

export function ExpertiseStrip() {
  const loop = [...expertiseStrip, ...expertiseStrip, ...expertiseStrip];

  return (
    <section className="overflow-hidden border-y border-ink/10 bg-soft py-4">
      <div className="flex w-max animate-marquee items-center gap-10 pr-10 motion-reduce:animate-none">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-10">
            <span className="font-display text-xl text-ink sm:text-2xl">{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-copper" aria-hidden />
          </span>
        ))}
      </div>
    </section>
  );
}
