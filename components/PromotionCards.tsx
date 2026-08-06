import Image from "next/image";
import Link from "next/link";
import { promotions } from "@/data/promotions";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
export function PromotionCards() { return <section id="promocoes" className="section page-shell"><SectionTitle eyebrow="Ofertas exclusivas">Promoções em destaque</SectionTitle><div className="promotion-grid">{promotions.map((promotion, index) => <Reveal key={promotion.slug} delay={index * 0.08}><Link href={`/promocao/${promotion.slug}`} className="promotion-card premium-card"><div className="promotion-copy"><span>{promotion.shortTitle}</span><strong>{promotion.price}</strong><small>consulte os modelos disponíveis</small></div><div className="promotion-image-wrap"><Image src={promotion.image} alt={promotion.title} fill sizes="(max-width: 760px) 100vw, 33vw" className="cover-image" /></div></Link></Reveal>)}</div></section>; }

