import { BriefcaseBusiness, MessagesSquare, UserRound, type LucideIcon } from "lucide-react";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { IconTile } from "@/components/ui/IconTile";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";

const audiences: { title: string; body: string; route: string; href: string; icon: LucideIcon; tile: string }[] = [
  {
    title: "Employers",
    body: "Have work that needs doing? Start a conversation about real duties, your workplace and what a supported placement could look like.",
    route: "Discuss an opportunity",
    href: "/employers",
    icon: BriefcaseBusiness,
    tile: "bg-sage",
  },
  {
    title: "Participants & Families",
    body: "Explore work around your interests, strengths and support needs. You don’t need every answer to begin.",
    route: "Explore employment support",
    href: "/participants",
    icon: UserRound,
    tile: "bg-sand",
  },
  {
    title: "Providers & Referral Partners",
    body: "Connect around a person’s goals and clarify support roles and next steps.",
    route: "Discuss a referral or collaboration",
    href: "/partners",
    icon: MessagesSquare,
    tile: "bg-blush",
  },
];

// Figma: Audience pathways (white, 64/80 padding).
export function AudiencePathways() {
  return (
    <Section bg="bg-white">
      <SectionIntro
        maxWidth={900}
        eyebrow="Find your starting point"
        eyebrowLeading="auto"
        heading="Different roles. A shared way forward."
        description="Choose the conversation that fits you."
      />
      <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
        {audiences.map((audience) => (
          <article
            key={audience.title}
            className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-5 rounded-[20px] border border-line bg-cream p-6 lg:flex lg:h-[340px] lg:flex-col lg:items-stretch lg:p-7"
          >
            {/* Mobile frame: icon sits beside the title and the selector is dropped. */}
            <div className="flex items-center justify-between">
              <IconTile icon={audience.icon} size={48} iconSize={24} radius={14} bg={audience.tile} />
              <span aria-hidden className="hidden size-5 rounded-full border-[1.5px] border-rule lg:block" />
            </div>
            <div className="contents lg:flex lg:flex-col lg:gap-2.5">
              <h3 className="text-[22px] leading-[1.25] font-medium tracking-[-0.005em] text-ink">
                {audience.title}
              </h3>
              <p className="col-span-2 text-[15px] leading-[1.5] text-muted lg:text-base">{audience.body}</p>
            </div>
            <div className="col-span-2 rule-t pt-4">
              <ArrowLink href={audience.href}>{audience.route}</ArrowLink>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
