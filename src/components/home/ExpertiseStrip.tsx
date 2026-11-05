import { expertiseStrip } from "@/lib/site";

export function ExpertiseStrip() {
  return (
    <section className="border-y border-ink/10 bg-stone/60">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-3 px-5 py-5 sm:justify-between sm:gap-x-0 sm:px-8 lg:px-10">
        {expertiseStrip.map((item, index) => (
          <div key={item} className="flex items-center gap-0 sm:contents">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/80">
              {item}
            </span>
            {index < expertiseStrip.length - 1 ? (
              <span
                className="mx-3 hidden h-3 w-px bg-ink/15 sm:mx-0 sm:block"
                aria-hidden
              />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
