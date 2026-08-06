export type Promotion = { slug: string; title: string; shortTitle: string; price: string; image: string; description: string };

export const promotions: Promotion[] = [
  { slug: "3-blusas-premium", title: "3 Blusas Premium por R$ 110,00", shortTitle: "3 Blusas Premium", price: "R$ 110,00", image: "/assets/produtos/promocao-blusa-3-por-100.png", description: "Escolha três blusas premium e renove seu estilo com uma condição especial." },
  { slug: "3-regatas", title: "3 Regatas por R$ 100,00", shortTitle: "3 Regatas", price: "R$ 100,00", image: "/assets/produtos/promo-regata-3-por-100.png", description: "Leve três regatas selecionadas por um preço exclusivo na Galeria Outlet." },
  { slug: "3-bermudas", title: "3 Bermudas por R$ 100,00", shortTitle: "3 Bermudas", price: "R$ 100,00", image: "/assets/produtos/promo-bermuda-3-por-100.png", description: "Monte seu trio de bermudas e aproveite uma oferta feita para o dia a dia." },
];

export const getPromotion = (slug: string) => promotions.find((promotion) => promotion.slug === slug);

