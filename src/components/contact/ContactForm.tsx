"use client";

import { useId, useState } from "react";
import { serviceInterestOptions } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type FormState = {
  fullName: string;
  companyName: string;
  workEmail: string;
  phone: string;
  serviceInterest: string;
  message: string;
  website: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  fullName: "",
  companyName: "",
  workEmail: "",
  phone: "",
  serviceInterest: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const honeypotId = useId();
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "preview" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  function validateClient(): FieldErrors {
    const next: FieldErrors = {};
    if (values.fullName.trim().length < 2) {
      next.fullName = "Please enter your full name.";
    }
    if (values.companyName.trim().length < 2) {
      next.companyName = "Please enter your company name.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.workEmail.trim())) {
      next.workEmail = "Please enter a valid work email address.";
    }
    if (
      !serviceInterestOptions.includes(
        values.serviceInterest as (typeof serviceInterestOptions)[number],
      )
    ) {
      next.serviceInterest = "Please select a service.";
    }
    if (values.message.trim().length < 20) {
      next.message =
        "Please share a bit more about what you need (at least 20 characters).";
    }
    if (values.website.trim().length > 0) {
      next.website = "Unable to process this submission.";
    }
    return next;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const clientErrors = validateClient();
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      setStatus("error");
      setFeedback("Please correct the highlighted fields and try again.");
      return;
    }

    setStatus("loading");
    setFeedback("");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as {
        ok: boolean;
        mode?: "sent" | "preview";
        message?: string;
        errors?: FieldErrors;
      };

      if (!response.ok || !data.ok) {
        setErrors(data.errors || {});
        setStatus("error");
        setFeedback(
          data.message || "Something went wrong. Please try again shortly.",
        );
        return;
      }

      if (data.mode === "preview") {
        setStatus("preview");
      } else {
        setStatus("success");
      }
      setFeedback(
        data.message ||
          "Thank you. Your consultation request has been received.",
      );
      setValues(initialState);
    } catch {
      setStatus("error");
      setFeedback("Unable to submit right now. Please try again in a moment.");
    }
  }

  const inputClass =
    "w-full border border-ink/15 bg-paper px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-muted/45 focus:border-copper focus:ring-2 focus:ring-copper/15";

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Name" required error={errors.fullName}>
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            className={cn(inputClass, errors.fullName && "border-red-500")}
            value={values.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
        </Field>
        <Field
          id="companyName"
          label="Company"
          required
          error={errors.companyName}
        >
          <input
            id="companyName"
            name="companyName"
            autoComplete="organization"
            className={cn(inputClass, errors.companyName && "border-red-500")}
            value={values.companyName}
            onChange={(e) => updateField("companyName", e.target.value)}
            aria-invalid={Boolean(errors.companyName)}
            aria-describedby={
              errors.companyName ? "companyName-error" : undefined
            }
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="workEmail" label="Work email" required error={errors.workEmail}>
          <input
            id="workEmail"
            name="workEmail"
            type="email"
            autoComplete="email"
            className={cn(inputClass, errors.workEmail && "border-red-500")}
            value={values.workEmail}
            onChange={(e) => updateField("workEmail", e.target.value)}
            aria-invalid={Boolean(errors.workEmail)}
            aria-describedby={errors.workEmail ? "workEmail-error" : undefined}
          />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={cn(inputClass, errors.phone && "border-red-500")}
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
          />
        </Field>
      </div>

      <Field
        id="serviceInterest"
        label="Service of interest"
        required
        error={errors.serviceInterest}
      >
        <select
          id="serviceInterest"
          name="serviceInterest"
          className={cn(inputClass, errors.serviceInterest && "border-red-500")}
          value={values.serviceInterest}
          onChange={(e) => updateField("serviceInterest", e.target.value)}
          aria-invalid={Boolean(errors.serviceInterest)}
          aria-describedby={
            errors.serviceInterest ? "serviceInterest-error" : undefined
          }
        >
          <option value="">Select a service</option>
          {serviceInterestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Brief message" required error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={cn(
            inputClass,
            "resize-y",
            errors.message && "border-red-500",
          )}
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Share a high-level overview of your organization and the HR topics you'd like to discuss."
        />
      </Field>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor={honeypotId}>Company website</label>
        <input
          id={honeypotId}
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => updateField("website", e.target.value)}
        />
      </div>

      <p className="text-xs leading-relaxed text-muted">
        Please don&apos;t include sensitive employee or confidential personnel
        information in this initial enquiry.
      </p>

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto"
      >
        {status === "loading" ? "Sending..." : "Request a Consultation"}
      </Button>

      <div aria-live="polite" className="min-h-[1.5rem]">
        {feedback ? (
          <p
            className={cn(
              "text-sm leading-relaxed",
              status === "success" && "text-forest",
              status === "preview" && "text-ink",
              status === "error" && "text-red-600",
            )}
          >
            {feedback}
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-ink"
      >
        {label}
        {required ? <span className="text-copper"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
