import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations";
import { siteConfig } from "@/lib/site";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return NextResponse.json(
      {
        ok: false,
        message: "Please correct the highlighted fields and try again.",
        errors: fieldErrors,
      },
      { status: 400 },
    );
  }

  const data = parsed.data;

  if (data.website && data.website.length > 0) {
    return NextResponse.json(
      { ok: false, message: "Unable to process this submission." },
      { status: 400 },
    );
  }

  const recipient = process.env.CONTACT_TO_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || "JSK Website <onboarding@resend.dev>";
  const acceptEnquiries = process.env.CONTACT_ACCEPT_ENQUIRIES === "true";

  if (!acceptEnquiries || !recipient || !apiKey) {
    return NextResponse.json({
      ok: true,
      mode: "preview",
      message:
        "Thank you for your interest. This consultation form is not currently accepting live enquiries. Please connect via LinkedIn to continue the conversation.",
    });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [recipient],
      replyTo: data.workEmail,
      subject: `Consultation request from ${data.fullName} · ${data.companyName}`,
      text: [
        `New consultation enquiry via ${siteConfig.name} website`,
        "",
        `Name: ${data.fullName}`,
        `Company: ${data.companyName}`,
        `Work email: ${data.workEmail}`,
        `Phone: ${data.phone || "Not provided"}`,
        `Company size: ${data.companySize || "Not provided"}`,
        `Service interest: ${data.serviceInterest}`,
        "",
        "Message:",
        data.message,
      ].join("\n"),
    });

    if (error) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "The enquiry could not be delivered right now. Please try again later.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      mode: "sent",
      message:
        "Thank you. Your consultation request has been received. We'll be in touch soon.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message:
          "The enquiry could not be delivered right now. Please try again later.",
      },
      { status: 502 },
    );
  }
}
