import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PartnersHero } from "@/components/partners/PartnersHero";
import {
  CollaborationProcess,
  CoordinationPreview,
  PartnerInvitation,
  ResponsibilitiesAndChoice,
  TwoPathways,
  WhatBecomesEasier,
} from "@/components/partners/PartnerSections";
import { FaqSection } from "@/components/sections/FaqSection";
import { Accordion } from "@/components/ui/Accordion";

export const metadata: Metadata = { title: "For Partners" };

const faqs = [
  {
    question: "Can we bring our existing employer relationships?",
    answer:
      "Yes. Discuss how existing relationships could fit. Employer-contact roles and responsibilities are agreed individually.",
  },
  {
    question: "Does Quail replace our support or coaching team?",
    answer:
      "Not automatically. Participant choice remains central. Support may come from an approved partner or proposed Quail Job Coaching where available, authorized and selected. Not all Quail services are required.",
  },
  {
    question: "How are placement responsibilities agreed?",
    answer:
      "Through an individual discussion before a placement: employer contact, participant support, required information and follow-up. Required authorizations are verified separately.",
  },
  {
    question: "Can participants approach Quail directly?",
    answer:
      "Yes. Participants can inquire about their goals and options. An inquiry does not guarantee eligibility, a service, a start or a placement. Participant choice remains central.",
  },
  {
    question: "How do Regional Centers and service coordinators make an inquiry?",
    answer:
      "Use “Discuss a referral” for questions about scope, availability, referral requirements and the right contact. This is a distinct referral path, not a coaching-delivery role.",
  },
  {
    question: "What information should we share initially?",
    answer:
      "Share your organization, contact details, geographic area and general need. Please do not share participant names, diagnoses or confidential records.",
  },
  {
    question: "How are incentive or billing questions handled?",
    answer:
      "Discuss the applicable confirmed arrangement. There is no automatic incentive allocation; requirements, funding and terms must be confirmed. No rates or funding are promised here.",
  },
  {
    question: "What does an initial partnership conversation involve?",
    answer:
      "The opportunity, process or service need; relevant roles; availability; open questions; and possible next steps. No exclusivity or requirement to use all Quail services.",
  },
];

// Figma: "Quail — For Partners — Desktop" (node 1:15686). The frame shows every FAQ row expanded.
export default function PartnersPage() {
  return (
    <>
      <main>
        <PartnersHero />
        <TwoPathways />
        <WhatBecomesEasier />
        <CollaborationProcess />
        <ResponsibilitiesAndChoice />
        <CoordinationPreview />
        <FaqSection mobileGap={36} description="Start with the opportunity. Clarify the arrangement together.">
          <Accordion
            items={faqs}
            questionSize={17}
            rowPadding={24}
            iconSize={18}
          />
        </FaqSection>
        <PartnerInvitation />
      </main>
      <SiteFooter rowHeight={40} />
    </>
  );
}
