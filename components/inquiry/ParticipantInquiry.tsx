"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { CircleAlert, X } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import {
  fieldErrors,
  participantInquirySchema,
  participantSummaryMessages,
  type ParticipantInquiryValues,
} from "@/lib/inquirySchemas";
import { Choice, ChoiceGroup, Field, TextArea, TextInput } from "./FormControls";

const helpTopics = [
  "Exploring work.",
  "Preparing for work.",
  "Support in a current job.",
  "Understanding the process.",
  "Not sure yet.",
];
const reachingOutOptions = ["For myself.", "Helping someone."];

type Values = ParticipantInquiryValues;

type FieldName = "name" | "email" | "city";
type Errors = Partial<Record<FieldName, { field: string; summary: string }>>;

function validate(values: Values): Errors {
  const result = participantInquirySchema.safeParse(values);
  if (result.success) return {};
  const errors: Errors = {};
  for (const [key, message] of Object.entries(fieldErrors(result.error))) {
    const name = key as FieldName;
    errors[name] = { field: message, summary: participantSummaryMessages[name] ?? message };
  }
  return errors;
}

/**
 * "Talk with Quail" participant inquiry — prototype states 1:983 (form), 1:895 (errors), 1:970 (confirmation).
 * As the design states, this prototype sends and stores no inquiry: submitting only validates and
 * shows the confirmation state.
 */
