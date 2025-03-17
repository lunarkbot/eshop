export interface Product {
  id: number;
  company: string;
  title: string;
  image: string;
  rating: ProductRating;
  price?: ProductPrice;
  deliveryOptions: DeliveryOptions;
  badge?: ProductBadge;
  colors?: ProductColor[];
}

export interface ProductPrice {
  value?: number;
  discount?: number;
}

export interface ProductRating {
  value: number;
  reviews: number;
}

export interface DeliveryOptions {
  delivery: string;
  packstation?: boolean;
  available?: number;
}

export interface ProductBadge {
  color: string;
  text: string;
}

export interface ProductColor {
  color: string;
  image: string;
}
