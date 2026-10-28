// Navigation content from "Main Quail header — desktop" (1:751) and
// "Main Quail navigation — mobile" (1:595).

import { externalLinks } from "./links";

export type NavDestination = {
  label: string;
  href: string;
  description?: string;
  /** Open in a new browser tab. */
  newTab?: boolean;
};

export type NavGroup = {
  id: "services" | "audiences";
  label: string;
  items: NavDestination[];
  footer?: NavDestination;
};

export const navGroups: NavGroup[] = [
  {
    id: "services",
    label: "Services",
    items: [
      {
        label: "Employment Opportunities",
        description: "Explore work opportunities and the placement process.",
        href: "/",
      },
      {
        label: "Job Coaching",
        description: "Individualized support for learning and succeeding at work.",
        href: "/#job-coaching",
      },
      {
        // The Figma file has no Recreation Services page; this anchors to the
        // home page services section until that page exists.
        label: "Recreation Services",
        description: "Explore community activities and participation.",
        href: "/#services",
      },
    ],
    footer: { label: "View All Services", href: "/#services" },
  },
  {
    id: "audiences",
    label: "Who We Serve",
    items: [
      { label: "Participants & Families", href: "/participants" },
      { label: "Employers", href: "/employers" },
      { label: "Providers & Community Organizations", href: "/partners" },
      { label: "Regional Centers & Service Coordinators", href: "/inquiry/referral" },
    ],
  },
];

export const howItWorks: NavDestination = { label: "How It Works", href: "/#how-it-works" };
export const quailFms: NavDestination = externalLinks.quailFms;
export const talkWithQuail: NavDestination = { label: "Talk with Quail", href: "/talk-with-quail" };

/** True when `href` points at the page currently being viewed (ignores hash links). */
export function isCurrent(href: string, pathname: string) {
  const [path, hash] = href.split("#");
  if (hash) return false;
  return (path || "/") === pathname;
}
