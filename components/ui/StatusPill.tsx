import { ClipboardList } from "lucide-react";
import { Icon } from "./Icon";

type StatusPillProps = {
  children: React.ReactNode;
  /** "review" = Status=In review component with clipboard icon (green semibold); "text" = textual status (ink regular, no icon). */
  kind?: "review" | "text";
  bg?: string;
};

/** Figma component "Status pill / In review" — 27px tall, 5/10 padding, fully rounded. */
export function StatusPill({ children, kind = "review", bg }: StatusPillProps) {
  const review = kind === "review";
  return (
    <span
      className={`inline-flex h-[27px] w-fit items-center gap-1.5 rounded-full px-2.5 text-xs leading-[1.4] whitespace-nowrap ${
        review ? "font-semibold text-brand" : "text-ink"
      } ${bg ?? (review ? "bg-sage-2" : "bg-sage")}`}
    >
      {review && <Icon icon={ClipboardList} size={14} stroke={1.5} />}
      {children}
    </span>
  );
}
