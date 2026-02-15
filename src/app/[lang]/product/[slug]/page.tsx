import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { translations } from "@/i18n/translations";
import ProductView from "@/components/ProductView";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ lang: string; slug: string }>;
};

async function getProduct(slug: string, lang: string) {
  const productQuery = `*[_type == "product" && slug.current == $slug][0]`;
  return client.fetch(productQuery, { slug });
}

async function getRelatedProducts(productId: string) {
  const relatedQuery = `*[_type == "product" && _id != $id][0...4]{
    _id,
    name,
    price,
    image,
    slug
}`;
  return client.fetch(relatedQuery, { id: productId });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const product = await getProduct(slug, lang);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Dos Tazas`,
    description: `Buy ${product.name} - ${product.price}`,
    alternates: {
      canonical: `/${lang}/product/${slug}`,
    },
    openGraph: {
      images: product.image
        ? [urlFor(product.image).width(1200).height(630).url()]
        : [],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { lang, slug } = await params;
  const product = await getProduct(slug, lang);
  const t = translations[lang as "en" | "es"] || translations.en;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center font-roboto">
        {t.product.notFound}{" "}
        <Link href={`/${lang}/`} className="text-primary-600 underline mt-4">
          {t.product.backHome}
        </Link>
      </div>
    );
  }

  const relatedProducts = await getRelatedProducts(product._id);

  return <ProductView product={product} relatedProducts={relatedProducts} />;
}
