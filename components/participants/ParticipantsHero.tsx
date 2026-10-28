import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";

const options = [
  "A type of work I'm interested in.",
  "Help preparing for work.",
  "Support in a current job.",
  "I'm not sure yet.",
];

// Figma: For Participants › Hero (96/80/80 padding, two columns, 80 gap).
export function ParticipantsHero() {
  return (
    <section className="px-6 pt-12 pb-14 lg:px-20 lg:pt-24 lg:pb-20">
      <div className="mx-auto flex max-w-page flex-col gap-8 lg:flex-row lg:items-center lg:gap-20">
        <div className="flex flex-col items-start gap-6 lg:w-[calc(580/1280*100%)] lg:shrink-0 lg:gap-7">
          <p className="t-eyebrow text-teal">For Participants</p>
          <h1 className="t-h1 text-ink lg:max-w-[540px] lg:text-[58px] lg:tracking-[-0.024em]">
            {/* Mobile frame breaks after "Work that"; desktop after "matters". */}
            Work that <br className="lg:hidden" />
            matters to you.
            <br />
            Support that fits.
          </h1>
          <p className="text-[17px] leading-[1.65] text-muted">
            Explore the work you want to do, prepare for an opportunity, and talk about support that could help you
            learn and succeed.
          </p>
          <p className="text-sm leading-[1.6] font-medium text-teal">
            Quail’s initial employment pathway is for adults with intellectual and developmental disabilities.
          </p>
          <div className="flex w-full flex-col items-start gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-5">
            <ButtonLink href="/talk-with-quail" variant="attention" padding={28} textSize={16} className="w-full sm:w-auto">
              Talk with Quail
            </ButtonLink>
            <Link
              href="#how-it-works"
              className="inline-flex items-center gap-1.5 text-sm leading-[17px] font-semibold text-teal hover:underline"
            >
              See how it works
              <Icon icon={ArrowRight} size={16} stroke={1.33} />
            </Link>
          </div>
          <p className="text-sm leading-[1.6] text-muted">
            You can reach out yourself or ask someone you trust to help.
          </p>
        </div>

        {/* Illustrative preview — explicitly "not interactive" in the design. */}
        <div
          aria-label="Illustrative preparation preview — not interactive"
          role="img"
          className="flex-1 overflow-hidden rounded-[20px] border border-line-2 bg-white shadow-panel-soft lg:rounded-3xl"
        >
          <div className="flex items-center justify-between gap-3 bg-ink px-5 py-3.5 lg:px-6 lg:py-4">
            <span className="text-sm leading-[17px] font-medium whitespace-nowrap text-white">Quail Employment</span>
            <span className="shrink-0 whitespace-nowrap rounded-full bg-brand px-2.5 py-1 text-[11px] leading-[13px] font-medium text-mist">
              Illustrative preview — not interactive
            </span>
          </div>
          <div className="flex flex-col gap-4 p-6 lg:gap-5 lg:p-7">
            <p className="text-xl leading-[1.3] font-medium tracking-[-0.005em] text-ink lg:text-[22px]">
              What would you like to explore?
            </p>
            <div className="flex flex-col gap-2.5">
              {options.map((option, index) => {
                const selected = index === 0;
                return (
                  <div
                    key={option}
                    className={`flex items-center gap-3 rounded-xl lg:rounded-[14px] ${
                      selected ? "bg-sage p-4 lg:p-[18px]" : "border border-line-2 bg-cream p-[15px] lg:p-[17px]"
                    }`}
                  >
                    {selected ? (
                      <span className="flex size-5 items-center justify-center rounded-full border-[1.5px] border-brand">
                        <span className="size-2.5 rounded-full bg-brand" />
                      </span>
                    ) : (
                      <span className="size-5 rounded-full border-[1.5px] border-rule" />
                    )}
                    <span
                      className={`text-sm leading-[1.4] lg:text-[15px] lg:leading-[1.5] ${selected ? "font-medium text-ink" : "text-muted"}`}
                    >
                      {option}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="text-[13px] leading-[1.5] text-muted lg:text-xs">Illustrative preparation preview — not interactive</p>
          </div>
        </div>
      </div>
    </section>
  );
}
