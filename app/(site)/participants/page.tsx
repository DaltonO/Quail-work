import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ParticipantsHero } from "@/components/participants/ParticipantsHero";
import {
  ParticipantInvitation,
  ParticipantProcess,
  PracticalSupport,
  StartingPoints,
  WorkGuides,
  YourSay,
} from "@/components/participants/ParticipantSections";
import { FaqSection } from "@/components/sections/FaqSection";
import { ArrowLink } from "@/components/ui/ArrowLink";

export const metadata: Metadata = { title: "For Participants" };

const faqs = [
  {
    question: "Do I need to know what job I want?",
    answer: "No. You can begin by talking about your interests, questions, or what you are unsure about.",
  },
  {
    question: "Can someone help me contact Quail?",
    answer:
      "Yes. You can ask a family member or someone you trust to help. Your interests and preferences should remain central.",
  },
  {
    question: "Do I need a referral before contacting you?",
    answer:
      "You can contact Quail to ask about the process. Receiving a service may require a referral, planning, or approval. We explain the relevant next steps.",
  },
  {
    question: "Who would provide my support?",
    answer:
      "Support may be provided by an approved partner or Quail Job Coaching where available and authorized. We explain the proposed arrangement before you decide.",
  },
  {
    question: "Will I get paid?",
    answer:
      "The pay and conditions of a work opportunity should be explained before you accept it. Contacting Quail does not guarantee a job or a paid placement.",
  },
  {
    question: "What if I have questions about work and my benefits?",
    answer:
      "Tell us you have a benefits question so the appropriate next step can be discussed. Do not assume your benefits will stay the same.",
  },
];

// Figma: "Quail — For Participants — Desktop" (node 1:16635). FAQ rows are static (no toggles) in the design.
export default function ParticipantsPage() {
  return (
    <>
      <main>
        <ParticipantsHero />
        <StartingPoints />
        <PracticalSupport />
        <ParticipantProcess />
        <YourSay />
        <WorkGuides />
        <FaqSection
          bg="bg-sage"
          py={88}
          mobilePy={64}
          mobileInnerGap={24}
          eyebrowTone="teal"
          description="A few useful answers before we talk."
          descriptionSize={15}
        >
          <dl className="flex flex-col">
            {faqs.map((faq) => (
              <div key={faq.question} className="flex flex-col gap-3 rule-t rule-rule-2 py-[22px]">
                <dt className="text-[17px] leading-[1.5] font-medium text-ink lg:text-lg">{faq.question}</dt>
                <dd className="text-[15px] leading-[1.6] text-muted">{faq.answer}</dd>
              </div>
            ))}
            <div className="rule-t rule-rule-2 pt-[22px]">
              <ArrowLink href="/talk-with-quail" layout="inline" tone="teal" gap={10} className="text-base!">
                Have another question? Talk with Quail.
              </ArrowLink>
            </div>
          </dl>
        </FaqSection>
        <ParticipantInvitation />
      </main>
      <SiteFooter />
    </>
  );
}
