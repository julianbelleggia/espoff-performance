import { Wind, Disc3, PanelBottom, Rows3, Flame } from "lucide-react";
import type { CategoryIcon } from "@/lib/types";
import { cn } from "@/lib/utils";

const ICONS: Record<CategoryIcon, typeof Wind> = {
  wing: Wind,
  wheel: Disc3,
  lip: PanelBottom,
  diffuser: Rows3,
  exhaust: Flame,
};

export function ProductVisual({
  icon,
  label,
  className,
  iconClassName,
}: {
  icon: CategoryIcon;
  label?: string;
  className?: string;
  iconClassName?: string;
}) {
  const Icon = ICONS[icon];

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-card via-background to-card",
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 8px)",
        }}
      />
      <div className="absolute inset-0 bg-radial-glow" />
      <Icon
        className={cn(
          "relative text-foreground/25",
          iconClassName ?? "h-16 w-16"
        )}
        strokeWidth={1.25}
      />
      {label && (
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-muted-foreground/70">
          {label}
        </span>
      )}
    </div>
  );
}
