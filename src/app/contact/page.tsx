import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Schedule an HR Consultation",
  description:
    "Start a conversation with JSK Human Resources Consulting about your organization's people priorities.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        tone="light"
        eyebrow="Contact"
        title={
          <>
            Let&apos;s start a
            <br />
            <span className="font-display-italic text-sage">conversation.</span>
          </>
        }
        description="Tell us what your organization is navigating. We'll help you take the next step."
      />

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <h2 className="font-display text-3xl text-navy sm:text-4xl">
                Share the essentials.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Keep this first message high-level. Sensitive employee or
                personnel details are best reserved for a secure follow-up
                conversation.
              </p>

              <div className="mt-10 space-y-6 border-t border-navy/10 pt-8">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sage-deep">
                    Location
                  </p>
                  <p className="mt-2 text-navy">{siteConfig.location}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sage-deep">
                    Connect on LinkedIn
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li>
                      <a
                        href={siteConfig.linkedIn.personal}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-navy transition hover:text-sage-deep"
                      >
                        <LinkedInIcon />
                        June Speranza Kerr
                      </a>
                    </li>
                    <li>
                      <a
                        href={siteConfig.linkedIn.company}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-navy transition hover:text-sage-deep"
                      >
                        <LinkedInIcon />
                        JSK Human Resources Consulting
                      </a>
                    </li>
                  </ul>
                </div>
                {siteConfig.calendlyUrl ? (
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sage-deep">
                      Schedule
                    </p>
                    <a
                      href={siteConfig.calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm text-navy underline decoration-sage underline-offset-4 hover:text-sage-deep"
                    >
                      Open scheduling calendar
                    </a>
                  </div>
                ) : null}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border border-navy/10 bg-ivory/80 p-6 sm:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
