import { Product } from "@/types";

export const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${baseURL}/products`);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const products = await response.json();
    return products.data || [];
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

export async function fetchSingleProduct(id: string): Promise<Product> {
  try {
    const response = await fetch(`${baseURL}/products/${id}`);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const singleProduct = await response.json();
    return singleProduct.data;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    throw error;
  }
}
