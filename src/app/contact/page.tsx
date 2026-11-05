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
    "Request a consultation with JSK Human Resources Consulting. Tell us about your organization and the HR challenges you're navigating.",
};

export default function ContactPage() {
  const calendlyUrl = siteConfig.calendlyUrl;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about what your organization needs."
        description="Tell us a little about your business and the HR challenges you're navigating. This initial enquiry helps start a thoughtful conversation."
      />

      <section className="bg-ivory py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sage">
                Consultation Enquiry
              </p>
              <h2 className="mt-4 font-display text-3xl text-navy sm:text-4xl">
                Share the essentials. We&apos;ll take it from there.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate">
                Use the form to request a consultation. Please keep this first
                message high-level — avoid confidential employee or personnel
                details until a secure follow-up conversation is appropriate.
              </p>

              <div className="mt-10 space-y-6 border-t border-sand pt-8">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sage">
                    Location
                  </p>
                  <p className="mt-2 text-navy">{siteConfig.location}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sage">
                    Connect on LinkedIn
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li>
                      <a
                        href={siteConfig.linkedIn.personal}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-navy transition hover:text-sage"
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
                        className="inline-flex items-center gap-2 text-sm text-navy transition hover:text-sage"
                      >
                        <LinkedInIcon />
                        JSK Human Resources Consulting
                      </a>
                    </li>
                  </ul>
                </div>

                {calendlyUrl ? (
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sage">
                      Book Directly
                    </p>
                    <a
                      href={calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm text-navy underline decoration-sage/40 underline-offset-4 hover:decoration-sage"
                    >
                      Open scheduling calendar
                    </a>
                  </div>
                ) : (
                  <div className="border border-dashed border-sand bg-white/60 p-4 text-sm text-slate">
                    Optional Calendly booking can be enabled later via{" "}
                    <code className="text-navy">NEXT_PUBLIC_CALENDLY_URL</code>.
                    No booking link is invented for this preview.
                  </div>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border border-sand bg-white p-6 sm:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
