import Link from "next/link";
import type { NavDestination } from "@/lib/navigation";

type MenuDestinationProps = {
  item: NavDestination;
  current?: boolean;
  tone?: "ink" | "brand";
  onNavigate?: () => void;
  className?: string;
};

/** "Menu destination" — 12px padding, 10px radius, label Medium 15.5/24, description Regular 13.3/20. Hover = sage fill. */
export function MenuDestination({
  item,
  current = false,
  tone = "ink",
  onNavigate,
  className = "",
}: MenuDestinationProps) {
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={current ? "page" : undefined}
      className={`flex items-center gap-2 rounded-[10px] p-3 transition-colors hover:bg-sage focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand ${
        current ? "bg-sage" : ""
      } ${className}`}
    >
      <span className="flex min-w-0 flex-1 flex-col gap-1">
        <span
          className={
            current
              ? "text-[13px] leading-[22.75px] font-medium text-ink underline underline-offset-2"
              : `text-[15.5px] leading-6 font-medium ${tone === "brand" ? "text-brand" : "text-ink"}`
          }
        >
          {item.label}
        </span>
        {item.description && <span className="text-[13.3px] leading-5 text-muted">{item.description}</span>}
      </span>
      {current && (
        <span className="text-[10px] leading-none font-semibold whitespace-nowrap text-brand">✓ Current</span>
      )}
    </Link>
  );
}
