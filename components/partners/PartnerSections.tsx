import { Check, ClipboardList, Handshake, ListChecks, MessagesSquare } from "lucide-react";
import { BenefitColumns } from "@/components/sections/BenefitColumns";
import { DotProcess } from "@/components/sections/DotProcess";
import { ProposedServiceStatus } from "@/components/sections/ProposedServiceStatus";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { IconTile } from "@/components/ui/IconTile";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { StatusPill } from "@/components/ui/StatusPill";

const pathways = [
  {
    id: "provider-partnership",
    title: "Employment & Support Providers",
    body: "For day programs, supported-employment agencies, and organizations helping people pursue meaningful work.",
    interests: [
      "Explore employer opportunities.",
      "Coordinate existing placements.",
      "Clarify support capacity and responsibilities.",
      "Reduce repeated requests and fragmented follow-up.",
    ],
    action: "Discuss a provider partnership",
    href: "/inquiry/provider-partnership",
    icon: Handshake,
    tile: "bg-sage",
  },
  {
    id: "regional-centers",
    title: "Regional Centers & Referral Professionals",
    body: "Find clear information about Quail’s scope, availability, referral requirements, and the appropriate next conversation.",
    interests: [
      "Understand confirmed services and service area.",
      "Ask about availability.",
      "Clarify referral information.",
      "Reach an accountable contact.",
    ],
    action: "Discuss a referral",
    href: "/inquiry/referral",
    icon: MessagesSquare,
    tile: "bg-sand",
  },
];

