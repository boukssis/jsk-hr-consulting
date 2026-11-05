import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-ivory py-24">
      <Container className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-forest">
          Page not found
        </p>
        <h1 className="mt-5 font-display text-5xl text-ink">
          This page is unavailable.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8">
          <Button href="/">Return Home</Button>
        </div>
      </Container>
    </section>
  );
}
