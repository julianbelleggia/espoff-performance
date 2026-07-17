"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { catalogLinks } from "@/lib/data/catalog-links";
import { cn } from "@/lib/utils";

const SPRING_EASE = "cubic-bezier(0.34, 1.56, 0.64, 1)";

function Chevron({ className }: { className?: string }) {
  return (
    <svg
      width="11"
      height="7"
      viewBox="0 0 13 7"
      fill="none"
      className={className}
    >
      <path
        d="M0.86543 0.373845C0.55918 0.680095 0.55918 1.17385 0.86543 1.4801L6.05918 6.67385C6.30293 6.9176 6.69668 6.9176 6.94043 6.67385L12.1342 1.4801C12.4404 1.17385 12.4404 0.680095 12.1342 0.373845C11.8279 0.067595 11.3342 0.067595 11.0279 0.373845L6.49668 4.89885L1.96543 0.367595C1.66543 0.0675955 1.16543 0.067595 0.86543 0.373845Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CatalogDropdown() {
  const [open, setOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const [maxHeight, setMaxHeight] = useState("0px");

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const subRefs = useRef<Record<string, HTMLDivElement | null>>({});
  // Height of the panel with every group collapsed, measured once on mount.
  // Computing the open height analytically (base + each open group's own
  // natural height) avoids reading contentRef.scrollHeight while a nested
  // group's max-height transition is still mid-flight, which would capture
  // a stale (pre-expansion) value and permanently clip the rest of the list.
  const baseHeightRef = useRef(0);

  useLayoutEffect(() => {
    if (contentRef.current) {
      baseHeightRef.current = contentRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setOpenGroups({});
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  useEffect(() => {
    if (!open) {
      setMaxHeight("0px");
      return;
    }
    const extra = Object.entries(openGroups).reduce((sum, [label, isOpen]) => {
      if (!isOpen) return sum;
      return sum + (subRefs.current[label]?.scrollHeight ?? 0);
    }, 0);
    setMaxHeight(`${baseHeightRef.current + extra}px`);
  }, [open, openGroups]);

  const toggleGroup = (label: string) => {
    setOpenGroups((s) => ({ ...s, [label]: !s[label] }));
  };

  const closeAll = () => {
    setOpen(false);
    setOpenGroups({});
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-sm text-foreground/80 outline-none transition-colors hover:text-foreground"
      >
        Catálogo
        <span
          className="inline-flex"
          style={{
            transition: `transform 0.4s ${SPRING_EASE}`,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <Chevron />
        </span>
      </button>

      <div
        className="absolute left-0 top-full mt-4 w-56 overflow-hidden rounded-lg bg-[oklch(0.14_0_0)]"
        style={{
          maxHeight,
          boxShadow: open
            ? "0px 12px 24px rgba(0,0,0,0.45)"
            : "0px 4px 10px rgba(0,0,0,0.1)",
          transition: `max-height 0.5s ${SPRING_EASE}, box-shadow 0.4s ease`,
        }}
      >
        <div ref={contentRef} className="flex flex-col p-1">
          {catalogLinks.map((item) =>
            "children" in item ? (
              <div key={item.label}>
                <button
                  type="button"
                  onClick={() => toggleGroup(item.label)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-[13px] text-foreground/85 transition-colors hover:bg-white/10 hover:text-foreground"
                >
                  {item.label}
                  <span
                    className="inline-flex"
                    style={{
                      transition: `transform 0.4s ${SPRING_EASE}`,
                      transform: openGroups[item.label]
                        ? "rotate(90deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    <Chevron className="h-[9px] w-[9px] text-foreground/60" />
                  </span>
                </button>
                <div
                  className="overflow-hidden"
                  style={{
                    maxHeight: openGroups[item.label]
                      ? `${subRefs.current[item.label]?.scrollHeight ?? 120}px`
                      : "0px",
                    transition: `max-height 0.45s ${SPRING_EASE}`,
                  }}
                >
                  <div
                    ref={(el) => {
                      subRefs.current[item.label] = el;
                    }}
                    className="my-0.5 ml-3.5 flex flex-col border-l border-white/10 pl-3.5"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeAll}
                        className="rounded-md px-2.5 py-1.5 text-[12.5px] text-foreground/70 transition-colors hover:bg-white/10 hover:text-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeAll}
                className={cn(
                  "rounded-md px-3 py-2 text-[13px] text-foreground/85 transition-colors hover:bg-white/10 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}
