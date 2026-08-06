import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getPromotion, promotions } from "@/data/promotions";
import { messages, whatsappUrl } from "@/lib/whatsapp";

export function generateStaticParams() { return promotions.map((promotion) => ({ slug: promotion.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const promotion = getPromotion((await params).slug); return promotion ? { title: promotion.title, description: promotion.description } : {}; }
export default async function PromotionPage({ params }: { params: Promise<{ slug: string }> }) {
  const promotion = getPromotion((await params).slug); if (!promotion) notFound();
  return <><Header /><main className="detail-page page-shell"><div className="breadcrumbs"><Link href="/">Início</Link><span>/</span><Link href="/#promocoes">Promoções</Link><span>/</span><small>{promotion.shortTitle}</small></div><div className="detail-grid"><div className="detail-image promotion-detail premium-card"><Image src={promotion.image} alt={promotion.title} fill priority unoptimized sizes="(max-width: 800px) 100vw, 55vw" /></div><div className="detail-content"><span className="detail-kicker">Oferta por tempo limitado</span><h1>{promotion.shortTitle}</h1><strong className="detail-price">{promotion.price}</strong><p>{promotion.description}</p><div className="detail-note">Fale com um vendedor para consultar modelos disponíveis nesta promoção.</div><a className="whatsapp-button large" href={whatsappUrl(messages.promotion(promotion.title))} target="_blank" rel="noreferrer"><MessageCircle /> Pedir pelo WhatsApp</a></div></div></main><Footer /></>;
}
