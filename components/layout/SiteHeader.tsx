"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { QuailBrand } from "@/components/ui/QuailBrand";
import { newTabProps } from "@/lib/links";
import { howItWorks, isCurrent, navGroups, quailFms, talkWithQuail, type NavGroup } from "@/lib/navigation";
import { Chevron, CloseGlyph, MenuGlyph } from "./NavIcons";
import { MenuDestination } from "./MenuDestination";

type GroupId = NavGroup["id"];

// "Main Quail header — desktop" (1:751) and "Main Quail navigation — mobile" (1:595).
// Shared "Navigation control" styling: 44px tall, 12px side padding, 10px radius,
// Medium 14/20 ink label. Open/hover = sage fill; keyboard focus = 2px inset brand border.
const controlClass =
  "inline-flex h-11 items-center gap-1.5 rounded-[10px] px-3 text-sm leading-5 font-medium text-ink transition-colors hover:bg-sage focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand";

export function SiteHeader() {
  const pathname = usePathname();
  const [openGroup, setOpenGroup] = useState<GroupId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<GroupId | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Close every menu after navigation.
  useEffect(() => {
    setOpenGroup(null);
    setMobileOpen(false);
    setMobileGroup(null);
  }, [pathname]);

  // Outside click and Escape close the desktop dropdown / mobile panel.
  useEffect(() => {
    if (!openGroup && !mobileOpen) return;
    const onPointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenGroup(null);
        setMobileOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenGroup(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [openGroup, mobileOpen]);

  const closeAll = () => {
    setOpenGroup(null);
    setMobileOpen(false);
  };

  // Desktop dropdowns also open on mouse hover. A short close delay lets the pointer cross the gap
  // between the control and the menu; touch and pen keep the click/tap behavior.
  const hoverClose = useRef<number>(undefined);
  const hovered = useRef<GroupId | null>(null);
  const hoverOpen = (id: GroupId) => (event: React.PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    window.clearTimeout(hoverClose.current);
    hovered.current = id;
    setOpenGroup(id);
  };
  const hoverLeave = (event: React.PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    hovered.current = null;
    hoverClose.current = window.setTimeout(() => setOpenGroup(null), 150);
  };
  useEffect(() => () => window.clearTimeout(hoverClose.current), []);

  return (
    <header ref={headerRef} className="relative z-50 h-20 bg-cream rule-b lg:h-24">
      {/* Desktop — "Desktop header" 1440×96, 80px side padding, space-between */}
      <div className="mx-auto hidden h-full max-w-[1440px] items-center justify-between px-20 lg:flex">
        <QuailBrand size="header" />

        <nav aria-label="Primary" className="flex items-center gap-[22px]">
          {navGroups.map((group) => {
            const open = openGroup === group.id;
            return (
              <div
                key={group.id}
                className="relative"
                onPointerEnter={hoverOpen(group.id)}
                onPointerLeave={hoverLeave}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`menu-${group.id}`}
                  // A click while the mouse is over the menu keeps it open instead of toggling it shut.
                  onClick={() => setOpenGroup(open && hovered.current !== group.id ? null : group.id)}
                  className={`${controlClass} ${open ? "bg-sage" : ""}`}
                >
                  {group.label}
                  <Chevron open={open} />
                </button>
                {open && (
                  <div
                    id={`menu-${group.id}`}
                    className={`absolute top-[calc(100%+34px)] left-0 rounded-2xl border border-line bg-white p-3 shadow-menu before:absolute before:inset-x-0 before:-top-[35px] before:h-[35px] before:content-[''] ${
                      group.id === "services" ? "w-[410px]" : "w-[440px]"
                    }`}
                  >
                    <DropdownList group={group} pathname={pathname} onNavigate={closeAll} />
                  </div>
                )}
              </div>
            );
          })}
          <Link href={howItWorks.href} className={controlClass}>
            {howItWorks.label}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a href={quailFms.href} {...newTabProps(quailFms)} className={`${controlClass} border border-line bg-sage hover:bg-[#dde6db]`}>
            {quailFms.label}
          </a>
          <Link
            href={talkWithQuail.href}
            className="inline-flex h-[52px] w-[166px] items-center justify-center rounded-[14px] bg-brand text-base leading-6 font-semibold text-white transition-colors hover:bg-[#21564d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {talkWithQuail.label}
          </Link>
        </div>
      </div>

      {/* Mobile — "Mobile header" 390×80, 24px side padding */}
      <div className="flex h-full items-center justify-between px-6 lg:hidden">
        <QuailBrand size="compact" />
        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((value) => !value)}
          className="inline-flex h-11 items-center gap-2 rounded-[10px] px-2.5 text-[13.6px] leading-5 font-medium text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand"
        >
          {mobileOpen ? "Close" : "Menu"}
          {mobileOpen ? <CloseGlyph /> : <MenuGlyph />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Primary"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-80px)] overflow-y-auto bg-cream rule-b lg:hidden"
        >
          <div className="flex flex-col gap-2 px-4 pt-4 pb-6">
            {navGroups.map((group) => {
              const open = mobileGroup === group.id;
              return (
                <div key={group.id} className="py-1 rule-b">
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`mobile-${group.id}`}
                    onClick={() => setMobileGroup(open ? null : group.id)}
                    className={`flex h-12 w-full items-center gap-2.5 rounded-[10px] px-3 text-left text-[15.5px] leading-6 font-medium text-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand ${
                      open ? "bg-sage" : ""
                    }`}
                  >
                    <span className="flex-1">{group.label}</span>
                    <Chevron open={open} />
                  </button>
                  {open && (
                    <div id={`mobile-${group.id}`} className="pt-1 pb-2 pl-2">
                      <DropdownList group={group} pathname={pathname} onNavigate={closeAll} />
                    </div>
                  )}
                </div>
              );
            })}
            <MenuDestination item={howItWorks} onNavigate={closeAll} />
            <a
              href={quailFms.href}
              {...newTabProps(quailFms)}
              className="flex h-12 items-center rounded-[10px] bg-sage px-3 text-[15.5px] leading-6 font-medium text-brand"
            >
              {quailFms.label}
            </a>
            <div className="pt-3">
              <Link
                href={talkWithQuail.href}
                onClick={closeAll}
                className="flex h-[52px] w-full items-center justify-center rounded-[14px] bg-brand text-base leading-6 font-semibold text-white"
              >
                {talkWithQuail.label}
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

function DropdownList({
  group,
  pathname,
  onNavigate,
}: {
  group: NavGroup;
  pathname: string;
  onNavigate: () => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      {group.items.map((item) => (
        <MenuDestination
          key={item.label}
          item={item}
          current={group.id === "audiences" && isCurrent(item.href, pathname)}
          onNavigate={onNavigate}
        />
      ))}
      {group.footer && (
        <div className="pt-1 rule-t">
          <MenuDestination item={group.footer} tone="brand" onNavigate={onNavigate} />
        </div>
      )}
    </div>
  );
}
