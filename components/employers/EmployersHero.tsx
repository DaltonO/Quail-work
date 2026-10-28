import { ArrowRight, Circle, Info } from "lucide-react";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";

const details = [
  "Proposed schedule: 20 hours/week",
  "Worksite supervisor: Identified",
  "Support arrangement: To be discussed",
];

// Figma: For Employers › Hero (72/80/64 padding, 40 gap, centered).
export function EmployersHero() {
  return (
    <section className="px-6 pt-12 pb-14 lg:px-20 lg:pt-[72px] lg:pb-16">
      <div className="mx-auto flex max-w-page flex-col gap-8 lg:items-center lg:gap-10">
        <div className="flex flex-col gap-6 lg:items-center lg:text-center">
          <p className="t-eyebrow text-brand">For Employers</p>
          <h1 className="t-h1 text-ink lg:text-[60px] lg:tracking-[-0.025em]">
            Meaningful work for someone.
            <br className="hidden lg:block" /> A practical opportunity for your business.
          </h1>
          <p className="max-w-[850px] text-[17px] leading-[1.65] text-muted">
            Quail helps employers explore work opportunities for adults with intellectual and developmental
            disabilities—with clear preparation, coordinated support, and an organized path forward.
          </p>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
            <ButtonLink href="/inquiry/employer" textSize={16} className="w-full sm:w-[300px]">
              Discuss a work opportunity
            </ButtonLink>
            <ArrowLink
              href="#how-it-works"
              layout="inline"
              iconSize={16}
              gap={4}
              className="leading-6! font-normal!"
            >
              See how it works
            </ArrowLink>
          </div>
          <p className="text-sm leading-[1.5] text-muted">
            Have part-time, full-time, or internship work available? Let’s discuss what could fit.
          </p>
        </div>

        <div className="flex w-full max-w-[960px] flex-col gap-3.5">
          <div className="rounded-[28px] bg-sage p-4 sm:p-8">
            <div className="mx-auto max-w-[740px] overflow-hidden rounded-[20px] border border-line bg-white shadow-panel">
              <div className="flex items-center justify-between gap-3 bg-ink px-5 py-4 sm:px-7">
                <span className="text-sm leading-[17px] font-medium text-white">Quail Employment</span>
                <span className="text-xs leading-[15px] text-mist">Illustrative example</span>
              </div>
              <div className="flex flex-col gap-5 p-5 sm:p-7">
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] leading-[13px] font-semibold tracking-[0.007em] text-brand">
                    OPPORTUNITY TO EXPLORE
                  </span>
                  <span className="text-[23px] leading-[1.2] font-medium tracking-[-0.006em] text-ink sm:text-[30px]">
                    Office &amp; Operations Support
                  </span>
                </div>
                <ul>
                  {details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3 rule-t py-3">
                      <Icon icon={Circle} size={18} stroke={1.5} className="text-rule" />
                      <span className="text-sm leading-[1.5] text-ink sm:text-base">{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-3 rounded-xl bg-sand p-4">
                  <span className="flex-1 text-sm leading-[1.5] font-medium text-ink">
                    Next step: Explore the opportunity
                  </span>
                  <Icon icon={ArrowRight} size={18} className="text-brand" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-xs leading-[1.5] text-muted">
            Illustrative example · Fictional proposed opportunity, not an open job listing
          </p>
        </div>

        <div className="flex w-full max-w-[960px] gap-3 rounded-[14px] bg-sand p-[18px] lg:p-5">
          <Icon icon={Info} size={20} stroke={1.5} className="text-brand" />
          <p className="text-[13.3px] leading-5 text-muted">
            Eligible PIP placements may include program-funded wages. Participation and coverage depend on the
            approved arrangement.
          </p>
        </div>
      </div>
    </section>
  );
}
