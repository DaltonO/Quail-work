// Building blocks for the 390px mobile frames: 24px gutters, 64px section padding.

type MobileSectionProps = {
  bg?: string;
  gap?: 24 | 28 | 32 | 36 | 40;
  className?: string;
  children: React.ReactNode;
};

const gaps = { 24: "gap-6", 28: "gap-7", 32: "gap-8", 36: "gap-9", 40: "gap-10" };

export function MobileSection({ bg = "", gap = 40, className = "", children }: MobileSectionProps) {
  return <section className={`flex flex-col px-6 py-16 ${gaps[gap]} ${bg} ${className}`}>{children}</section>;
}

type MobileIntroProps = {
  eyebrow: string;
  heading: React.ReactNode;
  description?: React.ReactNode;
  /** Eyebrow line-height: "auto" (16px, home) or "relaxed" (150%, audience pages). */
  eyebrowLeading?: "auto" | "relaxed";
  eyebrowTone?: "brand" | "teal";
  /** Description size: 15 or 16 or 17 (all 150%). */
  descriptionSize?: 15 | 16 | 17;
  descriptionLeading?: "1.5" | "1.6";
  tone?: "default" | "inverse";
};

/** "Section introduction" — eyebrow, Medium 30/116 −0.9% heading, muted description, 16 gap. */
export function MobileIntro({
  eyebrow,
  heading,
  description,
  eyebrowLeading = "auto",
  eyebrowTone = "brand",
  descriptionSize = 15,
  descriptionLeading = "1.5",
  tone = "default",
}: MobileIntroProps) {
  const sizes = { 15: "text-[15px]", 16: "text-base", 17: "text-[17px]" };
  return (
    <div className="flex flex-col gap-4">
      <p
        className={`t-eyebrow ${eyebrowLeading === "auto" ? "leading-4!" : ""} ${
          eyebrowTone === "teal" ? "text-teal" : "text-brand"
        }`}
      >
        {eyebrow}
      </p>
      <h2 className={`t-h2 ${tone === "inverse" ? "text-white" : "text-ink"}`}>{heading}</h2>
      {description && (
        <p
          className={`${sizes[descriptionSize]} ${descriptionLeading === "1.6" ? "leading-[1.6]" : "leading-[1.5]"} ${
            tone === "inverse" ? "text-mist" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
