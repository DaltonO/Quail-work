import { ButtonLink } from "@/components/ui/ButtonLink";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { EmploymentScene } from "./EmploymentScene";

// Figma: Hero › Introduction (80/80/72 padding, 52 gap, centered).
export function HomeHero() {
  return (
    <section className="px-6 pt-12 pb-14 lg:px-20 lg:pt-20 lg:pb-[72px]">
      <div className="mx-auto flex max-w-page flex-col gap-9 lg:items-center lg:gap-[52px]">
        <div className="flex w-full max-w-[1040px] flex-col gap-6 lg:items-center lg:text-center">
          <p className="t-eyebrow leading-4! text-brand">Employment, with people at the center</p>
          <h1 className="t-h1 text-ink lg:text-[62px] lg:tracking-[-0.027em]">
            Meaningful work. The right support. A clearer path forward.
          </h1>
          <p className="max-w-[810px] text-[17px] leading-7 text-muted">
            Quail brings participants, employers, and service partners together to develop work
            opportunities and coordinate individualized employment support.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/inquiry/employer" className="w-full sm:w-auto">
              Discuss a Work Opportunity
            </ButtonLink>
            <ButtonLink href="/participants" variant="secondary" className="w-full sm:w-auto">
              Explore Employment Support
            </ButtonLink>
          </div>
          <ArrowLink href="/partners" className="lg:w-[305px]!">
            For Providers &amp; Referral Partners
          </ArrowLink>
        </div>

        <EmploymentScene />

        <p className="text-center text-xs leading-[1.5] text-muted">
          Illustrative concepts · Fictional sample data only · Not an open job listing
        </p>
      </div>
    </section>
  );
}
