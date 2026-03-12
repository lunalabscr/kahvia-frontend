import ProductCard from "@/components/ProductCard";
import type { Product } from "@/interfaces/product";

interface RelatedProductsProps {
  products: Product[];
  title?: string;
}

export default function RelatedProducts({
  products,
  title,
}: RelatedProductsProps) {
  if (!products || products.length === 0) return null;

  return (
    <div>
      {title && (
        <h2 className="text-2xl font-titan font-bold text-[#b82324] mb-8">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((rp) => (
          <ProductCard key={rp._id} product={rp} />
        ))}
      </div>
    </div>
  );
}
