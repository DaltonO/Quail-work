import {
  ArrowRight,
  Briefcase,
  CalendarCheck,
  ChartNoAxesColumn,
  Check,
  Info,
  ListChecks,
  MessagesSquare,
  RefreshCw,
  Search,
  type LucideIcon,
} from "lucide-react";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { IconTile } from "@/components/ui/IconTile";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";

const startingPoints: { title: string; body: string; icon: LucideIcon; tile: string }[] = [
  {
    title: "I want to work.",
    body: "Talk about your interests, work preferences, and possible opportunities.",
    icon: Briefcase,
    tile: "bg-sage",
  },
  {
    title: "I want help getting ready.",
    body: "Explore preparation and the support that may be useful.",
    icon: ListChecks,
    tile: "bg-sand",
  },
  {
    title: "I have a job and need help.",
    body: "Discuss what is happening and what an appropriate next step could be.",
    icon: MessagesSquare,
    tile: "bg-blush",
  },
];

export function StartingPoints() {
  return (
    <Section bg="bg-white" py={88} gap={40}>
      <SectionIntro
        maxWidth={900}
        eyebrow="Find your starting point"
        eyebrowTone="teal"
        heading="You do not need to have it all figured out."
        description="You may know the work you want to do, want to try something different, or need help deciding where to start."
      />
      <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
        {startingPoints.map((point) => (
          <article
            key={point.title}
            className="flex flex-col gap-[18px] rounded-[20px] border border-line-2 bg-cream p-6 lg:h-[280px] lg:gap-5 lg:p-7"
          >
            <IconTile icon={point.icon} size={48} iconSize={24} radius={14} bg={point.tile} />
            <div className="flex flex-col gap-2.5">
              <h3 className="text-[21px] leading-[1.25] font-medium tracking-[-0.005em] text-ink lg:text-[22px]">{point.title}</h3>
              <p className="text-[15px] leading-[1.6] text-muted">{point.body}</p>
            </div>
            <div className="rule-t rule-line-2 pt-3.5 lg:pt-4">
              <ArrowLink href="/talk-with-quail" tone="teal" iconSize={16} gap={10}>
                Talk with Quail
              </ArrowLink>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

const themes: { label: string; icon: LucideIcon }[] = [
  { label: "Explore work that interests you.", icon: Search },
  { label: "Prepare for an interview or first day.", icon: CalendarCheck },
  { label: "Learn workplace tasks and routines.", icon: ListChecks },
  { label: "Ask questions and communicate at work.", icon: MessagesSquare },
  { label: "Work through challenges.", icon: RefreshCw },
  { label: "Review what is going well and what you want next.", icon: ChartNoAxesColumn },
];

export function PracticalSupport() {
  return (
    <Section bg="bg-sage" py={88} gap={40}>
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
        <div className="flex flex-col gap-8 lg:w-[calc(780/1280*100%)] lg:shrink-0 lg:gap-6">
          <SectionIntro
            eyebrow="Practical support"
            eyebrowTone="teal"
            heading="What could support look like?"
            description="Support should relate to what you want to do and what would help."
          />
          <ul className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
            {themes.map((theme) => (
              <li
                key={theme.label}
                className="flex h-fit items-center gap-3 rounded-[14px] border border-line-2 bg-white p-[15px] lg:p-[17px]"
              >
                <Icon icon={theme.icon} size={18} className="text-brand" />
                <span className="text-[15px] leading-[1.4] font-medium text-ink">{theme.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="flex h-fit flex-col gap-[18px] rounded-[20px] border border-line-2 bg-sand p-6 lg:min-w-0 lg:flex-1 lg:gap-5 lg:p-8">
          <h3 className="text-xl leading-[1.3] font-medium text-ink">Before support begins</h3>
          <p className="text-[15px] leading-[1.6] text-muted">
            The support available depends on your goals, the agreed plan, service availability, and any required
            approval.
          </p>
          <p className="rule-t rule-rule-2 pt-4 text-sm leading-[1.6] text-muted">
            A job coach helps you learn and succeed at work. Your workplace supervisor directs the work. Their
            responsibilities should be explained before you start.
          </p>
          <p className="text-[13px] leading-[1.5] text-muted">
            Not everyone needs a job coach. The right support is discussed with you.
          </p>
          <ButtonLink href="/talk-with-quail" variant="attention" className="w-full sm:w-[240px]">
            Talk with Quail
          </ButtonLink>
        </aside>
      </div>
    </Section>
  );
}

const stages = [
  { title: "Explore", body: "Tell us about your interests and what you would like help with." },
  { title: "Connect", body: "Discuss possible opportunities and the people who may be involved." },
  { title: "Prepare", body: "Understand the work, support, and requirements before deciding on the next step." },
  { title: "Support", body: "Receive the agreed help through the identified provider." },
  { title: "Review", body: "Talk about how things are going and what you want to do next." },
];

export function ParticipantProcess() {
  return (
    <Section id="how-it-works" bg="bg-white" py={88} gap={40}>
      <SectionIntro eyebrow="How it works" eyebrowTone="teal" heading="One step at a time." />
      <ol className="grid sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {stages.map((stage, index) => {
          const last = index === stages.length - 1;
          return (
            <li
              key={stage.title}
              className={`flex flex-col gap-3.5 py-5 lg:gap-4 lg:py-3 lg:shadow-none ${last ? "" : "rule-b rule-line-2"}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex size-[34px] shrink-0 items-center justify-center rounded-full text-[13px] leading-4 font-semibold text-brand ${
                    last ? "bg-cream" : "bg-sage"
                  }`}
                >
                  {index + 1}
                </span>
                {!last && (
                  <>
                    <span aria-hidden className="h-px flex-1 bg-rule" />
                    <Icon icon={ArrowRight} size={14} stroke={1.5} className="text-rule" />
                  </>
                )}
              </div>
              <h3 className="text-xl leading-6 font-medium tracking-[-0.004em] text-ink">{stage.title}</h3>
              <p className="text-[15px] leading-[1.5] text-muted lg:text-sm">{stage.body}</p>
            </li>
          );
        })}
      </ol>
      <p className="rule-t rule-rule pt-[18px] text-sm leading-[1.6] text-muted lg:pt-5">
        An initial conversation does not mean you have agreed to a job or a particular service.
      </p>
    </Section>
  );
}

const choices = [
  "Ask questions before deciding.",
  "Say what interests you and what does not.",
  "Discuss what helps you learn or communicate.",
  "Involve someone you trust.",
  "Raise concerns or ask about a different next step.",
];

export function YourSay() {
  return (
    <Section bg="bg-sand" py={88} gap={40}>
      <SectionIntro
        eyebrow="Your say"
        eyebrowTone="teal"
        heading="Your goals. Your questions. Your say."
        maxWidth={900}
      />
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
        <ul className="flex flex-col gap-3.5 lg:w-[calc(700/1280*100%)] lg:shrink-0 lg:gap-4">
          {choices.map((choice) => (
            <li key={choice} className="flex items-center gap-3.5">
              <Icon icon={Check} size={18} stroke={1.7} className="text-brand" />
              <span className="text-base leading-[1.5] text-ink lg:text-[17px]">{choice}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-1 flex-col gap-4 rounded-[20px] border border-line-2 bg-white p-6 lg:gap-5 lg:p-8">
          <h3 className="text-[19px] leading-[1.3] font-medium text-ink lg:text-xl">Your choice stays yours.</h3>
          <p className="text-[15px] leading-[1.6] text-muted">
            We explain who would provide each service. You do not need to use every Quail service to explore an
            opportunity.
          </p>
          <p className="rounded-[10px] bg-cream p-3.5 text-[13px] leading-[1.5] text-muted">
            Quail Job Coaching is a proposed service where available and authorized. It is not required to start a
            conversation.
          </p>
        </div>
      </div>
    </Section>
  );
}

const guideSteps = [
  "Check when your shift starts and where to go.",
  "Know who to ask if you have a question when you arrive.",
  "Bring what you were told to bring — and nothing extra yet.",
  "Let your support contact know if something changes.",
];
const guideModes = ["Read", "Watch", "Listen", "Practice with my coach", "Get help"];

export function WorkGuides() {
  return (
    <Section bg="bg-white" py={88} gap={40}>
      <div className="flex flex-col gap-7 lg:flex-row lg:gap-20">
        <div className="flex flex-col gap-4 lg:w-[calc(640/1280*100%)] lg:shrink-0">
          <SectionIntro
            eyebrow="Work guides · Illustrative concept"
            eyebrowTone="teal"
            heading="Prepare in a way that works for you."
            description="Work guides are intended to make tasks and next steps easier to understand. They support learning and conversations with the people helping you."
          />
          <div className="flex items-center gap-2.5 rounded-xl bg-blush p-4">
            <Icon icon={Info} size={18} stroke={1.5} className="text-rust" />
            <p className="text-[13px] leading-[1.5] text-muted">
              Guide availability is to be confirmed. This is an illustrative concept only — not a current product
              feature.
            </p>
          </div>
        </div>

        <div
          role="img"
          aria-label="Illustrative guide preview: getting ready for your first shift"
          className="h-fit flex-1 overflow-hidden rounded-[20px] border border-line-2 bg-cream shadow-card-soft"
        >
          <div className="flex flex-col items-start gap-2.5 bg-ink px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4">
            <span className="text-sm leading-[17px] font-medium text-white">Getting ready for your first shift</span>
            <span className="shrink-0 rounded-full bg-brand px-2.5 py-1 text-[11px] leading-[13px] font-medium text-mist">
              Illustrative guide preview
            </span>
          </div>
          <div className="flex flex-wrap gap-2 rule-b rule-line-2 bg-white px-4 py-3 lg:px-5 lg:py-3.5">
            {guideModes.map((mode, index) => (
              <span
                key={mode}
                className={`rounded-lg px-3 py-1.5 text-[13px] leading-4 ${
                  index === 0 ? "bg-sage font-semibold text-brand" : "border border-line-2 bg-cream px-[11px] py-[5px] text-muted"
                }`}
              >
                {mode}
              </span>
            ))}
          </div>
          <ol className="flex flex-col gap-3.5 p-5 lg:gap-4 lg:p-6">
            {guideSteps.map((step, index) => (
              <li key={step} className="flex items-center gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-sage text-xs leading-[15px] font-semibold text-brand">
                  {index + 1}
                </span>
                <span className="text-[15px] leading-[1.5] text-ink">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

export function ParticipantInvitation() {
  return (
    <section id="get-started" className="bg-ink px-6 pt-16 pb-8 lg:px-20 lg:pt-20">
      <div className="mx-auto flex max-w-page flex-col gap-12 lg:gap-16">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-[100px]">
          <div className="flex flex-col gap-4 lg:gap-5 lg:w-[calc(820/1280*100%)] lg:shrink-0">
            <h2 className="text-[32px] leading-[1.15] font-medium tracking-[-0.01em] text-white lg:text-[46px] lg:tracking-[-0.015em]">
              Let’s talk about what you want to explore.
            </h2>
            <p className="text-[17px] leading-[1.6] text-mist lg:text-lg">
              Tell us a little about what you are looking for. You do not need to share your full story or private
              records to begin.
            </p>
          </div>
          <ButtonLink
            href="/talk-with-quail"
            variant="inverse"
            padding={28}
            textSize={16}
            className="w-full sm:w-[170px]"
          >
            Talk with Quail
          </ButtonLink>
        </div>
        <div className="flex justify-between rule-t rule-white pt-6 text-xs leading-[15px] text-mist">
          <p>Quail · Employment</p>
          <p>For Participants</p>
        </div>
      </div>
    </section>
  );
}
