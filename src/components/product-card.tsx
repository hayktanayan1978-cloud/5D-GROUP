import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { localizeProduct, type Product } from "@/lib/products";
import { useLang } from "@/lib/lang";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const lang = useLang();
  const localized = localizeProduct(product, lang);

  if (!localized) return null;

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-xl border bg-card p-5 transition-all hover:shadow-md">
      <div>
        {/* Product Image */}
        <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-[#f4f8fb] flex items-center justify-center p-4">
          {product.image ? (
            <img 
              src={product.image} 
              alt={product.name} 
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          ) : (
            <div className="text-sm text-muted-foreground font-medium text-center">
              {product.name}
            </div>
          )}
        </div>
        
        {/* Category (Top Tag) */}
        <div className="mb-1 text-[11px] font-bold uppercase tracking-wider text-[#0066b2]">
          {localized.category}
        </div>

        {/* Product Title */}
        <h3 className="font-display text-base font-bold text-slate-900 leading-snug group-hover:text-[#0066b2] transition-colors">
          {product.name}
        </h3>

        {/* Formulation / Subtitle */}
        {localized.formulation && (
          <p className="mt-2 text-xs text-slate-500 font-medium whitespace-pre-line">
            {localized.formulation}
          </p>
        )}

        {/* Purpose / Additional details if formulation missing */}
        {!localized.formulation && localized.purpose && (
          <p className="mt-2 text-xs text-slate-500 font-medium line-clamp-2">
            {localized.purpose}
          </p>
        )}

        {/* Product Code */}
        {product.code && (
          <div className="mt-3 text-[10px] font-mono font-medium text-slate-400">
            {product.code}
          </div>
        )}
      </div>

      {/* Button at the bottom right */}
      <div className="mt-5 pt-2 flex items-center justify-between border-t border-slate-100">
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#0066b2] hover:underline"
        >
          {lang === "ru" ? "Подробнее" : "View details"}
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </article>
  );
}