export function ParticipantInquiry() {
  const [values, setValues] = useState<Values>({
    name: "",
    contactMethod: "email",
    email: "",
    city: "",
    topics: [],
    reachingOut: "",
    details: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const confirmationRef = useRef<HTMLHeadingElement>(null);

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    // Clear a field's error as soon as it is corrected.
    if (key in errors) {
      setErrors((prev) => {
        const next = { ...prev };
        if (!validate({ ...values, [key]: value })[key as FieldName]) delete next[key as FieldName];
        return next;
      });
    }
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setSubmitted(true);
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0 });
      confirmationRef.current?.focus();
    });
  };

  const errorList = (["name", "email", "city"] as const).filter((key) => errors[key]);

  // Laptop (lg+) presents the inquiry as a dialog over the slate backdrop, matching the partner and
  // employer inquiry frames. Everything below lg is the 390 frame, unchanged.
  return (
    <div className="lg:min-h-dvh lg:bg-[#637579] lg:px-20">
      <main
        className={`mx-auto flex w-full max-w-[600px] flex-col gap-4 px-4 pt-6 pb-8 sm:pt-16 sm:pb-16 lg:gap-5 lg:px-0 ${
          submitted ? "lg:min-h-dvh lg:justify-center lg:py-10" : "lg:max-w-[760px] lg:py-14"
        }`}
      >
        <div className="flex flex-col gap-1 rounded-xl bg-sand p-3.5" role="note">
          <p className="text-[13px] leading-[1.5] font-semibold text-ink">
            {submitted ? "Prototype confirmation — no inquiry sent" : "Prototype only — no inquiry sent"}
          </p>
          <p className="text-[13px] leading-[1.5] text-muted">This example sends and stores no inquiry.</p>
        </div>

        <div className="flex flex-col rounded-[28px] bg-white p-6 sm:p-10">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="Quail home" className="w-fit">
              <Image src="/brand/quail-wordmark.png" alt="Quail" width={96} height={32} priority />
            </Link>
            <Link
              href="/participants"
              aria-label="Close inquiry"
              className="hidden size-11 items-center justify-center rounded-[14px] bg-cream text-ink transition-colors hover:bg-sage focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:flex"
            >
              <Icon icon={X} size={20} stroke={1} />
            </Link>
          </div>

          {submitted ? (
            <div className="mt-7 flex flex-col gap-7">
              <p className="text-[13px] leading-4 font-semibold text-brand">For Participants &amp; Families</p>
              <div className="flex flex-col gap-[18px]">
                <h1
                  ref={confirmationRef}
                  tabIndex={-1}
                  className="text-[28px] leading-[1.18] font-medium tracking-[-0.008em] text-ink outline-none lg:text-[34px]"
                >
                  Thank you for reaching out.
                </h1>
                <p className="text-[17px] leading-7 text-muted">
                  We’ll review your message and explain the appropriate next step.
                </p>
                <p className="rounded-xl bg-sand p-4 text-[15px] leading-[1.6] text-ink">
                  Contacting Quail does not guarantee a job, funding, or service availability.
                </p>
              </div>
              <Link
                href="/participants"
                className="w-fit text-[15px] leading-[1.5] font-semibold text-brand underline underline-offset-2"
              >
                Return to For Participants
              </Link>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} className="mt-6 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <p className="text-[13px] leading-4 font-semibold text-brand">For Participants &amp; Families</p>
                <h1 className="text-[28px] leading-[1.18] font-medium tracking-[-0.008em] text-ink lg:text-[34px]">
                  Talk with Quail
                </h1>
                <p className="text-[17px] leading-7 text-muted">Tell us what you would like to explore.</p>
                <p className="text-[13px] leading-[1.5] text-muted">
                  * Required fields. All other details are optional.
                </p>
              </div>

              {errorList.length > 0 && (
                <div
                  ref={summaryRef}
                  tabIndex={-1}
                  role="alert"
                  className="flex flex-col gap-2 rounded-xl border border-error bg-error-surface p-4 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-error"
                >
                  <Icon icon={CircleAlert} size={28} stroke={1.5} className="text-error" />
                  <p className="text-base leading-[1.5] text-error">
                    Please check {errorList.length} {errorList.length === 1 ? "detail" : "details"}.
                  </p>
                  <ul className="text-sm leading-[1.5] text-ink">
                    {errorList.map((key) => (
                      <li key={key}>
                        <a href={`#inquiry-${key}`} className="hover:underline">
                          {errors[key]!.summary}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-col gap-[18px]">
                <Field id="inquiry-name" label="Name *" error={errors.name?.field}>
                  <TextInput
                    id="inquiry-name"
                    name="name"
                    autoComplete="name"
                    required
                    value={values.name}
                    invalid={!!errors.name}
                    onChange={(event) => set("name", event.target.value)}
                  />
                </Field>

                <ChoiceGroup legend="How should we contact you? *">
                  <Choice
                    type="radio"
                    name="contactMethod"
                    value="email"
                    label="Email"
                    checked={values.contactMethod === "email"}
                    onChange={() => set("contactMethod", "email")}
                  />
                </ChoiceGroup>

                <div className="contents lg:grid lg:grid-cols-2 lg:gap-[18px]">
                  <Field id="inquiry-email" label="Email address *" error={errors.email?.field}>
                    <TextInput
                      id="inquiry-email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="name@example.com"
                      required
                      value={values.email}
                      invalid={!!errors.email}
                      onChange={(event) => set("email", event.target.value)}
                    />
                  </Field>

                  <Field id="inquiry-city" label="City or area *" error={errors.city?.field}>
                    <TextInput
                      id="inquiry-city"
                      name="city"
                      autoComplete="address-level2"
                      required
                      value={values.city}
                      invalid={!!errors.city}
                      onChange={(event) => set("city", event.target.value)}
                    />
                  </Field>
                </div>
              </div>

              <div className="flex flex-col gap-5 rule-t pt-5">
                <ChoiceGroup legend="What would you like help with? (optional)" hint="Choose any that fit.">
                  {helpTopics.map((topic) => (
                    <Choice
                      key={topic}
                      type="checkbox"
                      name="topics"
                      value={topic}
                      label={topic}
                      checked={values.topics.includes(topic)}
                      onChange={(checked) =>
                        set("topics", checked ? [...values.topics, topic] : values.topics.filter((t) => t !== topic))
                      }
                    />
                  ))}
                </ChoiceGroup>

                <ChoiceGroup legend="Are you reaching out for yourself or helping someone? (optional)">
                  {reachingOutOptions.map((option) => (
                    <Choice
                      key={option}
                      type="radio"
                      name="reachingOut"
                      value={option}
                      label={option}
                      checked={values.reachingOut === option}
                      onChange={() => set("reachingOut", option)}
                    />
                  ))}
                </ChoiceGroup>

                <div className="flex flex-col gap-2">
                  <label htmlFor="inquiry-details" className="text-sm leading-[1.5] font-medium text-ink">
                    Anything that would make this conversation easier? (optional)
                  </label>
                  <TextArea
                    id="inquiry-details"
                    name="details"
                    value={values.details}
                    onChange={(event) => set("details", event.target.value)}
                  />
                </div>

                <p className="rounded-[14px] bg-sand p-4 text-sm leading-[1.6] text-ink">
                  Please do not include medical records or other sensitive documents in this inquiry.
                </p>
              </div>

              <button
                type="submit"
                className="flex h-14 w-full items-center justify-center rounded-[14px] border border-ink bg-ink px-6 text-base leading-6 font-semibold text-white transition-colors hover:bg-[#1a313d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Talk with Quail
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
