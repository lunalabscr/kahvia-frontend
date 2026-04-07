export interface Producer {
  _id: string;
  name: string; // e.g., "Don Elí"
  slug: { current: string }; // e.g., "don-eli"
  location: string; // e.g., "Tarrazú, Costa Rica"
  about: any[]; // Portable Text for rich formatting
  dosTazasRelationship: any[]; // Portable Text about your partnership
  mainImage: any;
  gallery: Array<{
    _key?: string;
    asset: any;
    alt?: string;
  }>;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
  language?: string;
}

export interface ProducerCardProps {
  producer: Producer;
}
