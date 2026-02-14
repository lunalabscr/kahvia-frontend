import { useEffect, useState } from "react";
import { client } from "@/sanity/client";
import ProductCard from "./ProductCard";
import type { Product } from "@/interfaces/product";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
        _id,
        name,
        price,
        image,
        slug
      }`;
      try {
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-doto font-bold text-neutral-900 mb-4">
            Our Selections
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto font-roboto">
            Curated beans from the best coffee growing regions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
