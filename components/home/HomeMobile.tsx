import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CircleCheck,
  ClipboardList,
  ContactRound,
  Handshake,
  ListChecks,
  MessagesSquare,
  RefreshCw,
  UserRound,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { IconTile } from "@/components/ui/IconTile";
import { MobileIntro, MobileSection } from "@/components/ui/MobileSection";
import { StatusPill } from "@/components/ui/StatusPill";

// Mobile sections of "Quail Employment — Post-Hero Refinement — Mobile" (1:15293), copy verbatim.

export function HeroMobile() {
  return (
    <section className="flex flex-col gap-9 px-6 pt-12 pb-14">
      <div className="flex flex-col gap-6">
        <p className="t-eyebrow leading-4! text-brand">Employment, with people at the center</p>
        <h1 className="t-h1 text-ink">
          {/* Line breaks as set in the 390 frame. */}
          Meaningful work.
          <br />
          The right
          <br />
          support. A<br />
          clearer path
          <br />
          forward.
        </h1>
        <p className="text-[17px] leading-7 text-muted">
          Quail brings participants, employers, and service partners together to develop work opportunities and
          coordinate individualized employment support.
        </p>
        <div className="flex flex-col gap-3">
          <ButtonLink href="/inquiry/employer" className="w-full">
            Discuss a Work Opportunity
          </ButtonLink>
          <ButtonLink href="/participants" variant="secondary" className="w-full">
            Explore Employment Support
          </ButtonLink>
        </div>
        <ArrowLink href="/partners">For Providers &amp; Referral Partners</ArrowLink>
      </div>

      <div
        role="img"
        aria-label="Illustrative example of a Quail Employment placement pathway"
        className="flex flex-col gap-3.5 rounded-[28px] bg-sage p-4"
      >
        <div className="overflow-hidden rounded-[20px] border border-line bg-white shadow-panel-soft">
          <div className="flex flex-col gap-2.5 bg-ink p-5">
            <div className="flex items-center gap-2 text-mist">
              <Icon icon={ClipboardList} size={16} />
              <span className="text-xs leading-[15px] font-semibold tracking-[0.005em]">Placement readiness</span>
            </div>
            <p className="text-[21px] leading-[1.25] font-medium text-white">A path shaped together.</p>
            <p className="text-[13px] leading-[1.5] text-mist">Illustrative example · Sample café opportunity</p>
          </div>
          <div className="flex flex-col gap-3.5 px-5 pt-4 pb-5">
            <p className="text-[13px] leading-[1.5] text-muted">Interests, workplace duties and a shared next step.</p>
            <ul>
              {["Interests discussed", "Workplace duties outlined"].map((item) => (
                <li key={item} className="flex items-center gap-2.5 py-2.5 rule-b">
                  <Icon icon={CircleCheck} size={18} className="text-brand" />
                  <span className="text-sm leading-[1.5] text-ink">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 rounded-xl bg-blush p-3.5">
              <span className="flex items-center gap-2 text-rust">
                <Icon icon={ArrowRight} size={14} />
                <span className="text-xs leading-[15px] font-semibold tracking-[0.003em]">SUGGESTED NEXT STEP</span>
              </span>
              <p className="text-[15px] leading-[1.4] font-medium text-ink">Discuss a schedule and support needs.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-[18px]">
            <span className="text-[11px] leading-[13px] font-semibold tracking-[0.005em] text-brand">
              EMPLOYER OPPORTUNITY · ILLUSTRATIVE
            </span>
            <span className="text-lg leading-[1.25] font-medium tracking-[-0.004em] text-ink">A role worth exploring.</span>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["Workplace", "Sample neighborhood café"],
                ["Duties", "Prepare supplies · Counter"],
              ].map(([label, value]) => (
                <span key={label} className="flex flex-col gap-[3px]">
                  <span className="text-[11px] leading-[13px] font-semibold text-muted">{label}</span>
                  <span className="text-[13px] leading-[1.4] text-ink">{value}</span>
                </span>
              ))}
            </div>
            <span className="rounded-lg bg-sand px-2.5 py-2 text-xs leading-[1.4] whitespace-nowrap text-ink">
              Schedule and support to discuss together
            </span>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl bg-ink p-[18px]">
            <span className="text-[11px] leading-[13px] font-semibold tracking-[0.005em] text-mist">YOUR NEXT STEP</span>
            <span className="text-lg leading-[1.25] font-medium text-white">Start with what matters to you.</span>
            <span className="text-[13px] leading-[1.5] text-mist">
              Share your interests, questions and the support that could help at work.
            </span>
            <span className="flex items-center justify-between gap-3 pt-3 text-white rule-t rule-white">
              <span className="text-[13px] leading-[1.5] font-semibold">Prepare for a conversation</span>
              <Icon icon={ArrowRight} size={16} />
            </span>
          </div>
        </div>
      </div>

      <p className="text-center text-xs leading-[1.5] text-muted">
        Illustrative concepts · Fictional sample data only · Not an open job listing
      </p>
    </section>
  );
}

const audiences: { title: string; body: string; route: string; href: string; icon: LucideIcon; tile: string }[] = [
  {
    title: "Employers",
    body: "Have work that needs doing? Start a conversation about real duties, your workplace and a possible supported placement.",
    route: "Discuss an opportunity",
    href: "/employers",
    icon: BriefcaseBusiness,
    tile: "bg-sage",
  },
  {
    title: "Participants & Families",
    body: "Explore employment around your interests, strengths and support needs. You do not need to have every answer to begin.",
    route: "Explore employment support",
    href: "/participants",
    icon: UserRound,
    tile: "bg-sand",
  },
  {
    title: "Providers & Referral Partners",
    body: "Connect around an individual's employment goals and clarify who will do what.",
    route: "Discuss a referral or collaboration",
    href: "/partners",
    icon: MessagesSquare,
    tile: "bg-sage",
  },
];

export function AudiencePathwaysMobile() {
  return (
    <MobileSection bg="bg-white">
      <MobileIntro
        eyebrow="Find your starting point"
        heading="Different roles. A shared way forward."
        description="Choose the conversation that fits you."
        descriptionSize={17}
      />
      <div className="flex flex-col gap-4">
        {audiences.map((audience) => (
          <article key={audience.title} className="flex flex-col gap-[18px] rounded-[20px] border border-line bg-cream p-6">
            <div className="flex items-center gap-3.5">
              <IconTile icon={audience.icon} size={44} iconSize={22} radius={12} bg={audience.tile} />
              <h3 className="text-[21px] leading-[25px] font-medium text-ink">{audience.title}</h3>
            </div>
            <p className="text-[15px] leading-[1.5] text-muted">{audience.body}</p>
            <div className="pt-4 rule-t">
              <ArrowLink href={audience.href}>{audience.route}</ArrowLink>
            </div>
          </article>
        ))}
      </div>
    </MobileSection>
  );
}

const stages = [
  {
    title: "Explore",
    body: "Talk about interests, strengths, workplace needs and what meaningful work could look like for you.",
  },
  {
    title: "Connect",
    body: "Bring the participant, employer and relevant service or referral partners into the conversation.",
  },
  { title: "Prepare", body: "Clarify duties, schedules, workplace contacts and the approvals that need to be in place." },
  { title: "Support", body: "Coordinate individualized workplace support with the selected, approved service provider." },
  {
    title: "Keep moving toward what's next.",
    body: "Review progress, what is working and the next step with the people involved. The path continues as your goals do.",
  },
];

export function HowItWorksMobile() {
  return (
    <MobileSection bg="bg-sage">
      <MobileIntro
        eyebrow="How It Works"
        heading="A path shaped around the person."
        description="Start with what matters to you—your interests, goals and the support that could help. A useful starting point, not a one-size-fits-all sequence."
      />
      <ol className="flex flex-col">
        {stages.map((stage, index) => {
          const last = index === stages.length - 1;
          return (
            <li key={stage.title} className="flex flex-col gap-2.5">
              <div className="flex items-center gap-3">
                <span className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-cream text-[13px] leading-4 font-semibold text-brand">
                  {index + 1}
                </span>
                <span aria-hidden className="h-px flex-1 bg-rule" />
                {!last && <Icon icon={ArrowDown} size={16} stroke={1.5} className="text-brand" />}
              </div>
              <div className={`flex flex-col gap-2 pt-3.5 ${last ? "" : "pb-[22px]"}`}>
                <h3 className="text-[21px] leading-[25px] font-medium tracking-[-0.004em] text-ink">{stage.title}</h3>
                <p className="text-[15px] leading-[1.5] text-muted">{stage.body}</p>
              </div>
            </li>
          );
        })}
      </ol>
      <p className="pt-5 text-[13px] leading-[1.6] tracking-[-0.1px] text-muted rule-t rule-rule">
        The process is individualized. Service delivery depends on applicable approvals, participant selection and
        availability. A conversation does not guarantee a placement, permanent employment or automatic continuation.
      </p>
    </MobileSection>
  );
}

const topics: { title: string; body: string; icon: LucideIcon }[] = [
  { title: "Real duties", body: "Everyday tasks, expectations and the work environment.", icon: ClipboardList },
  {
    title: "A workable schedule",
    body: "Days, hours, routines and any flexibility before a placement is considered.",
    icon: CalendarDays,
  },
  {
    title: "Workplace contacts & supervision",
    body: "Employers provide ordinary supervision. Identify who explains the work, answers questions and stays connected with the support team.",
    icon: ContactRound,
  },
];

export function EmployerOpportunitiesMobile() {
  return (
    <MobileSection gap={36}>
      <div className="flex flex-col gap-6">
        <MobileIntro
          eyebrow="For Employers"
          heading="Start with the work. Build understanding together."
          description="Explore actual duties, workplace expectations and relevant preparation. Part-time, full-time and internship opportunities may be considered. Not every role qualifies for funded support; eligibility and funding must be confirmed where applicable."
        />
        <ButtonLink href="/inquiry/employer" height={52} className="w-full">
          Discuss a Work Opportunity
        </ButtonLink>
        <p className="text-[13px] leading-[1.5] text-muted">
          A relationship-led conversation, not an open job board or a promise of staffing.
        </p>
      </div>
      <div className="flex flex-col gap-4 rounded-3xl bg-sand p-5">
        <p className="text-xs leading-[15px] font-semibold tracking-[0.005em] text-brand">WHAT WE CLARIFY TOGETHER</p>
        {topics.map((topic) => (
          <div key={topic.title} className="flex gap-3.5 rounded-[14px] border border-line bg-cream p-[18px]">
            <Icon icon={topic.icon} size={20} className="text-brand" />
            <div className="flex flex-col gap-1.5">
              <h3 className="text-base leading-[19px] font-medium text-ink">{topic.title}</h3>
              <p className="text-[13px] leading-[1.5] tracking-[-0.1px] text-muted">{topic.body}</p>
            </div>
          </div>
        ))}
      </div>
    </MobileSection>
  );
}

export function JobCoachingMobile() {
  return (
    <MobileSection bg="bg-white">
      <div className="flex flex-col gap-6">
        <MobileIntro
          eyebrow="Quail Job Coaching · Proposed direct service"
          heading="Practical support for the everyday moments at work."
          description="Additional help with workplace tasks, communication and routines—where approved, available and selected. Employers remain responsible for ordinary supervision."
        />
        <div className="flex flex-col gap-3.5 rounded-2xl border border-line bg-blush p-5">
          <h3 className="text-base leading-[19px] font-medium text-ink">Before service begins</h3>
          <p className="text-[13px] leading-[1.5] text-muted">
            Approval, service area, timing and availability must be confirmed before relying on this proposed
            service. Not a requirement for working with Quail.
          </p>
          <span className="inline-flex h-10 w-fit items-center rounded-[10px] border border-line px-6 text-[13px] leading-6 font-semibold text-[#806020]">
            Confirm availability
          </span>
        </div>
        <ButtonLink href="/participants" height={52} className="w-full">
          Explore Employment Support
        </ButtonLink>
      </div>
      <div className="flex flex-col gap-4">
        <article className="flex flex-col gap-3.5 rounded-[20px] border border-line bg-cream p-5">
          <div className="flex items-center gap-2.5">
            <Icon icon={ListChecks} size={20} className="text-brand" />
            <h3 className="text-lg leading-[22px] font-medium text-ink">Learning the work</h3>
          </div>
          <p className="text-sm leading-[1.5] text-muted">
            Break down tasks, practice workplace routines and build the confidence to ask questions when something
            is unclear.
          </p>
          <div className="flex flex-col gap-2 rounded-[10px] bg-sage p-3.5">
            <span className="text-xs leading-[15px] font-semibold tracking-[0.003em] text-brand">
              SAMPLE TASK · FICTIONAL
            </span>
            <span className="text-sm leading-[1.4] font-medium text-ink">Organize the supply counter step by step</span>
          </div>
        </article>
        {[
          {
            title: "Finding a rhythm",
            body: "Practice communication, build useful routines and work through challenges with the people involved.",
            icon: MessagesSquare,
          },
          {
            title: "Reviewing together",
            body: "Check in on what is working and revisit the support plan as the work and the person's needs change.",
            icon: RefreshCw,
          },
        ].map((theme) => (
          <article key={theme.title} className="flex flex-col gap-2.5 rounded-[20px] border border-line bg-cream p-5">
            <Icon icon={theme.icon} size={22} className="text-brand" />
            <h3 className="text-lg leading-[22px] font-medium text-ink">{theme.title}</h3>
            <p className="text-sm leading-[1.5] text-muted">{theme.body}</p>
          </article>
        ))}
      </div>
    </MobileSection>
  );
}

export function PartnerCollaborationMobile() {
  const roles = [
    {
      title: "Employment & support providers",
      body: "Discuss collaboration, capacity, support responsibilities and follow-up with the participant and employer. Delivery depends on approvals and participant choice.",
      route: "Explore provider collaboration",
      href: "/partners",
      icon: Handshake,
      card: "bg-white",
    },
    {
      title: "Regional Centers & service coordinators",
      body: "Confirm scope, availability, referral requirements and the right contact. Referral does not itself constitute service delivery or approval.",
      route: "Discuss a referral",
      href: "/inquiry/referral",
      icon: MessagesSquare,
      card: "bg-cream",
    },
  ];
  return (
    <MobileSection bg="bg-sage">
      <MobileIntro
        eyebrow="For Providers & Referral Partners"
        heading={
          <>
            Connected support.
            <br />
            Distinct
            <br />
            responsibilities.
          </>
        }
        description="The right arrangement begins with the participant and the applicable service requirements. Individualized support is never automatically assigned."
      />
      <div className="flex flex-col gap-4">
        {roles.map((role) => (
          <article key={role.title} className={`flex flex-col gap-4 rounded-[20px] border border-line p-6 ${role.card}`}>
            <div className="flex items-center gap-3">
              <Icon icon={role.icon} size={24} className="text-brand" />
              <h3 className="text-xl leading-[1.3] font-medium text-ink">{role.title}</h3>
            </div>
            <p className="text-sm leading-[1.5] text-muted">{role.body}</p>
            <ArrowLink href={role.href}>{role.route}</ArrowLink>
          </article>
        ))}
      </div>
      <div className="flex gap-3.5 rounded-[14px] border border-line bg-cream p-5">
        <Icon icon={UsersRound} size={20} className="text-brand" />
        <p className="text-sm leading-[1.6] text-ink">
          Quail Job Coaching is not mandatory. Provider selection, service delivery and any required approvals remain
          separate decisions.
        </p>
      </div>
    </MobileSection>
  );
}

const concepts: { title: string; body: string; icon: LucideIcon; tile: string }[] = [
  {
    title: "Your goals & choices",
    body: "Interests, support preferences and the decisions that belong to you.",
    icon: UserRound,
    tile: "bg-sand",
  },
  {
    title: "Work & preparation",
    body: "Duties, schedule, workplace contacts and what needs to be in place.",
    icon: BriefcaseBusiness,
    tile: "bg-sage",
  },
  {
    title: "Selected support",
    body: "The approved provider and their responsibilities—chosen, not assigned automatically.",
    icon: Handshake,
    tile: "bg-sand",
  },
  {
    title: "Progress & next steps",
    body: "Review what is working and identify the next conversation with the people involved.",
    icon: RefreshCw,
    tile: "bg-sage",
  },
];

export function ConnectedWorkspaceMobile() {
  return (
    <MobileSection bg="bg-white">
      <MobileIntro
        eyebrow="An illustrative look at coordination"
        heading="Keep your goals and support connected."
        description="A focused concept—supporting people's decisions, not making them. The right context for the next conversation."
      />
      <div className="flex flex-col">
        <div className="flex flex-col gap-4 rounded-3xl bg-ink p-6 shadow-hub">
          <div className="flex items-center gap-2.5">
            <Image src="/brand/quail-mark-white.png" alt="" width={24} height={24} className="rounded" />
            <span className="text-lg leading-[22px] font-medium text-white">Quail Employment Workspace</span>
          </div>
          <p className="text-sm leading-[1.5] text-mist">
            Shared context for the next conversation. Each person sees what is appropriate to their role.
          </p>
          <div className="pt-3 rule-t rule-white">
            <span className="inline-flex h-[26px] items-center gap-1.5 rounded-full border border-line bg-white px-2.5 text-xs leading-[1.2] font-medium text-ink">
              <Icon icon={MessagesSquare} size={12} stroke={1.7} />
              Shared context · Illustrative concept
            </span>
          </div>
        </div>
        {concepts.map((concept) => (
          <div key={concept.title} className="flex flex-col items-center">
            <span aria-hidden className="h-5 w-0.5 bg-rule" />
            <div className="flex w-full flex-col gap-2 rounded-2xl border border-line bg-white p-[18px] shadow-[0_4px_12px_0_rgb(32_60_75/0.03)]">
              <div className="flex items-center gap-2.5">
                <IconTile icon={concept.icon} size={32} iconSize={17} radius={9} bg={concept.tile} stroke={1.7} />
                <span className="text-[15px] leading-[18px] font-medium text-ink">{concept.title}</span>
              </div>
              <p className="text-[13px] leading-[1.5] text-muted">{concept.body}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="pt-5 text-[13px] leading-[1.5] tracking-[-0.1px] text-muted rule-t">
        Illustrative concept only. Services, availability and approvals not established. Connection does not grant
        access to all information.
      </p>
    </MobileSection>
  );
}

export function AvailabilityMobile() {
  return (
    <MobileSection bg="bg-sand" gap={36}>
      <MobileIntro
        eyebrow="Availability & Common Questions"
        heading="Clear about what's still being confirmed."
        description="Service area, funding arrangements, referral steps and current availability are not yet confirmed. Use the relevant audience route to begin a conversation rather than assuming coverage or a start date."
      />
      <div className="flex flex-col gap-4 rounded-[20px] border border-line bg-cream p-6">
        <StatusPill>To be confirmed</StatusPill>
        <h3 className="text-xl leading-[1.3] font-medium text-ink">
          No service area, approval or availability is being represented here.
        </h3>
        <p className="text-sm leading-[1.5] text-muted">
          Where services will be available, how referrals and funding will work, and what is currently possible—all
          to be confirmed. Start with a conversation.
        </p>
        <ArrowLink href="/talk-with-quail">Contact</ArrowLink>
      </div>
    </MobileSection>
  );
}

export function FinalInvitationMobile() {
  const routes = [
    {
      title: "For Employers",
      body: "Talk about real work and a possible opportunity.",
      route: "Discuss a Work Opportunity",
      href: "/inquiry/employer",
    },
    {
      title: "For Participants",
      body: "Start with your interests and support needs.",
      route: "Explore Employment Support",
      href: "/participants",
    },
    {
      title: "For Partners",
      body: "Clarify referrals, service delivery and collaboration.",
      route: "For Providers & Referral Partners",
      href: "/partners",
    },
  ];
  return (
    <MobileSection bg="bg-ink">
      <div className="flex flex-col gap-5">
        <h2 className="text-[34px] leading-[1.15] font-medium tracking-[-0.01em] text-white">
          A clearer path starts with a conversation.
        </h2>
        <p className="text-[17px] leading-7 text-mist">
          Bring your goals, your questions or a work opportunity. Choose the right starting point for you.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        {routes.map((route) => (
          <div key={route.title} className="flex flex-col gap-5 rounded-[20px] border border-white/19 p-6">
            <h3 className="text-[23px] leading-7 font-medium text-white">{route.title}</h3>
            <p className="text-[13.3px] leading-5 text-mist">{route.body}</p>
            <ArrowLink href={route.href} tone="white">
              {route.route}
            </ArrowLink>
          </div>
        ))}
      </div>
    </MobileSection>
  );
}
