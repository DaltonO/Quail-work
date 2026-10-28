import type { LucideIcon } from "lucide-react";
import { Icon } from "./Icon";

type IconTileProps = {
  icon: LucideIcon;
  /** Tile size / icon size / radius in px, e.g. 48/24/14, 40/20/12, 32/17/9. */
  size: number;
  iconSize: number;
  radius: number;
  bg: string;
  stroke?: number;
  className?: string;
};

/** Rounded tinted square holding a brand-green Lucide icon ("Audience symbol", "Benefit symbol", "Node symbol"). */
export function IconTile({ icon, size, iconSize, radius, bg, stroke = 1.6, className = "" }: IconTileProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center text-brand ${bg} ${className}`}
      style={{ width: size, height: size, borderRadius: radius }}
    >
      <Icon icon={icon} size={iconSize} stroke={stroke} />
    </span>
  );
}
