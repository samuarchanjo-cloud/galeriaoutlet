import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Reveal";
export function ProductsGrid({ products }: { products: Product[] }) { return <div className="products-grid">{products.map((product, index) => <Reveal key={product.id} delay={(index % 4) * 0.055}><ProductCard product={product} /></Reveal>)}</div>; }
