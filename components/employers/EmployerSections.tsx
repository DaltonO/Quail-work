import { Check, ClipboardList, ListChecks, UsersRound } from "lucide-react";
import { BenefitColumns } from "@/components/sections/BenefitColumns";
import { DotProcess } from "@/components/sections/DotProcess";
import { ProposedServiceStatus } from "@/components/sections/ProposedServiceStatus";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function WhatQuailMakesEasier() {
  return (
    <Section bg="bg-white" py={72} mobilePy={56}>
      <SectionIntro
        maxWidth={920}
        eyebrow="What Quail makes easier"
        heading="Bring the work. We help organize the path."
        description="You do not need to arrive with a fully developed internship program. Start with the work your business needs done."
        descriptionLeading="28"
      />
      <BenefitColumns
        items={[
          {
            title: "Define the opportunity",
            body: "Clarify tasks, schedule, supervision, and what someone could learn.",
            icon: ClipboardList,
          },
          {
            title: "Coordinate the people",
            body: "Connect the employer, participant, and relevant support provider around clear responsibilities.",
            icon: UsersRound,
          },
          {
            title: "Keep next steps visible",
            body: "Understand what is complete, what is outstanding, and who acts next.",
            icon: ListChecks,
          },
        ]}
      />
    </Section>
  );
}

export function EmployerProcess() {
  return (
    <Section id="how-it-works" bg="bg-sage" py={72} mobilePy={56}>
      <SectionIntro
        maxWidth={920}
        eyebrow="How It Works"
        heading="A clear process, from first conversation to next steps."
      />
      <DotProcess
        titleMinHeight={81}
        stages={[
          {
            title: "1. Tell us about the work",
            body: "Share the tasks, location, schedule, and supervision your business can provide.",
          },
          {
            title: "2. Explore the opportunity together",
            body: "Discuss the opportunity with the participant and relevant support involvement, with room for questions and mutual choice.",
          },
          {
            title: "3. Prepare before the start",
            body: "Clarify responsibilities, support arrangements, and applicable requirements before confirming the start.",
          },
          {
            title: "4. Support and review",
            body: "Keep communication clear, address changes, and review how the experience is going and what could come next.",
          },
        ]}
      />
    </Section>
  );
}

const responsibilities = [
  {
    role: "Your workplace provides",
    items: ["Meaningful tasks.", "A dependable supervisor.", "Instructions and feedback.", "Timely hours approval where required."],
  },
  {
    role: "The agreed support arrangement provides",
    items: [
      "Help learning tasks, where arranged.",
      "Individualized workplace support.",
      "Help working through agreed support needs.",
      "A clear support contact and follow-up.",
    ],
  },
];

