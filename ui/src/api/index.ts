import axios from "axios";
import { Product } from "../types/Products";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const api = axios.create({
  baseURL: API_BASE_URL,
});

// Fetch products
export const getProducts = async (): Promise<Product[]> => {
  const res = await api.get("/products");
  // Ensure price is number
  return res.data.map((p: any) => ({ ...p, price: Number(p.price) }));
};