export function TwoPathways() {
  return (
    <Section bg="bg-white" py={72} mobilePy={56} mobileGap={36}>
      <SectionIntro eyebrow="Choose your starting point" heading="Two distinct roles. A useful next conversation." />
      <div className="grid gap-6 lg:grid-cols-2">
        {pathways.map((pathway) => (
          <article
            key={pathway.id}
            id={pathway.id}
            className="flex flex-col gap-6 rounded-[20px] border border-line bg-cream p-6 lg:p-8"
          >
            <IconTile icon={pathway.icon} size={48} iconSize={24} radius={14} bg={pathway.tile} stroke={1} />
            <div className="flex flex-col gap-3">
              <h3 className="text-[22px] leading-[1.3] font-medium tracking-[-0.005em] text-ink">{pathway.title}</h3>
              <p className="text-[17px] leading-7 text-muted">{pathway.body}</p>
            </div>
            <ul className="flex flex-col gap-3">
              {pathway.interests.map((interest) => (
                <li key={interest} className="flex gap-2.5">
                  <Icon icon={Check} size={17} stroke={1} className="mt-[3px] text-brand" />
                  <span className="text-[15px] leading-[1.5] text-ink">{interest}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto rule-t pt-5">
              <ButtonLink href={pathway.href} className="w-full sm:w-auto">
                {pathway.action}
              </ButtonLink>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function WhatBecomesEasier() {
  return (
    <Section py={72} mobilePy={56} mobileGap={36}>
      <SectionIntro
        eyebrow="What becomes easier"
        heading="Useful opportunities. Clearer handoffs."
        description="An intended service experience—not measured results."
        descriptionSize={13.3}
        descriptionLeading="20"
      />
      <BenefitColumns
        stroke={1}
        mobileGap={40}
        items={[
          {
            title: "Evaluate opportunities with better information",
            body: "Review actual tasks, schedules, supervision, and workplace details before moving the conversation forward.",
            icon: ClipboardList,
          },
          {
            title: "Know what is needed",
            body: "Keep required information, unresolved questions, and responsibilities visible instead of scattered across separate requests.",
            icon: ListChecks,
          },
          {
            title: "Keep follow-through organized",
            body: "See the next action, its owner, and what is being handled—without having to reconstruct the whole placement.",
            icon: MessagesSquare,
          },
        ]}
      />
    </Section>
  );
}

export function CollaborationProcess() {
  return (
    <Section id="how-it-works" bg="bg-sage" py={72} mobilePy={56} mobileGap={36}>
      <SectionIntro eyebrow="How collaboration works" heading="A practical process for working together." />
      <DotProcess
        titleMinHeight={55}
        mobileGap={32}
        stages={[
          {
            title: "1. Understand the need",
            body: "Discuss employment goals, relevant opportunities, the organization’s role, and the help being sought.",
          },
          {
            title: "2. Clarify the arrangement",
            body: "Identify who handles employer contact, participant support, required information, and follow-up.",
          },
          {
            title: "3. Prepare the next step",
            body: "Confirm the relevant requirements and readiness items before a placement proceeds.",
          },
          {
            title: "4. Review and adapt",
            body: "Discuss progress, resolve concerns, and plan transitions as needs or circumstances change.",
          },
        ]}
      />
      <p className="rule-t rule-rule pt-5 text-[13.3px] leading-5 text-muted">
        Requirements and authorizations are confirmed separately. A conversation does not guarantee a referral,
        service start or placement.
      </p>
    </Section>
  );
}

const roles = [
  "Participant: explores opportunities and contributes to decisions.",
  "Employer: provides work and workplace direction.",
  "Support provider: delivers its agreed, authorized services.",
  "Regional Center/service coordinator: supports relevant planning and authorization processes.",
  "Quail: performs its confirmed services and coordinates agreed administrative handoffs.",
];

export function ResponsibilitiesAndChoice() {
  return (
    <Section bg="bg-white" py={72} mobilePy={56} mobileGap={36}>
      <SectionIntro
        eyebrow="Responsibilities & participant choice"
        heading="Work together without taking over."
        description="Agree on responsibilities for each placement while keeping the participant’s goals and choices central."
        descriptionLeading="28"
      />
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-16">
        <ul className="flex flex-col lg:w-[calc(756/1280*100%)] lg:shrink-0">
          {roles.map((role) => (
            <li key={role} className="rule-t py-[18px] text-base leading-[1.6] text-ink">
              {role}
            </li>
          ))}
        </ul>
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex flex-col gap-4 rounded-[20px] bg-sage p-6 lg:p-7">
            <p className="text-[22px] leading-[1.3] font-medium tracking-[-0.005em] text-ink">
              Working with Quail does not require every service to come from Quail.
            </p>
            <p className="text-[17px] leading-7 text-muted">
              An employer introduction does not select a support provider. Participant choice and any required
              approvals remain separate decisions.
            </p>
          </div>
          <p className="text-[17px] leading-7 text-muted">
            Subject to the final approved arrangement, support may be delivered by an approved partner or proposed
            Quail Job Coaching only where available, authorized and selected by the participant.
          </p>
          <p className="text-[13.3px] leading-5 text-muted">
            Regional Centers and service coordinators support planning and authorization processes; they do not
            deliver job coaching or act as service-provider partners.
          </p>
        </div>
      </div>
      <ProposedServiceStatus
        notes={[
          "Approval, service area, timing and availability must be confirmed before relying on this proposed service.",
          "Service area, funding arrangements, referral requirements, approvals and current availability remain to be confirmed.",
          "Before publication: confirm service status, launch and availability details.",
        ]}
      />
    </Section>
  );
}

const statuses = [
  { label: "Participant interest:", status: "Confirmed", bg: "bg-sage" },
  { label: "Employer details:", status: "Confirmed", bg: "bg-sage" },
  { label: "Support arrangement:", status: "Awaiting confirmation", bg: "bg-sand" },
  { label: "Authorization:", status: "Awaiting verification", bg: "bg-sand" },
  { label: "Start status:", status: "Not cleared", bg: "bg-blush" },
];

export function CoordinationPreview() {
  return (
    <Section py={72} mobilePy={56} mobileGap={36}>
      <SectionIntro
        maxWidth={940}
        eyebrow="An illustrative look at coordination"
        heading="See what needs attention—and who is handling it."
        description="One opportunity, with the outstanding questions and the next responsible contact made clear."
        descriptionLeading="28"
      />
      <div className="rounded-[28px] bg-sage p-4 sm:p-8">
        <div className="overflow-hidden rounded-[20px] border border-line bg-white">
          <div className="flex items-center justify-between gap-3 bg-ink px-5 py-[18px] sm:px-7">
            <span className="text-sm leading-[17px] font-medium text-white">Quail Employment</span>
            <span className="text-xs leading-[15px] text-mist">Illustrative example</span>
          </div>
          <div className="flex flex-col gap-6 p-5 sm:p-7">
            <p className="text-[23px] leading-[1.3] font-medium tracking-[-0.006em] text-ink sm:text-[28px]">
              Office Support Opportunity
            </p>
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
              <ul className="flex flex-col lg:w-[calc(752/1280*100%)] lg:shrink-0">
                {statuses.map((row) => (
                  <li
                    key={row.label}
                    className="flex min-h-[53px] flex-col items-start gap-2 py-3 rule-t sm:flex-row sm:items-center sm:gap-4"
                  >
                    <span className="flex-1 text-sm leading-[1.5] text-ink">{row.label}</span>
                    <StatusPill kind="text" bg={row.bg}>
                      {row.status}
                    </StatusPill>
                  </li>
                ))}
              </ul>
              <div className="flex h-fit flex-1 flex-col gap-4 rounded-[14px] bg-cream p-5">
                <p className="text-base leading-[19px] font-semibold text-ink">Next actions</p>
                {[
                  "Provider: Confirm support contact",
                  "Quail: Follow up on outstanding information",
                  "Employer: No action at present",
                ].map((action) => (
                  <p key={action} className="text-sm leading-[1.6] text-ink">
                    {action}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[13.3px] leading-5 text-muted">
        Illustrative example of the intended experience only—not a live operational dashboard or an implemented
        capability. No actual participant records are shown. This does not represent a universal shared-data view,
        automatic approval or service availability.
      </p>
    </Section>
  );
}

export function PartnerInvitation() {
  return (
    <section className="bg-ink px-6 py-14 lg:px-20 lg:py-[72px]">
      <div className="mx-auto flex max-w-page flex-col gap-9">
        <div className="flex max-w-[880px] flex-col gap-5">
          <h2 className="t-h2 text-white">Let’s identify where working together would help.</h2>
          <p className="text-[17px] leading-7 text-mist">
            Start with the opportunity, process, or service question you are trying to address. We’ll discuss the
            relevant roles and next steps.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/inquiry/provider-partnership" variant="inverse" className="w-full sm:w-auto">
            Discuss a provider partnership
          </ButtonLink>
          <ButtonLink href="/inquiry/referral" variant="inverse-outline" className="w-full sm:w-auto">
            Discuss a referral
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
