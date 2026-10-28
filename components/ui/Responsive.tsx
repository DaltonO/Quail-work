type ResponsiveProps = {
  /** Anchor id for the section. Kept on the wrapper so it is unique across both variants. */
  id?: string;
  /** Rendered below 1024px — the 390px mobile Figma frame. */
  mobile: React.ReactNode;
  /** Rendered from 1024px — the 1440px desktop Figma frame. */
  desktop: React.ReactNode;
};

/**
 * The mobile and desktop frames often use different copy and composition for the same section, so
 * each variant is rendered as drawn and swapped at the lg breakpoint.
 */
export function Responsive({ id, mobile, desktop }: ResponsiveProps) {
  return (
    <div id={id}>
      <div className="lg:hidden">{mobile}</div>
      <div className="hidden lg:block">{desktop}</div>
    </div>
  );
}
