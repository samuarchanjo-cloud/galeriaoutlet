"use client";
import { motion } from "framer-motion";
import { ArrowRight, Store, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { messages, whatsappUrl } from "@/lib/whatsapp";

const actions = [
  { eyebrow: "Pedir e", title: <>Retirar<br />na loja</>, copy: "Seu pedido pronto na unidade mais próxima.", icon: Store, href: whatsappUrl(messages.storePickup) },
  { eyebrow: "Pedir e", title: <>Receber<br />com Uber</>, copy: "Receba rápido e com segurança.", icon: Truck, href: whatsappUrl(messages.uber) },
];

export function ActionCards() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="action-cards">{actions.map((action, index) => { const Icon = action.icon; return <a key={index} href={action.href} target="_blank" rel="noreferrer" className="action-card"><div className="action-icon-wrap"><Icon size={32} strokeWidth={1.5} /><span className="led" /></div><div className="action-copy"><small>{action.eyebrow}</small><strong>{action.title}</strong><p>{action.copy}</p></div><span className="action-arrow"><ArrowRight size={18} /></span></a>; })}</div>;
  return <div className="action-cards">{actions.map((action, index) => { const Icon = action.icon; return <motion.a key={index} href={action.href} target="_blank" rel="noreferrer" className="action-card" whileHover={{ y: -5, scale: 1.012 }} transition={{ duration: 0.25 }}>
    <div className="action-icon-wrap"><Icon size={32} strokeWidth={1.5} /><motion.span className="led" animate={{ scale: [1, 1.35, 1], opacity: [0.65, 1, 0.65] }} transition={{ repeat: Infinity, duration: 1.25 }} /></div>
    <div className="action-copy"><small>{action.eyebrow}</small><strong>{action.title}</strong><p>{action.copy}</p></div><span className="action-arrow"><ArrowRight size={18} /></span>
  </motion.a>; })}</div>;
}
