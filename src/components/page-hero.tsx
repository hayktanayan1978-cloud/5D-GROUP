interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-surface/30 py-12 md:py-20">
      <div className="section-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className={image ? "lg:col-span-7" : "lg:col-span-10 max-w-3xl"}>
            {eyebrow && (
              <span className="text-xs font-bold uppercase tracking-wider text-teal">
                {eyebrow}
              </span>
            )}
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>

          {image && (
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-4/3 w-full max-w-md overflow-hidden rounded-2xl border bg-card p-3 shadow-lg">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-contain rounded-xl"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
