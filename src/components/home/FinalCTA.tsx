import { CTABanner } from "@/components/shared/CTABanner";

export function FinalCTA() {
  return (
    <CTABanner
      eyebrow="Begin"
      title={
        <>
          Let&apos;s make your next
          <br />
          people decision count.
        </>
      }
      buttonLabel="Start a Conversation"
    />
  );
}
