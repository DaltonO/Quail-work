import { ArrowLink } from "@/components/ui/ArrowLink";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { StatusPill } from "@/components/ui/StatusPill";

// Figma: FAQ and availability (cream, 64/80 padding, 64 gap between columns).
export function Availability() {
  return (
    <Section>
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 lg:pb-[124px]">
        <SectionIntro
          className="lg:w-[calc(583/1280*100%)] lg:shrink-0"
          eyebrow="FAQ / Availability"
          eyebrowLeading="auto"
          heading="Clear about what’s still being confirmed."
          description="Service area, funding arrangements, referral requirements, approvals and current availability remain to be confirmed."
          descriptionSize={16}
        />
        <div className="flex h-fit flex-1 flex-col gap-3.5 rounded-[20px] border border-line bg-sage p-6">
          <StatusPill>To be confirmed</StatusPill>
          <h3 className="text-lg leading-[1.3] font-medium text-ink">Details to be confirmed</h3>
          <p className="text-sm leading-[1.5] text-muted">
            Start a conversation to confirm the relevant scope, requirements and contact. Don’t assume coverage or
            a start date.
          </p>
          <ArrowLink href="/talk-with-quail">Contact</ArrowLink>
        </div>
      </div>
    </Section>
  );
}
