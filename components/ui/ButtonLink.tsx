import Link from "next/link";

type Variant = "primary" | "secondary" | "secondary-ink" | "attention" | "inverse" | "inverse-outline";

const variants: Record<Variant, string> = {
  // bg #28665c, white label
  primary: "bg-brand text-white border-brand hover:bg-[#21564d]",
  // cream fill, #dadfd7 border, green label
  secondary: "bg-cream text-brand border-line hover:bg-sage",
  // cream fill, #dadfd7 border, ink label
  "secondary-ink": "bg-cream text-ink border-line hover:bg-sage",
  // dark ink fill (participant page "Talk with Quail")
  attention: "bg-ink text-white border-ink hover:bg-[#1a313d]",
  // white fill on dark sections
  inverse: "bg-white text-ink border-white hover:bg-cream",
  "inverse-outline": "bg-white text-ink border-line hover:bg-cream",
};

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  /** Height in px: 56 (hero) or 52 (section). */
  height?: 52 | 56;
  /** Horizontal padding in px (24 or 28 in Figma). */
  padding?: 24 | 28;
  /** Label size in px: 15 (page buttons) or 16 (nav/employer). */
  textSize?: 15 | 16;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  height = 56,
  padding = 24,
  textSize = 15,
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-[14px] border text-center font-semibold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
        height === 56 ? "h-14" : "h-[52px]"
      } ${padding === 24 ? "px-6" : "px-7"} ${textSize === 15 ? "text-[15px]" : "text-base"} leading-6 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
