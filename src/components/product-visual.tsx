import { FlaskConical } from "lucide-react";
import { cn } from "@/lib/utils";

const accents = {
  blue: "bg-brand-soft text-primary border-primary/15",
  teal: "bg-teal/10 text-teal border-teal/20",
  amber: "bg-chart-4/20 text-foreground border-chart-4/30",
  coral: "bg-chart-1/10 text-chart-1 border-chart-1/20",
};

export function ProductVisual({ name, accent, large = false }: { name: string; accent: keyof typeof accents; large?: boolean }) {
  return (
    <div className={cn("relative flex items-center justify-center overflow-hidden bg-surface soft-grid", large ? "min-h-[430px]" : "h-64")}>
      <div className={cn("absolute h-44 w-44 rounded-full blur-3xl opacity-70", accents[accent])} />
      <div className={cn("relative flex flex-col items-center border bg-background shadow-[0_24px_60px_-30px_color-mix(in_oklab,var(--primary)_45%,transparent)]", large ? "h-72 w-44 rounded-[2rem] p-5" : "h-44 w-28 rounded-2xl p-3", accents[accent])}>
        <div className="mb-auto flex w-full items-center justify-between border-b border-current/15 pb-2">
          <span className="font-display text-xs font-bold">VITY</span>
          <FlaskConical className="size-3.5" />
        </div>
        <span className={cn("text-center font-display font-bold leading-tight", large ? "text-xl" : "text-sm")}>{name}</span>
        <span className="mt-auto text-[9px] font-semibold uppercase tracking-[0.12em]">Catalog visual pending</span>
      </div>
    </div>
  );
}