export function ResponsibilitiesAndSupport() {
  return (
    <Section bg="bg-white" py={72} mobilePy={56}>
      <SectionIntro eyebrow="Responsibilities and support" heading="Clear responsibilities. Practical support." />

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        {responsibilities.map((group) => (
          <div key={group.role} className="flex flex-col gap-5 rule-t pt-6">
            <h3 className="text-[22px] leading-[1.3] font-medium tracking-[-0.005em] text-ink lg:min-h-[58px]">
              {group.role}
            </h3>
            <ul className="flex flex-col gap-5">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Icon icon={Check} size={17} stroke={1.7} className="text-brand" />
                  <span className="text-[17px] leading-[1.5] text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-7 lg:flex-row lg:gap-16">
        <div className="flex flex-col gap-6 pt-3 lg:w-[calc(696/1280*100%)] lg:shrink-0">
          <p className="text-[17px] leading-7 text-muted">
            Quail helps clarify who is responsible before a placement starts. Coaching may be delivered by an
            approved partner or Quail Job Coaching where available and authorized.
          </p>
          <p className="text-[22px] leading-[1.3] font-medium tracking-[-0.005em] text-ink">
            Your supervisor directs the work. A job coach supports the participant in learning and succeeding in
            it.
          </p>
          <p className="text-[13.3px] leading-5 text-muted">
            Quail Job Coaching and other Quail services are not mandatory. Support is agreed individually; not every
            participant needs a job coach.
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-4 rounded-[20px] bg-sage p-5 sm:p-6">
          <div className="flex items-center gap-2.5">
            <Icon icon={ListChecks} size={20} stroke={1.5} className="text-brand" />
            <span className="text-xs leading-[15px] font-medium text-brand">Illustrative example</span>
          </div>
          <div className="flex flex-col gap-3.5 rounded-[14px] bg-white p-5">
            <p className="text-xl leading-[1.3] font-medium tracking-[-0.004em] text-ink">
              Learning the opening checklist
            </p>
            {[
              "Task: Prepare supplies for the morning shift",
              "Support: Review the steps with the identified coach",
              "Follow-up: Discuss what is working at the agreed review",
            ].map((detail) => (
              <p key={detail} className="text-sm leading-[1.5] text-muted">
                {detail}
              </p>
            ))}
          </div>
          <p className="text-[13.3px] leading-5 text-muted">
            Fictional proposed context: if coaching is arranged, a coach would be identified before the start. No
            participant, coach or plan is assigned here.
          </p>
        </div>
      </div>

      <ProposedServiceStatus
        notes={[
          "Approval, service area, timing and availability must be confirmed before relying on this proposed service.",
          "Before publication: confirm launch and availability details.",
        ]}
      />
    </Section>
  );
}

export function FundingAndNextSteps() {
  return (
    <Section py={72} mobilePy={56}>
      <SectionIntro
        maxWidth={900}
        eyebrow="Funding and what comes next"
        heading="Understand the arrangement before you commit."
      />
      <div className="grid gap-7 lg:grid-cols-2 lg:gap-16">
        {[
          {
            title: "During an authorized PIP placement",
            body: "Approved wages and related payroll costs may be program-funded. We explain the applicable arrangement, responsibilities, and any separately agreed charges before you commit.",
          },
          {
            title: "Planning the next step",
            body: "Before the placement ends, discuss the participant’s goals, your business’s needs, and whether ongoing employment is a suitable next step.",
          },
        ].map((item) => (
          <div key={item.title} className="flex flex-col gap-4">
            <h3 className="text-[22px] leading-[1.3] font-medium tracking-[-0.005em] text-ink">
              {item.title}
            </h3>
            <p className="text-[17px] leading-7 text-muted">{item.body}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3.5 rule-t rule-rule pt-6">
        <p className="text-[15px] leading-[1.6] font-medium text-ink">
          A part-time or full-time opening does not automatically qualify for PIP funding. Authorized hours, dates,
          support, and responsibilities are specific to the arrangement.
        </p>
        <p className="text-[13.3px] leading-5 text-muted">
          Service area, funding arrangements, referral requirements, approvals and current availability remain to be
          confirmed.
        </p>
      </div>
    </Section>
  );
}

export function EmployerInvitation() {
  return (
    <section className="bg-ink px-6 py-14 lg:px-20 lg:py-[72px]">
      <div className="mx-auto flex max-w-page flex-col items-start gap-6">
        <div className="flex max-w-[880px] flex-col gap-5">
          <h2 className="t-h2 text-white">
            {/* Mobile line breaks as set in the 390 frame. */}
            Let’s start with the <br className="lg:hidden" />
            work you have <br className="lg:hidden" />
            available.
          </h2>
          <p className="text-[17px] leading-7 text-mist">
            Tell us about your business and the tasks you have in mind. We’ll discuss the opportunity, the proposed
            process, and what would need to be clarified.
          </p>
        </div>
        <ButtonLink href="/inquiry/employer" variant="inverse" textSize={16} className="w-full sm:w-[300px]">
          Discuss a work opportunity
        </ButtonLink>
        <p className="text-[13.3px] leading-5 text-mist">
          No participant records or complete program application needed to start the conversation.
        </p>
      </div>
    </section>
  );
}
