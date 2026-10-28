type SectionIntroProps = {
  eyebrow?: string;
  heading: React.ReactNode;
  description?: React.ReactNode;
  /** Max width of the block on desktop, in px (Figma frame width). */
  maxWidth?: number;
  /** Eyebrow line-height: "auto" (16px, home page) or 1.5 (other pages). */
  eyebrowLeading?: "auto" | "relaxed";
  eyebrowTone?: "brand" | "teal";
  /** Description size: 17 (default), 16, 15 or 13.3. Applies at all widths unless mobileDescriptionSize is set. */
  descriptionSize?: 17 | 16 | 15 | 13.3;
  /** Override for the 390 mobile frame when it differs from desktop. */
  mobileDescriptionSize?: 17 | 16 | 15 | 13.3;
  /** Description line-height: 1.5 (default), 28px ("28") or 1.6 ("1.6"). */
  descriptionLeading?: "1.5" | "28" | "1.6" | "20";
  tone?: "default" | "inverse";
  headingAs?: "h2" | "h1";
  headingClassName?: string;
  className?: string;
};

const descSize = {
  17: "lg:text-[17px]",
  16: "lg:text-base",
  15: "lg:text-[15px]",
  13.3: "lg:text-[13.3px]",
};
const mobileDescSize = {
  17: "text-[17px]",
  16: "text-base",
  15: "text-[15px]",
  13.3: "text-[13.3px]",
};
const descLeading = {
  "1.5": "leading-[1.5]",
  "28": "leading-7",
  "1.6": "leading-[1.6]",
  "20": "leading-5",
};

export function SectionIntro({
  eyebrow,
  heading,
  description,
  maxWidth,
  eyebrowLeading = "relaxed",
  eyebrowTone = "brand",
  descriptionSize = 17,
  mobileDescriptionSize,
  descriptionLeading = "1.5",
  tone = "default",
  headingAs: Heading = "h2",
  headingClassName = "t-h2",
  className = "",
}: SectionIntroProps) {
  const inverse = tone === "inverse";
  return (
    <div className={`flex flex-col gap-4 ${className}`} style={maxWidth ? { maxWidth } : undefined}>
      {eyebrow && (
        <p
          className={`t-eyebrow ${eyebrowLeading === "auto" ? "!leading-4" : ""} ${
            eyebrowTone === "teal" ? "text-teal" : "text-brand"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Heading className={`${headingClassName} ${inverse ? "text-white" : "text-ink"}`}>
        {heading}
      </Heading>
      {description && (
        <p
          className={`${mobileDescSize[mobileDescriptionSize ?? descriptionSize]} ${descSize[descriptionSize]} ${descLeading[descriptionLeading]} ${
            inverse ? "text-mist" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
