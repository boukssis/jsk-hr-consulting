/**
 * Reusable placeholder for future verified testimonials.
 * Remains hidden until real client content is provided.
 */
export function TestimonialPlaceholder({
  enabled = false,
}: {
  enabled?: boolean;
}) {
  if (!enabled) return null;

  return (
    <section className="bg-ivory py-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sage">
          Client Perspectives
        </p>
        <p className="mt-4 text-slate">
          Verified testimonials will appear here once approved for publication.
        </p>
      </div>
    </section>
  );
}
