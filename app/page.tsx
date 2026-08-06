import { Benefits } from "@/components/Benefits";
import { Categories } from "@/components/Categories";
import { Countdown } from "@/components/Countdown";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ProductsGrid } from "@/components/ProductsGrid";
import { PromotionCards } from "@/components/PromotionCards";
import { SectionTitle } from "@/components/SectionTitle";
import { featuredProducts } from "@/data/products";

export default function Home() {
  return <><Header /><main><Hero /><div className="post-hero"><Countdown /><Benefits /><PromotionCards /><Categories /><section className="section page-shell" id="colecao"><SectionTitle eyebrow="Seleção especial">Coleção Dia dos Pais</SectionTitle><ProductsGrid products={featuredProducts} /></section><HowItWorks /></div></main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "LocalBusiness", name: "Galeria Outlet", description: "Moda, calçados, acessórios e presentes na Ilha do Governador.", telephone: "+55 21 99554-6733", areaServed: "Rio de Janeiro", address: { "@type": "PostalAddress", streetAddress: "Rua Muapire, 271", addressLocality: "Rio de Janeiro", addressRegion: "RJ", addressCountry: "BR" } }) }} /></>;
}
