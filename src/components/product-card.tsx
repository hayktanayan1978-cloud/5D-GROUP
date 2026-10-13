import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
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
        <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-surface flex items-center justify-center p-2">
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
        
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal">
            {product.code || product.type}
          </span>
          <Badge variant="outline">{localized.category}</Badge>
        </div>

        <h3 className="font-display text-base font-bold text-foreground group-hover:text-teal">
          {product.name}
        </h3>

        {localized.purpose && (
          <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">
            {localized.purpose}
          </p>
        )}
      </div>

      <div className="mt-6">
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="inline-flex w-full items-center justify-center rounded-lg bg-secondary py-2 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-teal hover:text-white"
        >
          {lang === "ru" ? "Подробнее" : "View details"}
        </Link>
      </div>
    </article>
  );
}
