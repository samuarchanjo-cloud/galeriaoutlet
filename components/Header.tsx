"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { messages, whatsappUrl } from "@/lib/whatsapp";

const nav = [["Kits", "/kits"], ["Promoções", "/#promocoes"], ["Tênis", "/tenis"], ["Bonés", "/bones"], ["Kenner", "/kenner"], ["Shorts", "/shorts"], ["Acessórios", "/acessorios"]] as const;

export function Header() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const onScroll = () => setCompact(window.scrollY > 32); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <header className={`site-header ${compact ? "is-compact" : ""}`}>
    <div className="header-inner">
      <Link href="/" className="wordmark" aria-label="Galeria Outlet — início"><span>GALERIA</span><b>OUTLET</b></Link>
      <nav className="desktop-nav" aria-label="Navegação principal">{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <a className="whatsapp-mini" href={whatsappUrl(messages.contact)} target="_blank" rel="noreferrer"><MessageCircle size={17} /><span>Falar no WhatsApp</span></a>
      <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Abrir menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </div>
    <AnimatePresence>{open ? <motion.nav className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} aria-label="Navegação móvel">{nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<a href={whatsappUrl(messages.contact)} target="_blank" rel="noreferrer">Falar no WhatsApp</a></motion.nav> : null}</AnimatePresence>
  </header>;
}
