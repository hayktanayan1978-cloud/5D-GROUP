import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { ProductVisual } from "@/components/product-visual";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_-35px_color-mix(in_oklab,var(--primary)_42%,transparent)]">
      <ProductVisual name={product.name} accent={product.accent} />
      <div className="p-5">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-primary">{product.type}</p>
        <h3 className="min-h-14 text-xl font-semibold leading-snug text-foreground">{product.name}</h3>
        <p className="mt-3 min-h-10 text-sm leading-6 text-muted-foreground">{product.formulation ?? product.ingredients.slice(0, 3).join(" · ")}</p>
        {product.code && <p className="mt-4 font-mono text-xs text-muted-foreground">{product.code}</p>}
        <Link to="/products/$slug" params={{ slug: product.slug }} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-teal">
          Product Details <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}