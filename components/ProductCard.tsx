import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
export function ProductCard({ product }: { product: Product }) { return <Link href={`/produto/${product.id}`} className="product-card premium-card"><div className="product-image-wrap"><Image src={product.image} alt={product.name} fill unoptimized sizes="(max-width: 560px) 50vw, (max-width: 950px) 33vw, 25vw" className="product-image" /></div><div className="product-copy"><h3>{product.name}</h3><strong>{product.category === "times" ? "A partir de " : ""}{formatPrice(product.price)}</strong><span>Ver produto</span></div></Link>; }
