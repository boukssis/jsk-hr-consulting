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
      description="Whether you're strengthening your team, navigating change, or developing leaders, the right HR guidance makes a difference."
      buttonLabel="Start a Conversation"
    />
  );
}
