import type { LucideIcon } from "lucide-react";
import { IconTile } from "@/components/ui/IconTile";

export type Benefit = { title: string; body: string; icon: LucideIcon };

/** "Practical benefit" columns — 400px wide, 40 gap, top rule, 40px sage icon tile (employers / partners). */
export function BenefitColumns({
  items,
  stroke = 1.5,
  mobileGap = 28,
}: {
  items: Benefit[];
  stroke?: number;
  /** Gap between stacked benefits in the 390 frame: 28 (employers) or 40 (partners). */
  mobileGap?: 28 | 40;
}) {
  return (
    <div className={`grid lg:grid-cols-3 lg:gap-10 ${mobileGap === 40 ? "gap-10" : "gap-7"}`}>
      {items.map((item) => (
        <div key={item.title} className="flex flex-col gap-4 rule-t pt-6">
          <IconTile icon={item.icon} size={40} iconSize={20} radius={12} bg="bg-sage" stroke={stroke} />
          <h3 className="text-[22px] leading-[1.3] font-medium tracking-[-0.005em] text-ink">
            {item.title}
          </h3>
          <p className="text-[17px] leading-7 text-muted">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
