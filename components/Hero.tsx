import Image from "next/image";
import { ActionCards } from "./ActionCards";
export function Hero() {
  return <section className="hero" aria-labelledby="hero-title"><Image src="/assets/hero/hero-fullscreen.png" alt="Presentes selecionados da Galeria Outlet" fill priority sizes="100vw" className="hero-image" /><div className="hero-shade" /><div className="hero-inner page-shell"><div className="hero-content"><p className="hero-kicker">Especial Dia dos Pais</p><h1 id="hero-title">O presente<br />perfeito para<br /><span>o Dia dos Pais</span></h1><p className="hero-subtitle">Camisas, tênis, bonés, Kenner,<br className="desktop-break" /> acessórios e kits exclusivos.</p><ActionCards /></div></div></section>;
}

