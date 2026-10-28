import type { Metadata } from "next";
import { BriefcaseBusiness, MessagesSquare, UserRound, type LucideIcon } from "lucide-react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { IconTile } from "@/components/ui/IconTile";

export const metadata: Metadata = { title: "Page not found" };

// No 404 frame exists in Figma. This page is composed from the design system: the home hero type
// (eyebrow, Bold headline, 17/28 lead, 56px buttons) and the audience cards (1:14874 "Audience pathways").

const destinations: { title: string; body: string; route: string; href: string; icon: LucideIcon; tile: string }[] = [
  {
    title: "Employers",
    body: "Have work that needs doing? Start a conversation about real duties and your workplace.",
    route: "For Employers",
    href: "/employers",
    icon: BriefcaseBusiness,
    tile: "bg-sage",
  },
  {
    title: "Participants & Families",
    body: "Explore work around your interests, strengths and support needs.",
    route: "For Participants",
    href: "/participants",
    icon: UserRound,
    tile: "bg-sand",
  },
  {
    title: "Providers & Referral Partners",
    body: "Clarify referrals, service delivery and collaboration.",
    route: "For Partners",
    href: "/partners",
    icon: MessagesSquare,
    tile: "bg-blush",
  },
];

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="px-6 pt-12 pb-14 lg:px-20 lg:pt-20 lg:pb-[72px]">
          <div className="mx-auto flex max-w-[1040px] flex-col gap-6 lg:items-center lg:text-center">
            <p className="t-eyebrow leading-4! text-brand">404 · Page not found</p>
            <h1 className="t-h1 text-ink lg:text-[62px] lg:tracking-[-0.027em]">We couldn’t find that page.</h1>
            <p className="max-w-[640px] text-[17px] leading-7 text-muted">
              The page you’re looking for may have moved, or the link may be out of date. Choose a starting point
              below or start a conversation with Quail.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <ButtonLink href="/" className="w-full sm:w-auto">
                Back to home
              </ButtonLink>
              <ButtonLink href="/talk-with-quail" variant="secondary" className="w-full sm:w-auto">
                Talk with Quail
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16 lg:px-20">
          <div className="mx-auto flex max-w-page flex-col gap-10 lg:gap-9">
            <div className="flex flex-col gap-4">
              <p className="t-eyebrow leading-4! text-brand">Find your starting point</p>
              <h2 className="t-h2 text-ink">Different roles. A shared way forward.</h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
              {destinations.map((destination) => (
                <article
                  key={destination.title}
                  className="flex flex-col gap-[18px] rounded-[20px] border border-line bg-cream p-6 lg:gap-5 lg:p-7"
                >
                  <div className="flex items-center gap-3.5 lg:flex-col lg:items-start lg:gap-5">
                    <IconTile icon={destination.icon} size={48} iconSize={24} radius={14} bg={destination.tile} />
                    <h3 className="text-[21px] leading-[1.25] font-medium tracking-[-0.005em] text-ink lg:text-[22px]">
                      {destination.title}
                    </h3>
                  </div>
                  <p className="flex-1 text-[15px] leading-[1.5] text-muted lg:text-base">{destination.body}</p>
                  <div className="pt-4 rule-t">
                    <ArrowLink href={destination.href}>{destination.route}</ArrowLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter variant="home" />
    </>
  );
}
