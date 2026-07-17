export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: CategoryIcon;
};

export type CategoryIcon =
  | "wing"
  | "wheel"
  | "lip"
  | "diffuser"
  | "exhaust";

export type Brand = {
  id: string;
  slug: string;
  name: string;
  origin: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  brandId: string;
  categoryId: string;
  compatibleWith: string[];
  price: number;
  currency: string;
  description: string;
  specs: ProductSpec[];
  material?: string;
  inStock: boolean;
  featured?: boolean;
};

export type CartItem = {
  productId: string;
  quantity: number;
};
