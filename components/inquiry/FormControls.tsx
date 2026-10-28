// Form controls from "Quail — Participant Inquiry" (1:983) and its error state (1:895).

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
};

/** "Form field" — Medium 14/150 label, 8px gap, optional 13/150 error line. */
export function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm leading-[1.5] font-medium text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-[13px] leading-[1.5] text-error">
          Error: {error}
        </p>
      )}
    </div>
  );
}

// "Input" 52px, 14px padding, 14px radius, #dadfd7 border. Focus = 2px brand border + 3px 16% ring.
// Error = 2px #9b392e border on #faf4f4.
const inputBase =
  "w-full rounded-[14px] border px-[14px] text-base leading-[1.5] text-ink placeholder:text-muted outline-none transition-[box-shadow,border-color] focus:border-2 focus:border-brand focus:px-[13px] focus:shadow-[0_0_0_3px_rgb(40_102_92/0.16)]";
const inputValid = "border-line bg-white";
const inputInvalid = "border-2 border-error bg-error-field px-[13px]";

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean };

export function TextInput({ invalid, className = "", ...props }: TextInputProps) {
  return (
    <input
      {...props}
      aria-invalid={invalid || undefined}
      aria-describedby={invalid ? `${props.id}-error` : undefined}
      className={`h-[52px] ${inputBase} ${invalid ? inputInvalid : inputValid} ${className}`}
    />
  );
}

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean };

export function TextArea({ invalid, className = "", ...props }: TextAreaProps) {
  return (
    <textarea
      {...props}
      aria-invalid={invalid || undefined}
      aria-describedby={invalid ? `${props.id}-error` : undefined}
      className={`h-[88px] resize-none ${inputBase} ${invalid ? `${inputInvalid} py-[13px]` : `${inputValid} py-[14px] focus:py-[13px]`} ${className}`}
    />
  );
}

type ChoiceProps = {
  type: "radio" | "checkbox";
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  /** "compact" = participant inquiry (44px, 10/14 padding); "roomy" = partner/employer dialogs (48px, 12/14). */
  size?: "compact" | "roomy";
};

/** "Choice" — 12 radius row. Selected = sage fill + brand border. */
export function Choice({ type, name, value, label, checked, onChange, size = "compact" }: ChoiceProps) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-3 rounded-xl border px-3.5 transition-colors ${
        size === "compact" ? "min-h-11 py-2.5" : "min-h-12 py-3"
      } has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand ${
        checked ? "border-brand bg-sage" : "border-line bg-cream hover:bg-sage/60"
      }`}
    >
      <input
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="peer sr-only"
      />
      {type === "radio" ? (
        <span
          aria-hidden
          className={`flex size-[18px] shrink-0 items-center justify-center rounded-full border bg-white ${
            checked ? "border-brand" : "border-control"
          }`}
        >
          {checked && <span className="size-2 rounded-full bg-brand" />}
        </span>
      ) : (
        <span
          aria-hidden
          className={`flex size-[18px] shrink-0 items-center justify-center rounded border bg-white text-sm leading-none font-bold text-brand ${
            checked ? "border-brand" : "border-control"
          }`}
        >
          {checked && "✓"}
        </span>
      )}
      <span className="text-[15px] leading-[1.5] text-ink">{label}</span>
    </label>
  );
}

type ChoiceGroupProps = {
  legend: string;
  hint?: string;
  children: React.ReactNode;
};

/** Fieldset wrapper for "Contact method", "Help topics" and "Who is reaching out". */
export function ChoiceGroup({ legend, hint, children }: ChoiceGroupProps) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="mb-2 text-sm leading-[1.5] font-medium text-ink">{legend}</legend>
      {hint && <p className="text-[13px] leading-[1.5] text-muted">{hint}</p>}
      {children}
    </fieldset>
  );
}
