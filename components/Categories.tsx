import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/products";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
export function Categories() { return <section id="categorias" className="section page-shell"><SectionTitle>Encontre por categoria</SectionTitle><div className="categories-grid">{categories.map((category, index) => <Reveal key={category.slug} delay={index * 0.045}><Link href={`/${category.slug}`} className="category-card premium-card"><Image src={category.image} alt={category.label} fill unoptimized sizes="(max-width: 600px) 50vw, 17vw" className="cover-image" /><span>{category.label}</span></Link></Reveal>)}</div></section>; }
