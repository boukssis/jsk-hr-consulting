import { CTABanner } from "@/components/shared/CTABanner";

export function FinalCTA() {
  return (
    <CTABanner
      title={
        <>
          Let&apos;s talk about the
          <span className="font-display-italic text-copper"> people decisions </span>
          ahead.
        </>
      }
      description="A first conversation is enough to see whether JSK is the right fit."
      buttonLabel="Let's Talk"
    />
  );
}
