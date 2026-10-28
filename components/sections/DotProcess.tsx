export type ProcessStage = { title: string; body: string };

/** "Process stage" row — 8px brand dot + rule, Medium 21/130 title, 17/28 body, 32 gap (employers / partners). */
export function DotProcess({
  stages,
  titleMinHeight,
  mobileGap = 28,
}: {
  stages: ProcessStage[];
  /** Figma fixes some stage-title boxes (e.g. 81px on employers) so descriptions align across columns. */
  titleMinHeight?: number;
  /** Gap between stacked stages in the 390 frame: 28 (employers) or 32 (partners). */
  mobileGap?: 28 | 32;
}) {
  return (
    <ol className={`grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 ${mobileGap === 32 ? "gap-8" : "gap-7"}`}>
      {stages.map((stage) => (
        <li key={stage.title} className="flex flex-col gap-[18px]">
          <div aria-hidden className="flex h-2 items-center gap-3">
            <span className="size-2 shrink-0 rounded-full bg-brand" />
            <span className="h-px flex-1 bg-rule" />
          </div>
          <h3
            style={{ "--title-min": titleMinHeight ? `${titleMinHeight}px` : "auto" } as React.CSSProperties}
            className="text-[21px] leading-[1.3] font-medium tracking-[-0.004em] text-ink lg:min-h-(--title-min)"
          >
            {stage.title}
          </h3>
          <p className="text-[17px] leading-7 text-muted">{stage.body}</p>
        </li>
      ))}
    </ol>
  );
}
