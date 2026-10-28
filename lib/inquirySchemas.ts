import { z } from "zod";
import type { InquiryField } from "@/components/inquiry/InquiryDialog";

// Zod schemas for every inquiry form. Error copy follows "Quail — Participant Inquiry — Error" (1:895),
// the only error state drawn in Figma; the employer and partner dialogs reuse its pattern.

const requiredText = (message: string) => z.string().trim().min(1, message);
const requiredEmail = (message: string) => z.string().trim().pipe(z.email(message));

/** "Talk with Quail" (1:983). Name, email and city are required; everything else is optional. */
export const participantInquirySchema = z.object({
  name: requiredText("Enter your name."),
  contactMethod: z.literal("email"),
  email: requiredEmail("Enter an email address like name@example.com."),
  city: requiredText("Enter your city or area."),
  topics: z.array(z.string()),
  reachingOut: z.string(),
  details: z.string(),
});

export type ParticipantInquiryValues = z.input<typeof participantInquirySchema>;

/** Summary-box wording where it differs from the message under the field (1:895). */
export const participantSummaryMessages: Partial<Record<keyof ParticipantInquiryValues, string>> = {
  email: "Please check your email address.",
};

function fieldSchema(field: InquiryField): z.ZodType {
  switch (field.kind) {
    case "select": {
      const options = z.enum(field.options as [string, ...string[]], field.error);
      return field.required ? options : options.or(z.literal(""));
    }
    case "checkboxes":
      return field.required && field.error ? z.array(z.string()).min(1, field.error) : z.array(z.string());
    case "email":
      return field.required && field.error ? requiredEmail(field.error) : z.string();
    default:
      return field.required && field.error ? requiredText(field.error) : z.string();
  }
}

/** Builds the schema for an employer / partner dialog from its field config in `lib/inquiries.ts`. */
export function buildInquirySchema(fields: InquiryField[]) {
  return z.object(Object.fromEntries(fields.map((field) => [field.name, fieldSchema(field)])));
}

/** First error message per field, keyed by field name. */
export function fieldErrors(error: z.ZodError): Record<string, string> {
  const found: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0]);
    found[key] ??= issue.message;
  }
  return found;
}
