import { Link } from "@tanstack/react-router";
import { ProductVisual } from "@/components/product-visual";
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

  // Safe checks for arrays to prevent .slice() errors on undefined properties
  const rawFeatures = localized.features || (product as any)?.features || [];
  const safeFeatures = Array.isArray(rawFeatures) ? rawFeatures : [];

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-xl border bg-card p-5 transition-all hover:shadow-md">
      <div>
        <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-surface">
          <ProductVisual name={product.name} />
        </div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal">
            {product.brand}
          </span>
          <Badge variant="outline">{product.category}</Badge>
        </div>
        <h3 className="font-display text-lg font-bold text-foreground group-hover:text-teal">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {localized.shortDesc}
        </p>
        
        {safeFeatures.length > 0 && (
          <ul className="mt-4 space-y-1">
            {safeFeatures.slice(0, 3).map((feat: string, i: number) => (
              <li key={i} className="text-xs text-muted-foreground">
                • {feat}
              </li>
            ))}
          </ul>
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
