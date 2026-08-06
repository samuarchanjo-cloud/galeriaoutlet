import { Camera, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { messages, whatsappUrl } from "@/lib/whatsapp";
const units = [
  { name: "Unidade 01", lines: ["Rua Muapire, 271", "Jardim Carioca", "Ilha do Governador", "Rio de Janeiro"] },
  { name: "Unidade 02", lines: ["Rua Estocolmo, 402", "Jardim Carioca", "Ilha do Governador", "Rio de Janeiro"] },
  { name: "Unidade 03", lines: ["Rua Central, 02 BW", "Ilha do Governador", "Rio de Janeiro"] },
  { name: "Unidade 04", lines: ["Rua Magno Martins, 359", "Bancários", "Ilha do Governador", "Rio de Janeiro"] },
] as const;
export function Footer() { return <footer id="unidades" className="site-footer"><div className="page-shell"><div className="footer-title"><span>Nossas</span><h2>Unidades</h2></div><div className="units-grid">{units.map((unit) => <article className="unit-card" key={unit.name}><MapPin /><div><strong>{unit.name}</strong>{unit.lines.map((line) => <p key={line}>{line}</p>)}</div><a href={whatsappUrl(messages.unit(unit.name))} target="_blank" rel="noreferrer"><MessageCircle size={15} /> Enviar mensagem</a></article>)}</div><div className="footer-bottom"><div><span>Siga a Galeria Outlet</span><a href="#" aria-label="Instagram"><Camera size={19} /></a><a href={whatsappUrl(messages.contact)} aria-label="WhatsApp"><MessageCircle size={19} /></a></div><Link href="/" className="footer-brand"><b>Galeria</b> Outlet</Link><p>© 2026 Galeria Outlet. Todos os direitos reservados.</p></div></div></footer>; }
