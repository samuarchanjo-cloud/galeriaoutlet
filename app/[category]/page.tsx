import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { ProductsGrid } from "@/components/ProductsGrid";
import { categories, categoryLabels, products, type CategorySlug } from "@/data/products";

export function generateStaticParams() { return categories.map((category) => ({ category: category.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> { const { category } = await params; const label = categoryLabels[category as CategorySlug]; return label ? { title: label, description: `Confira a seleção de ${label.toLowerCase()} da Galeria Outlet.` } : {}; }
export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params; const label = categoryLabels[category as CategorySlug]; const visibleProducts = products.filter((item) => item.category === category); if (!label || visibleProducts.length === 0 || category === "times") notFound();
  return <><Header /><main><PageHero eyebrow="Categorias" title={label} description={`Uma seleção especial de ${label.toLowerCase()} com qualidade, estilo e preço de outlet.`} /><section className="catalog-section page-shell"><ProductsGrid products={visibleProducts} /></section></main><Footer /></>;
}

