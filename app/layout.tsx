import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://galeria-outlet.sites.openai.com"),
  title: { default: "Galeria Outlet | Moda, presentes e ofertas no Rio", template: "%s | Galeria Outlet" },
  description: "Encontre camisas, tênis, bonés, Kenner, acessórios e kits exclusivos. Peça pelo WhatsApp e retire na loja ou receba por Uber.",
  keywords: ["Galeria Outlet", "outlet", "Ilha do Governador", "tênis", "camisas", "Kenner", "bonés"],
  openGraph: { title: "Galeria Outlet", description: "O presente perfeito está aqui. Ofertas exclusivas e atendimento pelo WhatsApp.", locale: "pt_BR", type: "website", siteName: "Galeria Outlet", images: [{ url: "/og.png", width: 1200, height: 630, alt: "O presente perfeito para o Dia dos Pais — Galeria Outlet" }] },
  twitter: { card: "summary_large_image", title: "Galeria Outlet", description: "Moda, presentes e ofertas exclusivas na Ilha do Governador.", images: ["/og.png"] },
  icons: { icon: "/assets/logo/logo.jpeg", shortcut: "/assets/logo/logo.jpeg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
