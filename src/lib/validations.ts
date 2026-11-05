import { z } from "zod";
import { serviceInterestOptions } from "./site";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name is too long."),
  companyName: z
    .string()
    .trim()
    .min(2, "Please enter your company name.")
    .max(120, "Company name is too long."),
  workEmail: z.email("Please enter a valid work email address."),
  phone: z
    .string()
    .trim()
    .max(40, "Phone number is too long.")
    .optional()
    .or(z.literal("")),
  companySize: z
    .string()
    .trim()
    .max(60, "Company size value is too long.")
    .optional()
    .or(z.literal("")),
  serviceInterest: z.enum(serviceInterestOptions, {
    error: "Please select a service.",
  }),
  message: z
    .string()
    .trim()
    .min(20, "Please share a bit more about what you need (at least 20 characters).")
    .max(2000, "Message is too long."),
  website: z.string().max(0, "Unable to process this submission.").optional().or(z.literal("")),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
