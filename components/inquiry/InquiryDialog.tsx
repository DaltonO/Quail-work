"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { CircleAlert, Info, X } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Select } from "@/components/ui/Select";
import { buildInquirySchema, fieldErrors } from "@/lib/inquirySchemas";
import { Choice, TextArea, TextInput } from "./FormControls";

// Shared dialog for the employer (1:2193 / 1:2119), provider partnership (1:16320 / 1:16324) and
// Regional Center referral (1:16328 / 1:16332) inquiries plus their confirmations (1:2100 / 1:2081,
// 1:16336 / 1:16354). The 390 and 1440 frames share one structure: only padding, heading size and
// the two-column field rows change, so one responsive component reproduces both.

export type InquiryField =
  | {
      kind: "text" | "email" | "textarea";
      name: string;
      label: string;
      placeholder: string;
      required?: boolean;
      /** Error copy shown under the field (prefixed with "Error:") and in the summary. */
      error?: string;
      /** Textarea height in px (88 employer, 96 partners). */
      height?: number;
    }
  | {
      kind: "select";
      name: string;
      label: string;
      options: string[];
      /** Muted text shown until an option is chosen. */
      placeholder: string;
      hint?: string;
      required?: boolean;
      error?: string;
    }
  | {
      kind: "checkboxes";
      name: string;
      label: string;
      hint: string;
      options: string[];
      required?: boolean;
      error?: string;
    };

/** A row is one full-width field or a pair rendered side by side from 640px up. */
export type InquiryRow = InquiryField | [InquiryField, InquiryField];

export type InquiryConfig = {
  /** Backdrop: employer frames lay a 65% #142e38 scrim over cream; partner frames use solid #637579. */
  backdrop: "scrim" | "slate";
  notice: { form: string; confirmation: string; icon: boolean };
  /** Employer dialogs carry a drop shadow; the partner form instances do not. */
  shadow: boolean;
  closeHref: string;
  closeStroke: number;
  pathIdentity?: { selected: string; other: string; otherHref: string };
  heading: string;
  description: string;
  requiredNote: string;
  privacyWarning?: string;
  required: InquiryRow[];
  /** Column gap of paired required rows: 18. */
  optional?: { heading: string; headingStyle: "title" | "lead"; gap: 16 | 18; rows: InquiryRow[]; pairGap: 16 | 18 };
  afterFieldsNote?: string;
  submit: { label: string; textSize: 15 | 16; note: string };
  confirmation: { heading: string; body: string; note?: string; action: string; actionHref: string; actionTextSize: 15 | 16 };
};

const flatten = (rows: InquiryRow[]) => rows.flatMap((row) => (Array.isArray(row) ? row : [row]));
const fieldsOf = (config: InquiryConfig) => [...flatten(config.required), ...flatten(config.optional?.rows ?? [])];

