// Custom navigation glyphs exported from the Figma nav frames (1:751 / 1:595).

export function Chevron({ open = false, className = "" }: { open?: boolean; className?: string }) {
  return (
    <svg
      aria-hidden
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      className={`shrink-0 transition-transform ${open ? "rotate-180" : ""} ${className}`}
    >
      <path
        d="M0.851562 0.849976L5.85156 5.84998L10.8516 0.849976"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MenuGlyph() {
  return (
    <svg aria-hidden width="22" height="22" viewBox="0 0 22 22" fill="none" className="-m-px">
      <path
        d="M0.898438 0.900024H20.8984M0.898438 10.9H20.8984M0.898438 20.9H20.8984"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseGlyph() {
  return (
    <svg aria-hidden width="22" height="22" viewBox="0 0 22 22" fill="none" className="-m-px">
      <path
        d="M0.898438 0.900024L10.8984 10.9M10.8984 10.9L20.8984 20.9M10.8984 10.9L20.8984 0.900024M10.8984 10.9L0.898438 20.9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
