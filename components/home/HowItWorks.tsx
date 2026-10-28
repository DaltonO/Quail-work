import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";

const stages = [
  { title: "Explore", body: "Explore your interests, strengths and what meaningful work could look like." },
  { title: "Connect", body: "Discuss the opportunity with the employer and relevant support or referral contacts." },
  { title: "Prepare", body: "Clarify duties, schedules, preparation and any support or approvals needed." },
  { title: "Support", body: "Plan individualized support with the selected, approved provider." },
  {
    title: "Keep moving toward what's next.",
    body: "Review progress, discuss what is working, and plan the next step with the people involved.",
  },
];

// Figma: How it works (sage, 64/80 padding). The step markers share the section fill except
// the last, which is cream — reproduced as designed.
export function HowItWorks() {
  return (
    <Section bg="bg-sage">
      <SectionIntro
        maxWidth={860}
        eyebrow="How It Works"
        eyebrowLeading="auto"
        heading="Start with what matters to you."
        description="Explore the work you want to do, the strengths you bring, and the support that could help."
      />
      <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
        {stages.map((stage, index) => {
          const last = index === stages.length - 1;
          return (
            <li key={stage.title} className="flex flex-col gap-4 py-3">
              <div className="flex items-center gap-3">
                <span
                  className={`flex size-[34px] items-center justify-center rounded-full text-[13px] leading-4 font-semibold text-brand ${
                    last ? "bg-cream" : "bg-sage"
                  }`}
                >
                  {index + 1}
                </span>
                {!last && <Icon icon={ArrowRight} size={16} stroke={1.5} className="text-rule" />}
              </div>
              <h3 className="text-xl leading-6 font-medium tracking-[-0.004em] text-ink">{stage.title}</h3>
              <p className="text-sm leading-[1.5] text-muted">{stage.body}</p>
            </li>
          );
        })}
      </ol>
      <p className="rule-t rule-rule pt-5 text-sm leading-[1.6] text-muted">
        The path is individualized. Services depend on approvals, participant choice and availability. A
        conversation does not guarantee a job, service start or continuation.
      </p>
    </Section>
  );
}
