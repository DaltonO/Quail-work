import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";

type FaqSectionProps = {
  bg?: string;
  py?: 72 | 88;
  mobilePy?: 56 | 64;
  mobileGap?: 32 | 36;
  /** Gap between the introduction and the answers in the 390 frame: 32, or 24 on participants. */
  mobileInnerGap?: 24 | 32;
  eyebrowTone?: "brand" | "teal";
  description: string;
  descriptionSize?: 15 | 13.3;
  children: React.ReactNode;
};

/** Two-column FAQ: 360px introduction, 80px gap, 840px answers. */
export function FaqSection({
  bg = "bg-white",
  py = 72,
  mobilePy = 56,
  mobileGap = 32,
  mobileInnerGap = 32,
  eyebrowTone = "brand",
  description,
  descriptionSize = 13.3,
  children,
}: FaqSectionProps) {
  return (
    <Section id="faq" bg={bg} py={py} mobilePy={mobilePy} mobileGap={mobileGap}>
      <div className={`flex flex-col lg:flex-row lg:gap-20 ${mobileInnerGap === 24 ? "gap-6" : "gap-8"}`}>
        <SectionIntro
          className="lg:w-[calc(360/1280*100%)] lg:shrink-0"
          eyebrow="Common questions"
          eyebrowTone={eyebrowTone}
          heading="A little clarity before we talk."
          description={description}
          descriptionSize={descriptionSize}
          descriptionLeading={descriptionSize === 15 ? "1.6" : "20"}
        />
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </Section>
  );
}
