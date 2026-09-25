import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return <div className={cn("max-w-2xl", center && "mx-auto text-center")}><p className="eyebrow">{eyebrow}</p><h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">{title}</h2>{text && <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">{text}</p>}</div>;
}