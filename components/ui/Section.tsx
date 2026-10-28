type SectionProps = {
  id?: string;
  /** Tailwind background class, e.g. "bg-white", "bg-sage". Omit for the page cream. */
  bg?: string;
  /** Desktop vertical padding in px — 64 (home), 72 (employers/partners), 88 (participants). */
  py?: 64 | 72 | 88;
  /** Mobile (390 frame) vertical padding in px — 56 (employers/partners) or 64 (home/participants). */
  mobilePy?: 56 | 64;
  /** Desktop gap between the section's direct children. */
  gap?: 24 | 32 | 36 | 40 | 64;
  /** Mobile gap between the section's direct children (32 in the audience-page mobile frames). */
  mobileGap?: 24 | 28 | 32 | 36 | 40;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
};

const pyClass = { 64: "lg:py-16", 72: "lg:py-[72px]", 88: "lg:py-[88px]" };
const mobilePyClass = { 56: "py-14", 64: "py-16" };
const gapClass = { 24: "lg:gap-6", 32: "lg:gap-8", 36: "lg:gap-9", 40: "lg:gap-10", 64: "lg:gap-16" };
const mobileGapClass = { 24: "gap-6", 28: "gap-7", 32: "gap-8", 36: "gap-9", 40: "gap-10" };

/** Full-bleed band with the 1440 frame's 80px gutters (24px on mobile) and a 1280px content column. */
export function Section({
  id,
  bg = "",
  py = 64,
  mobilePy = 64,
  gap = 36,
  mobileGap = 32,
  className = "",
  innerClassName = "",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`px-6 lg:px-20 ${mobilePyClass[mobilePy]} ${pyClass[py]} ${bg} ${className}`}>
      <div className={`mx-auto flex max-w-page flex-col ${mobileGapClass[mobileGap]} ${gapClass[gap]} ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
