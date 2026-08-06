import { Award, Gift, PackageCheck, Truck } from "lucide-react";
import { Reveal } from "./Reveal";
const benefits = [[PackageCheck, "Retirada imediata", "Seu pedido pronto na hora."], [Truck, "Entrega por Uber", "Receba rápido e com segurança."], [Gift, "Ideal para presentear", "Produtos selecionados com estilo e qualidade."], [Award, "Produtos de qualidade", "As melhores marcas e os melhores produtos."]] as const;
export function Benefits() { return <Reveal><section className="benefits page-shell" aria-label="Benefícios Galeria Outlet">{benefits.map(([Icon, title, copy]) => <div className="benefit" key={title}><Icon size={34} strokeWidth={1.35} /><div><strong>{title}</strong><p>{copy}</p></div></div>)}</section></Reveal>; }

