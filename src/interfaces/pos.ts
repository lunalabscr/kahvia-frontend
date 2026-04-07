export interface PointOfSale {
  _id: string;
  language: "en" | "es";
  name: string;
  slug: {
    current: string;
  };
  type: "coffee-shop" | "supermarket" | "restaurant" | "online";
  description?: string;
  address?: string;
  city: string;
  googleMapsUrl?: string;
  phone?: string;
  website?: string;
  imageUrl?: string;
}
