// External sites linked from the header and footer. Change a name or URL here and every use updates.
//   label  — the name shown as link text (header button, footer link rows)
//   domain — the address shown where the design prints the site itself (footer website lines)
//   href   — where the link goes
//   newTab — true opens the link in a new browser tab

export type ExternalLink = { label: string; domain: string; href: string; newTab?: boolean };

export const externalLinks = {
  quail: { label: "Quail", domain: "joinquail.com", href: "https://joinquail.com", newTab: true },
  quailWork: { label: "Quail Employment", domain: "work.joinquail.com", href: "/" },
  quailFms: { label: "Quail FMS", domain: "fms.joinquail.com", href: "https://joinquail.com", newTab: true },
} as const satisfies Record<string, ExternalLink>;

/** Spread onto an <a> or <Link>: adds target="_blank" (with a safe rel) when the link sets `newTab`. */
export function newTabProps(link: { href: string; newTab?: boolean }) {
  return link.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {};
}
