import { ButtonLink } from "@/components/ui/ButtonLink";

// Figma: For Partners › Hero (80/80/72 padding, 24 gap, centered).
export function PartnersHero() {
  return (
    <section className="px-6 pt-12 pb-14 lg:px-20 lg:pt-20 lg:pb-[72px]">
      <div className="mx-auto flex max-w-page flex-col gap-6 lg:items-center">
        <div className="flex w-full max-w-[1040px] flex-col gap-6 lg:items-center lg:text-center">
          <p className="t-eyebrow leading-4! text-brand">For Partners</p>
          <h1 className="t-h1 text-ink lg:text-[62px] lg:tracking-[-0.027em]">
            More opportunity.
            <br />
            Less administrative chasing.
          </h1>
          <p className="max-w-[850px] text-[17px] leading-[1.65] text-muted">
            Quail works with employment providers, Regional Centers, and referral professionals to connect work
            opportunities, clarify support responsibilities, and keep next steps organized.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/inquiry/provider-partnership" className="w-full sm:w-auto">
              Discuss a provider partnership
            </ButtonLink>
            <ButtonLink href="/inquiry/referral" variant="secondary-ink" className="w-full sm:w-auto">
              Discuss a referral
            </ButtonLink>
          </div>
          <p className="text-sm leading-[1.6] text-brand">
            Clear roles. Participant choice. A shared understanding of what happens next.
          </p>
        </div>
        <div className="flex w-full max-w-[960px] flex-col gap-2.5 rule-t pt-6 lg:text-center">
          <p className="text-[15px] leading-[1.6] text-ink">
            Quail’s initial employment focus is adults with intellectual and developmental disabilities.
          </p>
          <p className="text-sm leading-[1.6] text-muted">
            Quail develops employer relationships and coordinates opportunity, preparation, support and
            follow-through.
          </p>
        </div>
      </div>
    </section>
  );
}
