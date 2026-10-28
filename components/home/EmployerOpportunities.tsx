import { CalendarDays, ClipboardList, ContactRound, Handshake, type LucideIcon } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";

const topics: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Real duties and expectations",
    body: "What tasks need doing, how the workplace runs day-to-day and what supervision looks like.",
    icon: ClipboardList,
  },
  {
    title: "A workable schedule",
    body: "Days, hours and any flexibility—before a placement is considered.",
    icon: CalendarDays,
  },
  {
    title: "Clear workplace contacts",
    body: "Who explains the work, answers questions and stays connected with the support team.",
    icon: ContactRound,
  },
  {
    title: "Shared responsibilities",
    body: "Employer supervision remains with you. Any additional individualized support, where approved and selected, is coordinated separately.",
    icon: Handshake,
  },
];

// Figma: Employer opportunities (cream, 64/80 padding).
export function EmployerOpportunities() {
  return (
    <Section>
      <SectionIntro
        maxWidth={860}
        eyebrow="For Employers"
        eyebrowLeading="auto"
        heading="Start with the work. Build understanding together."
        description="Explore actual duties, schedules, workplace expectations and relevant preparation with the people involved."
      />
      <div className="flex flex-col gap-9 lg:flex-row lg:gap-[60px]">
        <div className="flex flex-col items-start gap-6 lg:w-[calc(582/1280*100%)] lg:shrink-0">
          <p className="text-[15px] leading-[1.6] text-muted lg:text-[17px]">
            Explore part-time, full-time and internship opportunities. Not every role qualifies for funded
            support; eligibility and funding must be confirmed where applicable.
          </p>
          <ButtonLink href="/inquiry/employer" height={52} padding={28} className="w-full sm:w-auto">
            Discuss a Work Opportunity
          </ButtonLink>
          <p className="text-[13px] leading-[1.5] text-muted">
            A relationship-led conversation, not a job board or a guarantee of staffing.
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-4 rounded-3xl bg-sand p-5 lg:p-7">
          <p className="text-xs leading-[15px] font-semibold tracking-[0.006em] text-brand">
            WHAT WE CLARIFY TOGETHER
          </p>
          <ul className="flex flex-col gap-4">
            {topics.map((topic, index) => (
              <li
                key={topic.title}
                className={`flex gap-3 pt-4 ${index < topics.length - 1 ? "rule-b rule-rule-2 pb-4" : ""}`}
              >
                <Icon icon={topic.icon} size={20} className="text-brand" />
                <div className="flex flex-col gap-1">
                  <h3 className="text-base leading-[19px] font-medium text-ink">{topic.title}</h3>
                  <p className="text-sm leading-[1.5] text-muted">{topic.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
