"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Icon } from "./Icon";

// Custom listbox select styled to match the form "Input" (52px, 14px padding, 14px radius,
// line border; focus = 2px brand border + 3px 16% ring) with option rows taken from "Choice"
// (sage fill + brand text when selected). Follows the WAI-ARIA select-only combobox pattern:
// focus stays on the trigger and the active option is announced via aria-activedescendant.

type SelectProps = {
  id: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  /** Muted text shown while no option is chosen (value is ""). */
  placeholder?: string;
  invalid?: boolean;
  required?: boolean;
  "aria-describedby"?: string;
};

export function Select({
  id,
  name,
  options,
  value,
  onChange,
  placeholder,
  invalid,
  required,
  "aria-describedby": describedBy,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(() => Math.max(0, options.indexOf(value)));
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const typeahead = useRef({ text: "", timer: 0 });
  const listId = `${useId()}-listbox`;
  const optionId = (index: number) => `${listId}-${index}`;

  const openList = (index = options.indexOf(value)) => {
    setActive(Math.max(0, index));
    setOpen(true);
  };

  const choose = (index: number) => {
    onChange(options[index]);
    setOpen(false);
  };

  // Outside click closes the list.
  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open]);

  // Keep the active option in view while moving through a long list.
  useEffect(() => {
    if (open) listRef.current?.querySelector(`#${CSS.escape(optionId(active))}`)?.scrollIntoView({ block: "nearest" });
  });

  const onKeyDown = (event: React.KeyboardEvent) => {
    const last = options.length - 1;
    switch (event.key) {
      case "ArrowDown":
      case "ArrowUp": {
        event.preventDefault();
        if (!open) return openList();
        const step = event.key === "ArrowDown" ? 1 : -1;
        setActive((index) => Math.min(last, Math.max(0, index + step)));
        return;
      }
      case "Home":
      case "End":
        event.preventDefault();
        if (!open) return openList(event.key === "Home" ? 0 : last);
        setActive(event.key === "Home" ? 0 : last);
        return;
      case "Enter":
      case " ":
        event.preventDefault();
        if (open) choose(active);
        else openList();
        return;
      case "Escape":
        if (open) {
          event.preventDefault();
          setOpen(false);
        }
        return;
      case "Tab":
        if (open) choose(active);
        return;
    }
    // Type-to-select: jump to the first option starting with the typed characters.
    if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
      const state = typeahead.current;
      window.clearTimeout(state.timer);
      state.text += event.key.toLowerCase();
      state.timer = window.setTimeout(() => (state.text = ""), 500);
      const match = options.findIndex((option) => option.toLowerCase().startsWith(state.text));
      if (match === -1) return;
      if (open) setActive(match);
      else onChange(options[match]);
    }
  };


  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={open ? optionId(active) : undefined}
        aria-invalid={invalid || undefined}
        aria-required={required || undefined}
        aria-describedby={describedBy}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onKeyDown}
        className={`flex h-[52px] w-full items-center gap-2 rounded-[14px] border px-[14px] text-left text-base leading-[1.5] outline-none transition-[box-shadow,border-color] focus-visible:border-2 focus-visible:border-brand focus-visible:px-[13px] focus-visible:shadow-[0_0_0_3px_rgb(40_102_92/0.16)] ${
          invalid ? "border-2 border-error bg-error-field px-[13px]" : open ? "border-2 border-brand bg-white px-[13px]" : "border-line bg-white"
        }`}
      >
        <span className={`flex-1 truncate ${value ? "text-ink" : "text-muted"}`}>{value || placeholder}</span>
        <Icon
          icon={ChevronDown}
          size={16}
          stroke={1.5}
          className={`shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <ul
        ref={listRef}
        id={listId}
        role="listbox"
        aria-labelledby={id}
        tabIndex={-1}
        hidden={!open}
        className="absolute inset-x-0 top-full z-20 mt-2 flex max-h-64 flex-col gap-1 overflow-y-auto rounded-[14px] border border-line bg-white p-1.5 shadow-[0_12px_32px_0_rgb(16_44_52/0.12)]"
      >
        {options.map((option, index) => {
          const selected = option === value;
          return (
            <li
              key={option}
              id={optionId(index)}
              role="option"
              aria-selected={selected}
              onPointerMove={() => setActive(index)}
              onPointerDown={(event) => event.preventDefault()}
              onClick={() => choose(index)}
              className={`flex min-h-11 cursor-pointer items-center gap-3 rounded-[10px] px-3 py-2.5 text-[15px] leading-[1.5] ${
                selected ? "font-medium text-brand" : "text-ink"
              } ${index === active ? "bg-sage" : ""}`}
            >
              <span className="flex-1">{option}</span>
              {selected && <Icon icon={Check} size={16} stroke={2} className="shrink-0 text-brand" />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
