export interface Product {
  _id: string;
  name: string;
  price?: number; // Kept as optional fallback
  presentations?: Array<{
    weight: string;
    price: number;
    _key?: string;
  }>;
  image: any;
  slug: { current: string };
  // Optional fields for detailed view
  process?: string;
  roastLevel?: string;
  producer?: string;
  altitude?: string;
  agtron?: string;
  body?: any[];
  images?: Array<{
    _key: string;
    asset: any;
    altText: string;
  }>;
}
export interface ProductCardProps {
  product: Product;
}
