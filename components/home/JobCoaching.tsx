import { ListChecks, MessagesSquare, RefreshCw, type LucideIcon } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { StatusPill } from "@/components/ui/StatusPill";

const themes: { title: string; body: string; example?: string; icon: LucideIcon }[] = [
  {
    title: "Learning the work",
    body: "Learn workplace tasks step by step and build useful routines.",
    example:
      "e.g. Breaking down how to organize the supply counter into a step-by-step routine · Illustrative example · Proposed",
    icon: ListChecks,
  },
  {
    title: "Finding a rhythm",
    body: "Practice asking questions, communicating and working through challenges.",
    example:
      "e.g. Practicing how to let a workplace contact know when something is unclear · Illustrative example · Proposed",
    icon: MessagesSquare,
  },
  {
    title: "Adjusting together",
    body: "Review how the experience is going and discuss useful adjustments together.",
    icon: RefreshCw,
  },
];

// Figma: Quail Job Coaching (white, 64/80 padding).
export function JobCoaching() {
  return (
    <Section bg="bg-white">
      <div className="flex flex-col gap-9 lg:flex-row lg:gap-20">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
          <SectionIntro
            eyebrow="Quail Job Coaching · Proposed direct service"
            eyebrowLeading="auto"
            heading="Practical support for the everyday moments at work."
            description="Individualized workplace support shaped around a participant's goals, tasks and support needs. This is a proposed service only—where approved, available and selected."
          />
          <p className="text-[15px] leading-[1.6] text-muted">
            Employers provide ordinary workplace supervision. Job coaching offers additional, individualized help
            with learning tasks, communication and routines.
          </p>
          <ButtonLink href="/participants" height={52} padding={28} className="w-full sm:w-auto">
            Explore Employment Support
          </ButtonLink>
        </div>

        <aside className="flex h-fit flex-col gap-5 rounded-[20px] border border-line bg-blush p-6 lg:w-[calc(380/1280*100%)] lg:shrink-0 lg:p-7">
          <h3 className="text-xl leading-6 font-medium text-ink">Before service begins</h3>
          <p className="text-sm leading-[1.6] text-muted">
            Approval, service area, timing and availability must be confirmed before relying on this proposed
            service.
          </p>
          {["Approval", "Service availability"].map((label) => (
            <div key={label} className="flex flex-col gap-2">
              <span className="text-[13px] leading-4 font-medium text-ink">{label}</span>
              <StatusPill>To be confirmed</StatusPill>
            </div>
          ))}
        </aside>
      </div>

      <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
        {themes.map((theme) => (
          <article
            key={theme.title}
            className="flex flex-col gap-3.5 rounded-[20px] border border-line bg-cream p-6 lg:h-[275px] lg:p-7"
          >
            <Icon icon={theme.icon} size={24} className="text-brand" />
            <h3 className="text-[19px] leading-[23px] font-medium text-ink">{theme.title}</h3>
            <p className="text-sm leading-[1.5] text-muted">{theme.body}</p>
            {theme.example && (
              <p className="rounded-[10px] bg-sand p-3.5 text-[13px] leading-[1.5] text-muted">{theme.example}</p>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
