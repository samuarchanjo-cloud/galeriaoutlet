import Link from "next/link";
export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-hero"><div className="page-shell"><div className="breadcrumbs"><Link href="/">Início</Link><span>/</span><small>{eyebrow}</small></div><h1>{title}</h1><p>{description}</p></div></section>;
}
