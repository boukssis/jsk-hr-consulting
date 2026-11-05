import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-navy py-32 text-ivory">
      <Container className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sage">
          Page not found
        </p>
        <h1 className="mt-5 font-display text-5xl">This page is unavailable.</h1>
        <p className="mx-auto mt-5 max-w-md text-ivory/70">
          The page you&apos;re looking for doesn&apos;t exist in this private
          design concept.
        </p>
        <div className="mt-8">
          <Button href="/">Return Home</Button>
        </div>
      </Container>
    </section>
  );
}
