export interface Reseller {
  id: string;
  seller: string;
  price: number;
  delivery_days: number;
  contact: string;
  rating: number;
  reviews: number;
  product: string;
  image: string;
  tags: {
    type: "top-pick" | "best-price" | "fastest-delivery";
    label: string;
  } | null;
}

export interface UserPreference {
  product: string;
  budget: string;
  delivery: string;
}

export interface EmailData {
  email: string;
  name: string;
  selectedDeals: Reseller[];
}

export type SortMethod = "best-match" | "price-low-high" | "fastest-delivery" | "highest-rated";
