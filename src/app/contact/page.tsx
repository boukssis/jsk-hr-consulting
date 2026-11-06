import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Start a Conversation",
  description:
    "Start a conversation with JSK Human Resources Consulting about your organization's people priorities.",
};

export default function ContactPage() {
  return (
    <section className="bg-paper">
      <Container className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-20">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-copper">
            Contact
          </p>
          <h1 className="mt-4 max-w-[12ch] font-display text-[clamp(2.5rem,5vw,4.2rem)] leading-[0.98] tracking-[-0.03em] text-ink">
            Let&apos;s start with the real question.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Share a high-level view of what your organization is navigating.
            Sensitive employee details belong in a later, private conversation.
          </p>

          <div className="mt-10 space-y-6 border-t border-ink/10 pt-8">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-taupe">
                Location
              </p>
              <p className="mt-2 text-ink">{siteConfig.location}</p>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-taupe">
                LinkedIn
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href={siteConfig.linkedIn.personal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-ink transition hover:text-copper"
                  >
                    <LinkedInIcon />
                    {siteConfig.consultant}
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.linkedIn.company}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-ink transition hover:text-copper"
                  >
                    <LinkedInIcon />
                    {siteConfig.name}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="border border-ink/10 bg-ivory p-6 sm:p-8 lg:p-10">
            {!siteConfig.acceptEnquiries ? (
              <p className="mb-6 border-b border-ink/10 pb-5 text-sm leading-relaxed text-muted">
                This form is not yet accepting live enquiries. To continue the
                conversation now, use{" "}
                <a
                  href={siteConfig.linkedIn.personal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline decoration-copper underline-offset-4 hover:text-copper"
                >
                  June&apos;s LinkedIn
                </a>
                .
              </p>
            ) : null}
            <ContactForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
