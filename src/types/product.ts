export type ProductStatus =
  | "active"
  | "inactive"
  | "archived";

export type ProductAvailability =
  | "available"
  | "unavailable"
  | "seasonal";

export type Product = {
  id: string;
  slug: string;
  name: string;
  images: {
    main: string;
    gallery: string[];
  };
  description: string;
  price: number;
  categories: string[];
  tags?: string[];
  rating: {
    average: number;
    count: number;
  };
  nutrition?: {
    calories?: number;
    protein?: number;
    carbohydrates?: number;
    fat?: number;
  };
  preparationTimeMinutes?: number;
  availability: {
    type: ProductAvailability;
    startDate?: string;
    endDate?: string;
  };
  status: ProductStatus;
}