export function InquiryDialog({ config }: { config: InquiryConfig }) {
  const allFields = fieldsOf(config);
  const [values, setValues] = useState<Record<string, string | string[]>>(() =>
    Object.fromEntries(
      allFields.map((field) => [
        field.name,
        field.kind === "checkboxes" ? [] : "",
      ]),
    ),
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const confirmationRef = useRef<HTMLHeadingElement>(null);
  const schema = useMemo(() => buildInquirySchema(fieldsOf(config)), [config]);

  const update = (field: InquiryField, value: string | string[]) => {
    setValues((prev) => ({ ...prev, [field.name]: value }));
    // Clear a field's error as soon as it is corrected.
    if (errors[field.name] && schema.shape[field.name].safeParse(value).success) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field.name];
        return next;
      });
    }
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      setErrors(fieldErrors(result.error));
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setErrors({});
    // Prototype per the design: nothing is transmitted or stored.
    setSubmitted(true);
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0 });
      confirmationRef.current?.focus();
    });
  };

  const errorEntries = allFields.filter((field) => errors[field.name]);
  const backdrop = config.backdrop === "scrim" ? "bg-[#647479]" : "bg-[#637579]";
  const shadow = config.shadow ? "shadow-[0_24px_80px_0_rgb(16_44_52/0.2)]" : "";

  const renderField = (field: InquiryField) => {
    const id = `inquiry-${field.name}`;
    const error = errors[field.name];
    if (field.kind === "checkboxes") {
      const selected = values[field.name] as string[];
      return (
        <fieldset key={field.name} className="flex flex-col gap-2.5" aria-describedby={error ? `${id}-error` : undefined}>
          <legend className="mb-2.5 text-sm leading-[1.5] font-medium text-ink">{field.label}</legend>
          <p className="text-[13.3px] leading-5 text-muted">{field.hint}</p>
          {field.options.map((option) => (
            <Choice
              key={option}
              size="roomy"
              type="checkbox"
              name={field.name}
              value={option}
              label={option}
              checked={selected.includes(option)}
              onChange={(checked) =>
                update(field, checked ? [...selected, option] : selected.filter((item) => item !== option))
              }
            />
          ))}
          {error && (
            <p id={`${id}-error`} className="text-[13px] leading-[1.5] text-error">
              Error: {error}
            </p>
          )}
        </fieldset>
      );
    }
    return (
      <div key={field.name} id={`${id}-field`} className="flex min-w-0 flex-col gap-2">
        <label htmlFor={id} className="text-sm leading-[1.5] font-medium text-ink">
          {field.label}
        </label>
        {field.kind === "select" ? (
          <>
            <Select
              id={id}
              name={field.name}
              options={field.options}
              value={values[field.name] as string}
              placeholder={field.placeholder}
              required={field.required}
              invalid={!!error}
              aria-describedby={[error && `${id}-error`, field.hint && `${id}-hint`].filter(Boolean).join(" ") || undefined}
              onChange={(value) => update(field, value)}
            />
            {field.hint && (
              <p id={`${id}-hint`} className="text-[13px] leading-[1.5] text-muted">
                {field.hint}
              </p>
            )}
          </>
        ) : field.kind === "textarea" ? (
          <TextArea
            id={id}
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
            invalid={!!error}
            style={{ height: field.height ?? 88 }}
            value={values[field.name] as string}
            onChange={(event) => update(field, event.target.value)}
          />
        ) : (
          <TextInput
            id={id}
            name={field.name}
            type={field.kind}
            inputMode={field.kind === "email" ? "email" : undefined}
            autoComplete={field.kind === "email" ? "email" : undefined}
            placeholder={field.placeholder}
            required={field.required}
            invalid={!!error}
            value={values[field.name] as string}
            onChange={(event) => update(field, event.target.value)}
          />
        )}
        {error && (
          <p id={`${id}-error`} className="text-[13px] leading-[1.5] text-error">
            Error: {error}
          </p>
        )}
      </div>
    );
  };

  const renderRows = (rows: InquiryRow[], pairGap: 16 | 18) =>
    rows.map((row, index) =>
      Array.isArray(row) ? (
        <div
          key={index}
          className={`grid grid-cols-1 gap-[18px] sm:grid-cols-2 ${pairGap === 16 ? "sm:gap-x-4" : "sm:gap-x-[18px]"}`}
        >
          {row.map(renderField)}
        </div>
      ) : (
        renderField(row)
      ),
    );

  const header = (
    <div className="flex items-center justify-between">
      <Link href="/" aria-label="Quail home">
        <Image src="/brand/quail-wordmark.png" alt="Quail" width={96} height={32} priority />
      </Link>
      <Link
        href={config.closeHref}
        aria-label="Close inquiry"
        className="flex size-11 items-center justify-center rounded-[14px] bg-cream text-ink transition-colors hover:bg-sage focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        <Icon icon={X} size={20} stroke={config.closeStroke} />
      </Link>
    </div>
  );

  const notice = (
    <div
      role="note"
      className={`flex w-full items-start gap-2.5 rounded-xl bg-sand px-4 ${submitted ? "py-4" : "py-3"}`}
    >
      {config.notice.icon && <Icon icon={Info} size={18} stroke={1.5} className="mt-px text-brand" />}
      <p className="text-[13px] leading-[1.5] font-medium text-ink">
        {submitted ? config.notice.confirmation : config.notice.form}
      </p>
    </div>
  );

  if (submitted) {
    const { confirmation } = config;
    return (
      <main
        className={`flex min-h-dvh flex-col items-center justify-center gap-5 px-4 py-10 lg:px-20 lg:py-40 ${backdrop}`}
      >
        <div className="flex w-full max-w-[600px] flex-col gap-5">
          {notice}
          <div className={`flex flex-col gap-7 rounded-[28px] bg-white p-6 sm:p-10 ${shadow}`}>
            {header}
            <div className="flex flex-col gap-5">
              <h1
                ref={confirmationRef}
                tabIndex={-1}
                className="text-[28px] leading-[1.18] font-medium tracking-[-0.008em] text-ink outline-none sm:text-[34px]"
              >
                {confirmation.heading}
              </h1>
              <p className="text-[17px] leading-7 text-muted">{confirmation.body}</p>
              {confirmation.note && <p className="text-[13.3px] leading-5 text-muted">{confirmation.note}</p>}
            </div>
            <Link
              href={confirmation.actionHref}
              className={`flex h-14 w-full items-center justify-center rounded-[14px] bg-brand px-6 leading-6 font-semibold text-white transition-colors hover:bg-[#21564d] ${
                confirmation.actionTextSize === 16 ? "text-base" : "text-[15px]"
              }`}
            >
              {confirmation.action}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={`flex min-h-dvh flex-col items-center gap-5 px-4 pt-6 pb-8 lg:px-20 lg:py-14 ${backdrop}`}>
      <div className="flex w-full max-w-[760px] flex-col gap-5">
        {notice}
        <form
          noValidate
          onSubmit={onSubmit}
          aria-labelledby="inquiry-heading"
          className={`flex flex-col gap-6 rounded-[28px] bg-white p-6 sm:p-10 ${shadow}`}
        >
          {header}

          {config.pathIdentity && (
            <div className="flex flex-col gap-2.5 rounded-[14px] bg-cream p-4">
              <p className="text-xs leading-[15px] font-semibold tracking-[0.004em] text-brand">INQUIRY PATH</p>
              <p className="text-[15px] leading-[1.5] font-semibold text-ink">{config.pathIdentity.selected}</p>
              <Link
                href={config.pathIdentity.otherHref}
                className="text-[13px] leading-[1.5] text-brand hover:underline"
              >
                {config.pathIdentity.other}
              </Link>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <h1
              id="inquiry-heading"
              className="text-[28px] leading-[1.18] font-medium tracking-[-0.008em] text-ink sm:text-[34px]"
            >
              {config.heading}
            </h1>
            <p className="text-[17px] leading-7 text-muted">{config.description}</p>
            <p className="text-[13px] leading-[1.5] text-muted">{config.requiredNote}</p>
          </div>

          {config.privacyWarning && (
            <p className="rounded-[14px] bg-sand p-4 text-sm leading-[1.6] text-ink">{config.privacyWarning}</p>
          )}

          {errorEntries.length > 0 && (
            <div
              ref={summaryRef}
              tabIndex={-1}
              role="alert"
              className="flex flex-col gap-2 rounded-xl border border-error bg-error-surface p-4 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-error"
            >
              <Icon icon={CircleAlert} size={28} stroke={1.5} className="text-error" />
              <p className="text-base leading-[1.5] text-error">
                Please check {errorEntries.length} {errorEntries.length === 1 ? "detail" : "details"}.
              </p>
              <ul className="text-sm leading-[1.5] text-ink">
                {errorEntries.map((field) => (
                  <li key={field.name}>
                    <a href={`#inquiry-${field.name}`} className="hover:underline">
                      {errors[field.name]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col gap-[18px]">
            {renderRows(config.required, 18)}
            {config.afterFieldsNote && <p className="text-[13.3px] leading-5 text-muted">{config.afterFieldsNote}</p>}
          </div>

          {config.optional && (
            <div
              className={`flex flex-col rule-t pt-5 ${config.optional.gap === 16 ? "gap-4" : "gap-[18px]"}`}
            >
              <p
                className={
                  config.optional.headingStyle === "title"
                    ? "text-base leading-[19px] font-medium text-ink"
                    : "text-[17px] leading-7 text-muted"
                }
              >
                {config.optional.heading}
              </p>
              {renderRows(config.optional.rows, config.optional.pairGap)}
            </div>
          )}

          <div className="flex flex-col gap-3.5">
            <button
              type="submit"
              className={`flex h-14 w-full items-center justify-center rounded-[14px] bg-brand px-6 leading-6 font-semibold text-white transition-colors hover:bg-[#21564d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                config.submit.textSize === 16 ? "text-base" : "text-[15px]"
              }`}
            >
              {config.submit.label}
            </button>
            <p className="text-[13.3px] leading-5 text-muted">{config.submit.note}</p>
          </div>
        </form>
      </div>
    </main>
  );
}
