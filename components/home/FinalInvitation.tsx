import { ArrowLink } from "@/components/ui/ArrowLink";

const routes = [
  {
    title: "For Employers",
    body: "Talk about real work and a possible opportunity.",
    route: "Discuss a Work Opportunity",
    href: "/inquiry/employer",
  },
  {
    title: "For Participants",
    body: "Start with your interests and support needs.",
    route: "Explore Employment Support",
    href: "/participants",
  },
  {
    title: "For Partners",
    body: "Clarify referrals, service delivery and collaboration.",
    route: "For Providers & Referral Partners",
    href: "/partners",
  },
];

// Figma: Final invitation (ink, 80px padding, 40 gap).
export function FinalInvitation() {
  return (
    <section className="bg-ink px-6 py-16 lg:p-20">
      <div className="mx-auto flex max-w-page flex-col gap-10">
        <div className="flex max-w-[850px] flex-col gap-5">
          <h2 className="t-h2-xl text-white">A clearer path starts with a conversation.</h2>
          <p className="text-[17px] leading-7 text-mist">
            Bring your goals, your questions or a work opportunity. Choose the right starting point for you.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
          {routes.map((route) => (
            <div key={route.title} className="flex flex-col gap-5 rounded-[20px] border border-white/19 p-6">
              <h3 className="text-[23px] leading-7 font-medium text-white">{route.title}</h3>
              <p className="text-[13.3px] leading-5 text-mist">{route.body}</p>
              <ArrowLink href={route.href} tone="white">
                {route.route}
              </ArrowLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
