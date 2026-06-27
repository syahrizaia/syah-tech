import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Produk",
  description: "Jelajahi ekosistem produk core engine dan solusi kustom perangkat lunak dari Syah Tech.",
};

export default function ProductsPage() {
  return <ProductsClient />;
}