import type { LucideIcon } from "lucide-react";

type IconProps = {
  icon: LucideIcon;
  /** Rendered box size in px (matches the Figma icon frame). */
  size: number;
  /** Stroke width in px, as specified on the Figma vector. */
  stroke?: number;
  className?: string;
};

/** Lucide icon with an absolute (pixel) stroke width, matching Figma's stroke values. */
export function Icon({ icon: LucideComponent, size, stroke = 1.6, className = "" }: IconProps) {
  return (
    <LucideComponent
      aria-hidden
      width={size}
      height={size}
      strokeWidth={stroke}
      absoluteStrokeWidth
      className={`shrink-0 ${className}`}
    />
  );
}
