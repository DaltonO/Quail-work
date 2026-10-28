"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { QuailBrand } from "@/components/ui/QuailBrand";
import { externalLinks, newTabProps } from "@/lib/links";

const groups = [
  {
    title: "Find your path",
    links: [
      { label: "For Employers", href: "/employers" },
      { label: "For Participants", href: "/participants" },
      { label: "For Partners", href: "/partners" },
    ],
  },
  {
    title: "Employment",
    links: [
      { label: "Job Coaching", href: "/#job-coaching" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Contact", href: "/talk-with-quail" },
    ],
  },
  {
    title: "A distinct offering",
    links: [externalLinks.quailFms],
    site: externalLinks.quailFms,
  },
];

type SiteFooterProps = {
  /**
   * "home" — Quail Employment frame: ink group titles, 40px link rows, website lines.
   * "standard" — audience pages: brand eyebrows, active page underlined.
   */
  variant?: "home" | "standard";
  /** Link row height on the standard footer: 20 (employers/participants) or 40 (partners). */
  rowHeight?: 20 | 40;
};

export function SiteFooter({ variant = "standard", rowHeight = 20 }: SiteFooterProps) {
  const pathname = usePathname();
  const home = variant === "home";
  const columns = home
    ? "lg:grid-cols-[420fr_190fr_190fr_180fr] lg:gap-x-[100px]"
    : rowHeight === 40
      ? "lg:grid-cols-[420fr_206.67fr_206.67fr_206.67fr] lg:gap-x-20"
      : "lg:grid-cols-[420fr_220fr_220fr_180fr] lg:gap-x-20";

  return (
    <footer className="px-6 pt-12 pb-7 lg:px-20">
      <div className={`mx-auto flex max-w-page flex-col ${home ? "gap-10" : "gap-8"}`}>
        {/* Column tracks are the Figma widths as fr units, so the grid is exact at 1440 and scales below it. */}
        <div className={`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-y-0 ${columns}`}>
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <QuailBrand />
            <p className="text-[13.3px] leading-5 text-muted">
              Employment opportunities and individualized support, with people at the center.
            </p>
            {home ? (
              <a
                href={externalLinks.quailWork.href}
                {...newTabProps(externalLinks.quailWork)}
                className="w-fit text-[13px] leading-4 text-brand underline-offset-2 hover:underline"
              >
                {externalLinks.quailWork.domain}
              </a>
            ) : (
              <a
                href={externalLinks.quail.href}
                {...newTabProps(externalLinks.quail)}
                className="w-fit text-[13.3px] leading-5 text-muted underline-offset-2 hover:text-brand hover:underline"
              >
                {externalLinks.quail.domain}
              </a>
            )}
          </div>

          {groups.map((group) => (
            <div key={group.title} className={`flex flex-col ${home ? "gap-2" : "gap-1.5"}`}>
              <p className={home ? "text-[13px] leading-4 font-semibold text-ink" : "t-eyebrow text-brand"}>
                {group.title}
              </p>
              {group.links.map((link) => {
                const active = !home && link.href === pathname;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    {...newTabProps(link)}
                    aria-current={active ? "page" : undefined}
                    className={`flex w-fit items-center text-sm leading-5 hover:underline ${
                      home || rowHeight === 40 ? "h-10" : "h-5"
                    } ${active ? "font-semibold text-brand underline" : "text-ink"}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              {home && group.site && (
                <a
                  href={group.site.href}
                  {...newTabProps(group.site)}
                  className="w-fit text-[13px] leading-[1.5] text-muted underline-offset-2 hover:text-brand hover:underline"
                >
                  {group.site.domain}
                </a>
              )}
            </div>
          ))}
        </div>

        {home ? (
          <div className="flex flex-col gap-2 rule-t pt-6 text-xs leading-[1.5] text-muted sm:flex-row sm:justify-between">
            <p>Quail · Employment</p>
            <p>Product scenes are illustrative concepts. Service details to be confirmed.</p>
          </div>
        ) : (
          <>
            <hr className="border-line" />
            <div className="grid gap-3 text-[13.3px] leading-5 text-muted sm:grid-cols-2">
              <p>Quail · Employment</p>
              <p>Product scenes are illustrative concepts. Service details to be confirmed.</p>
            </div>
          </>
        )}
      </div>
    </footer>
  );
}
