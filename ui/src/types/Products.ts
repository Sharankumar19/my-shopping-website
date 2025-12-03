// src/types/Product.ts
export interface Product {
  id: number; // number because your API returns numeric IDs
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  stock: number;
  createdAt?: string;
  updatedAt?: string;
}
