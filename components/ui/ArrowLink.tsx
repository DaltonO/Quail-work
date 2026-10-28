import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "./Icon";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  /** "spread" pushes the arrow to the far edge (card routes); "inline" keeps it beside the label. */
  layout?: "spread" | "inline";
  tone?: "brand" | "teal" | "white";
  iconSize?: 14 | 16 | 18;
  gap?: number;
  className?: string;
};

const tones = {
  brand: "text-brand",
  teal: "text-teal",
  white: "text-white",
};

/** "Route label + arrow-right" pattern (Semi Bold 14/150%). */
export function ArrowLink({
  href,
  children,
  layout = "spread",
  tone = "brand",
  iconSize = 18,
  gap = 12,
  className = "",
}: ArrowLinkProps) {
  return (
    <Link
      href={href}
      style={{ gap }}
      className={`group flex items-center text-sm leading-[1.5] font-semibold ${tones[tone]} ${
        layout === "spread" ? "w-full justify-between" : "w-fit"
      } hover:underline underline-offset-4 ${className}`}
    >
      <span>{children}</span>
      <Icon
        icon={ArrowRight}
        size={iconSize}
        className="transition-transform group-hover:translate-x-0.5"
      />
    </Link>
  );
}
