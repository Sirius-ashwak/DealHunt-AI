import { Reseller } from "../types";

export const resellers: Reseller[] = [
  {
    id: "sneakerzone",
    seller: "SneakerZone",
    price: 9500,
    delivery_days: 2,
    contact: "sneakerzone@email.com",
    rating: 4.8,
    reviews: 350,
    product: "Nike Air Max '97 - Limited Edition",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    tags: {
      type: "top-pick",
      label: "Top Pick"
    }
  },
  {
    id: "hypehub",
    seller: "HypeHub",
    price: 8999,
    delivery_days: 4,
    contact: "hypehub@email.com",
    rating: 4.5,
    reviews: 210,
    product: "Nike Air Max '97 - Classic Blue",
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    tags: {
      type: "best-price",
      label: "Best Price"
    }
  },
  {
    id: "kicksexpress",
    seller: "KicksExpress",
    price: 10499,
    delivery_days: 1,
    contact: "kicksexpress@email.com",
    rating: 4.7,
    reviews: 180,
    product: "Nike Air Max '97 - Premium Edition",
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    tags: {
      type: "fastest-delivery",
      label: "Fastest Delivery"
    }
  }
];
