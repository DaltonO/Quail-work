import { Handshake, MessagesSquare, UsersRound } from "lucide-react";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Icon } from "@/components/ui/Icon";
import { IconTile } from "@/components/ui/IconTile";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";

const roles = [
  {
    title: "Employment and support providers",
    responsibility: "COLLABORATION & SERVICE DELIVERY",
    body: "Discuss collaboration capacity, support-role clarity and how follow-up will be coordinated with the participant and employer. Service delivery depends on applicable approvals and participant selection.",
    route: "Explore provider collaboration",
    href: "/partners",
    icon: Handshake,
    card: "bg-white",
    tile: "bg-sage-2",
  },
  {
    title: "Regional Centers & service coordinators",
    responsibility: "SCOPE, REFERRALS & COORDINATION",
    body: "Confirm scope, availability, referral requirements and the right contact. Discuss participant goals; a referral is not service approval.",
    route: "Discuss a referral",
    href: "/inquiry/referral",
    icon: MessagesSquare,
    card: "bg-cream",
    tile: "bg-sand",
  },
];

// Figma: Partner collaboration (sage, 64/80 padding).
export function PartnerCollaboration() {
  return (
    <Section bg="bg-sage">
      <SectionIntro
        maxWidth={900}
        eyebrow="For Providers & Referral Partners"
        eyebrowLeading="auto"
        heading="Connected support. Distinct responsibilities."
        description="Support is individualized around participant choice and applicable service requirements. An opportunity does not automatically select a provider."
      />
      <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
        {roles.map((role) => (
          <article
            key={role.title}
            className={`flex flex-col gap-[18px] rounded-[20px] border border-line p-6 lg:h-[263px] lg:p-8 ${role.card}`}
          >
            <div className="flex items-center gap-3">
              <IconTile icon={role.icon} size={40} iconSize={22} radius={12} bg={role.tile} />
              <h3 className="text-xl leading-[1.3] font-medium text-ink">{role.title}</h3>
            </div>
            <p className="text-xs leading-[15px] font-semibold tracking-[0.005em] text-brand">
              {role.responsibility}
            </p>
            <p className="text-[15px] leading-[1.5] text-muted">{role.body}</p>
            <ArrowLink href={role.href}>{role.route}</ArrowLink>
          </article>
        ))}
      </div>
      <div className="flex items-start gap-3.5 rounded-[14px] border border-line bg-cream p-5 lg:items-center">
        <Icon icon={UsersRound} size={22} className="text-brand" />
        <p className="text-sm leading-[1.6] text-ink">
          Meaningful participant choice remains central. Provider selection, service delivery and any required
          approvals are distinct decisions made separately from the employment conversation.
        </p>
      </div>
    </Section>
  );
}
