export interface Product {
  _id: string;
  name: string;
  price: number;
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
