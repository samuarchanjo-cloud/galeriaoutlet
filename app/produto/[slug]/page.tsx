import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { formatPrice, getProduct, products } from "@/data/products";
import { messages, whatsappUrl } from "@/lib/whatsapp";

export function generateStaticParams() { return products.map((product) => ({ slug: product.id })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const product = getProduct((await params).slug); return product ? { title: product.name, description: product.description } : {}; }
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = getProduct((await params).slug); if (!product) notFound();
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const forwardedProtocol = requestHeaders.get("x-forwarded-proto");
  const protocol = forwardedProtocol ?? (host?.startsWith("localhost") || host?.startsWith("127.0.0.1") ? "http" : "https");
  const origin = host ? `${protocol}://${host}` : "https://galeria-outlet-rio.samuarchanjo.chatgpt.site";
  const imageUrl = new URL(product.image, origin).toString();

  return <><Header /><main className="detail-page page-shell"><div className="breadcrumbs"><Link href="/">Início</Link><span>/</span><Link href={`/${product.category === "times" ? "" : product.category}`}>Produtos</Link><span>/</span><small>{product.name}</small></div><div className="detail-grid"><div className="detail-image premium-card"><Image src={product.image} alt={product.name} fill priority unoptimized sizes="(max-width: 800px) 100vw, 55vw" /></div><div className="detail-content"><span className="detail-kicker">Galeria Outlet</span><h1>{product.name}</h1><strong className="detail-price">{product.category === "times" ? "A partir de " : ""}{formatPrice(product.price)}</strong><p>{product.description}</p><div className="detail-note">Consulte modelos e disponibilidade com nossa equipe.</div><a className="whatsapp-button large" href={whatsappUrl(messages.product(product.name, imageUrl))} target="_blank" rel="noreferrer"><MessageCircle /> Pedir pelo WhatsApp</a></div></div></main><Footer /></>;
}
