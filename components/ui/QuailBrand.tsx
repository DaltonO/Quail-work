import Image from "next/image";
import Link from "next/link";

type QuailBrandProps = {
  /** "header" = 114×38 wordmark with 8px gap (nav spec); "page" = 114×38 with 10px gap (page frames); "compact" = 99×33 (mobile header). */
  size?: "header" | "page" | "compact";
  className?: string;
};

export function QuailBrand({ size = "page", className = "" }: QuailBrandProps) {
  const compact = size === "compact";
  return (
    <Link
      href="/"
      aria-label="Quail Work home"
      className={`inline-flex shrink-0 items-center ${size === "header" || compact ? "gap-2" : "gap-2.5"} ${className}`}
    >
      <Image
        src="/brand/quail-wordmark.png"
        alt="Quail"
        width={compact ? 99 : 114}
        height={compact ? 33 : 38}
        priority
      />
      <span className="text-[10px] leading-none font-semibold tracking-[0.015em] text-muted">
        WORK
      </span>
    </Link>
  );
}
