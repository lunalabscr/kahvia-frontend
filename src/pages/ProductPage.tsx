import { useEffect, useState, useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { PortableText } from "@portabletext/react";
import ContactButton from "../components/ContactButton";
import ProductCard from "../components/ProductCard";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import type { Product } from "@/interfaces/product";
import useEmblaCarousel from "embla-carousel-react";
import SEO from "../components/SEO";
import { useLanguage } from "@/context/LanguageContext";

export const ProductPage = () => {
  const { slug } = useParams();
  const { t, language } = useLanguage();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Embla Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedImageIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Reset carousel when product changes
  useEffect(() => {
    if (emblaApi && product) {
      emblaApi.reInit();
      setSelectedImageIndex(0);
    }
  }, [emblaApi, product]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const productQuery = `*[_type == "product" && slug.current == $slug][0]`;
        const productData = await client.fetch(productQuery, { slug });

        if (!productData) {
          setLoading(false);
          return;
        }

        setProduct(productData);
        // reInit is handled in separate useEffect

        const relatedQuery = `*[_type == "product" && _id != $id][0...4]{
            _id,
            name,
            price,
            image,
            slug
        }`;
        const relatedData = await client.fetch(relatedQuery, {
          id: productData._id,
        });
        setRelatedProducts(relatedData);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchData();
  }, [slug]);

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  if (!product)
    return (
      <div className="min-h-screen flex flex-col justify-center items-center font-roboto">
        Product not found{" "}
        <Link to={`/${language}/`} className="text-primary-600 underline mt-4">
          Go Home
        </Link>
      </div>
    );

  // Combine main image and additional images
  const allImages = [
    product.image,
    ...(product.images || []).map((img) => img),
  ].filter(Boolean);

  return (
    <div className="bg-white min-h-screen pt-20 pb-20 font-roboto">
      <SEO
        title={`${product.name} | Dos Tazas`}
        description={`Buy ${product.name} - ${product.price}`}
        canonical={`http://cafedostazas.com/${language}/product/${product.slug.current}`}
        ogImage={urlFor(product.image).width(1200).height(630).url()}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Image Carousel */}
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg relative group">
              {/* Embla Viewport */}
              <div
                ref={emblaRef}
                className="overflow-hidden rounded-lg aspect-square"
              >
                <div className="flex h-full">
                  {allImages.map((img, index) => (
                    <div className="flex-[0_0_100%] min-w-0" key={index}>
                      <img
                        src={urlFor(img).width(800).height(800).url()}
                        alt={`${product.name} - View ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={scrollPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white transition-colors z-10"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={scrollNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white transition-colors z-10"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollTo(idx)}
                    className={`relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx
                        ? "border-primary-600 ring-2 ring-primary-100"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={urlFor(img).width(100).height(100).url()}
                      className="w-full h-full object-cover"
                      alt={`View ${idx + 1}`}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div>
            <h1 className="text-4xl font-doto font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            <p className="text-2xl font-bold text-primary-600 mb-6">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(product.price)}
            </p>

            <div className="prose prose-neutral max-w-none mb-8 font-roboto text-gray-600">
              {product.body && <PortableText value={product.body} />}
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-8 text-sm">
              {product.process && (
                <div>
                  <span className="block text-gray-500 font-medium mb-1">
                    Process
                  </span>
                  <span className="font-semibold text-gray-900">
                    {product.process}
                  </span>
                </div>
              )}
              {product.roastLevel && (
                <div>
                  <span className="block text-gray-500 font-medium mb-1">
                    Roast Level
                  </span>
                  <span className="font-semibold text-gray-900">
                    {product.roastLevel}
                  </span>
                </div>
              )}
              {product.producer && (
                <div>
                  <span className="block text-gray-500 font-medium mb-1">
                    Producer
                  </span>
                  <span className="font-semibold text-gray-900">
                    {product.producer}
                  </span>
                </div>
              )}
              {product.altitude && (
                <div>
                  <span className="block text-gray-500 font-medium mb-1">
                    Altitude
                  </span>
                  <span className="font-semibold text-gray-900">
                    {product.altitude}
                  </span>
                </div>
              )}
            </div>

            <ContactButton
              className="w-full justify-center"
              message={`Hi, I'm interested in buying ${product.name}`}
            />
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-doto font-bold mb-8">
              You might also like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((rp) => (
                <ProductCard key={rp._id} product={rp} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
