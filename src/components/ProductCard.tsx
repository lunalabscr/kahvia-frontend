import { Link } from "react-router-dom";
import { urlFor } from "@/sanity/image";
import type { Product } from "@/interfaces/product";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <Link
      to={`/product/${product.slug.current}`}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full border border-transparent hover:border-neutral-100"
    >
      <div className="aspect-square bg-neutral-50 relative overflow-hidden">
        {product.image && (
          <img
            src={urlFor(product.image).width(400).height(400).url()}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-xs font-bold tracking-wider text-primary-600 uppercase">
            Single Origin
          </span>
        </div>
        <h3 className="text-xl font-doto font-bold text-neutral-900 mb-2 leading-tight group-hover:text-primary-700 transition-colors">
          {product.name}
        </h3>

        <div className="mt-auto pt-4 flex justify-between items-end border-t border-neutral-100/50">
          <span className="text-neutral-900 font-bold text-lg">
            {formattedPrice}
          </span>
          <div className="flex items-center gap-1 text-sm font-medium text-neutral-500 group-hover:text-primary-600 transition-colors">
            Details
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
