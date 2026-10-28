import { CircleCheck } from "lucide-react";
import { Icon } from "@/components/ui/Icon";

// Figma: Hero › Employment scene (1280×480). On desktop the panels sit at their exact
// absolute offsets inside the scene; below lg they stack inside the sage setting.
export function EmploymentScene() {
  return (
    <div
      aria-label="Illustrative example of a Quail Employment placement pathway"
      role="img"
      className="relative w-full rounded-[28px] bg-sage p-3 scene:h-[480px] scene:max-w-[1280px] scene:rounded-none scene:bg-transparent scene:p-0"
    >
      {/* Sage and sand settings */}
      <div className="absolute top-5 left-[60px] hidden h-[360px] w-[1160px] rounded-[36px] bg-sage scene:block" />
      <div className="absolute top-[300px] left-[300px] hidden h-[150px] w-[840px] rounded-[28px] bg-sand scene:block" />

      <div className="grid gap-3 sm:grid-cols-2 scene:block">
        <PlacementPanel />
        <EmployerCard />
        <NextStepCard />
      </div>
    </div>
  );
}

function PlacementPanel() {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-panel sm:col-span-2 scene:absolute scene:top-0 scene:left-[270px] scene:w-[740px]">
      <div className="flex items-center justify-between gap-3 bg-ink px-5 py-4">
        <span className="text-[13px] leading-4 font-semibold text-white">Quail Employment</span>
        <span className="rounded-full bg-brand px-2.5 py-1 text-[11px] leading-[13px] font-medium text-mist">
          Illustrative example
        </span>
      </div>
      <div className="flex flex-col gap-5 p-5 lg:p-6">
        <div className="flex flex-col gap-1.5">
          <span className="text-xs leading-[15px] font-semibold tracking-[0.005em] text-brand">
            PLACEMENT PATHWAY
          </span>
          <span className="text-[22px] leading-[1.25] font-medium tracking-[-0.004em] text-ink">
            A work opportunity, shaped together.
          </span>
          <span className="text-sm leading-[1.5] text-muted">
            Illustrative example · Sample neighborhood café
          </span>
        </div>
        <div className="flex flex-col gap-3 rounded-2xl border border-line bg-cream p-[18px]">
          <span className="text-sm leading-[1.5] font-semibold text-ink">Placement readiness</span>
          <span className="text-xs leading-[1.5] text-muted">
            Interests, workplace duties and a shared next step.
          </span>
          <ul>
            {["Interests discussed", "Workplace duties outlined"].map((item) => (
              <li key={item} className="flex items-center gap-2.5 rule-b py-2">
                <Icon icon={CircleCheck} size={16} className="text-brand" />
                <span className="text-[13px] leading-[1.5] text-ink">{item}</span>
              </li>
            ))}
          </ul>
          <span className="text-sm leading-[1.5] text-muted">
            Next: discuss a schedule and the support that could help.
          </span>
        </div>
      </div>
    </div>
  );
}

function EmployerCard() {
  return (
    <div className="flex flex-col gap-3.5 rounded-[18px] border border-line bg-white p-5 shadow-card scene:absolute scene:top-[60px] scene:left-[60px] scene:w-[210px]">
      <span className="text-[10px] leading-3 font-semibold tracking-[0.005em] text-brand">
        EMPLOYER OPPORTUNITY
      </span>
      <span className="text-base leading-[1.3] font-medium tracking-[-0.003em] text-ink">
        A role worth exploring.
      </span>
      <span className="flex flex-col gap-[3px]">
        <span className="text-[11px] leading-[13px] font-semibold text-muted">Workplace</span>
        <span className="text-sm leading-[1.5] text-ink">Sample neighborhood café</span>
      </span>
      <span className="rounded-[10px] bg-sand p-2.5 text-sm leading-[1.5] text-ink">
        Schedule &amp; support to discuss
      </span>
    </div>
  );
}

function NextStepCard() {
  return (
    <div className="flex flex-col gap-3.5 rounded-[18px] bg-ink p-5 shadow-card scene:absolute scene:top-[60px] scene:left-[1018px] scene:w-[202px]">
      <span className="text-[10px] leading-3 font-semibold tracking-[0.005em] text-mist">
        YOUR NEXT STEP
      </span>
      <span className="text-base leading-[1.3] font-medium text-white">
        Start with what matters to you.
      </span>
      <span className="text-sm leading-[1.5] text-mist">
        Share your interests and the support that could help at work.
      </span>
      <span className="rule-t rule-white pt-3 text-sm leading-[1.5] font-semibold text-white">
        Prepare for a conversation
      </span>
    </div>
  );
}
