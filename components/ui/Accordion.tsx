"use client";

import { useId, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Icon } from "./Icon";

export type AccordionItem = { question: string; answer: string };

type AccordionProps = {
  items: AccordionItem[];
  /** Question type: Medium 18/150% (employers) or Medium 17/150% (partners). */
  questionSize?: 17 | 18;
  /** Row vertical padding: 22 (employers) or 24 (partners). */
  rowPadding?: 22 | 24;
  /** Toggle glyph box: 20px/1.6 stroke (employers) or 18px/1 stroke (partners). */
  iconSize?: 18 | 20;
};

export function Accordion({
  items,
  questionSize = 18,
  rowPadding = 22,
  iconSize = 20,
}: AccordionProps) {
  // The first row starts open; opening one closes whichever was open.
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  const toggle = (index: number) => setOpen((prev) => (prev === index ? null : index));

  return (
    <div className="flex flex-col">
      {items.map((item, index) => {
        const expanded = open === index;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div
            key={item.question}
            className="flex flex-col gap-3.5 rule-t"
            style={{ paddingBlock: rowPadding }}
          >
            <h3>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className={`flex w-full items-center gap-5 text-left leading-[1.5] font-medium text-ink focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${
                  questionSize === 18 ? "text-[17px] lg:text-lg" : "text-[17px]"
                }`}
              >
                <span className="flex-1">{item.question}</span>
                <span className="text-brand">
                  <Icon
                    icon={expanded ? Minus : Plus}
                    size={iconSize}
                    stroke={iconSize === 20 ? 1.6 : 1}
                  />
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" hidden={!expanded}>
              <p className="text-[17px] leading-7 text-muted">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
