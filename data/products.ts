export type CategorySlug = "kits" | "tenis" | "bones" | "kenner" | "shorts" | "acessorios" | "times";

export type Product = {
  id: string;
  name: string;
  category: CategorySlug;
  image: string;
  price: number;
  description: string;
  featured?: boolean;
};

const product = (id: string, name: string, category: CategorySlug, file: string, price: number, description: string, featured = false): Product => ({
  id, name, category, image: `/assets/produtos/${file}`, price, description, featured,
});

export const products: Product[] = [
  product("blusa-flamengo", "Camisa Flamengo", "times", "blusa-flamengo.png", 89.9, "Camisa premium do Flamengo com acabamento confortável e visual marcante.", true),
  product("blusa-botafogo", "Camisa Botafogo", "times", "blusa-botafogo.png", 89.9, "Camisa premium do Botafogo para vestir sua paixão em qualquer ocasião.", true),
  product("blusa-fluminense", "Camisa Fluminense", "times", "blusa-fluminense.png", 89.9, "Camisa premium do Fluminense com toque macio e ótimo caimento."),
  product("blusa-vasco", "Camisa Vasco", "times", "blusa-vasco.png", 89.9, "Camisa premium do Vasco com design clássico e presença.", true),
  product("tenis-1", "Tênis Nike Air Force", "tenis", "tenis-1.png", 299.9, "Tênis versátil, confortável e pronto para acompanhar a rotina.", true),
  product("tenis-2", "Tênis Casual Branco", "tenis", "tenis-2.png", 249.9, "Modelo casual com visual limpo e construção confortável."),
  product("tenis-3", "Tênis Street Preto", "tenis", "tenis-3.png", 279.9, "Tênis urbano com acabamento premium e solado resistente."),
  product("tenis-4", "Tênis Black Edition", "tenis", "tenis-4.png", 299.9, "Edição preta com design sofisticado para diferentes combinações.", true),
  product("bone-1", "Boné Cruz de Malta", "bones", "bone-1.png", 149.9, "Boné estruturado com ajuste confortável e identidade marcante.", true),
  product("bone-2", "Boné Premium Preto", "bones", "bone-2.png", 129.9, "Boné premium com acabamento resistente e visual urbano."),
  product("bone-3", "Boné Classic", "bones", "bone-3.png", 129.9, "Modelo clássico para completar seu visual com personalidade."),
  product("bone-4", "Boné Street", "bones", "bone-4.png", 129.9, "Boné street com ótimo caimento e acabamento detalhado."),
  product("kenner-1", "Chinelo Kenner Kivah", "kenner", "kenner-1.png", 129.9, "Chinelo Kenner com conforto, durabilidade e design reconhecido.", true),
  product("kenner-2", "Chinelo Kenner Highlight", "kenner", "kenner-2.png", 139.9, "Modelo confortável para uso diário com acabamento premium."),
  product("kenner-3", "Chinelo Kenner Gold", "kenner", "kenner-3.png", 149.9, "Kenner de presença forte, solado macio e construção durável."),
  product("shorts-1", "Shorts Premium Preto", "shorts", "bermuda-1.png", 59.9, "Shorts leve, versátil e confortável para todas as horas."),
  product("shorts-2", "Shorts Sport", "shorts", "bermuda-2.png", 59.9, "Modelo esportivo com ótimo caimento e liberdade de movimento."),
  product("shorts-3", "Shorts Casual", "shorts", "bermuda-3.png", 59.9, "Shorts casual com acabamento caprichado e toque agradável."),
  product("shorts-4", "Shorts Urban", "shorts", "bermuda-4.png", 59.9, "Modelo urbano para compor looks confortáveis e modernos."),
  product("kit-1", "Kit Esportivo Premium", "kits", "kits-1.png", 149.9, "Kit completo com peças selecionadas para presentear ou renovar o visual.", true),
  product("kit-2", "Kit Casual", "kits", "kits-2.png", 149.9, "Combinação prática e premium com excelente custo-benefício."),
  product("kit-3", "Kit Street", "kits", "kits-3.png", 159.9, "Seleção de peças urbanas com visual atual e acabamento de qualidade."),
  product("kit-4", "Kit Presente", "kits", "kits-4.png", 169.9, "Kit pensado para surpreender com estilo e personalidade."),
  product("cinto", "Cinto Premium", "acessorios", "acessorio-cinto.png", 99.9, "Cinto com acabamento premium, fivela resistente e design elegante.", true),
  product("copo-flamengo", "Copo Flamengo", "acessorios", "acessorio-copo-flamengo.png", 69.9, "Copo térmico do Flamengo para manter sua bebida na temperatura ideal.", true),
  product("copo-vasco", "Copo Vasco", "acessorios", "acessorio-copo-vasco.png", 69.9, "Copo térmico do Vasco com acabamento marcante e ótima vedação."),
  product("relogio", "Relógio Sport", "acessorios", "acessorio-relogio.png", 129.9, "Relógio esportivo com visual robusto e funções para o dia a dia."),
];

export const featuredProducts = products.filter((item) => item.featured).slice(0, 8);

export const categoryLabels: Record<CategorySlug, string> = {
  kits: "Kits", tenis: "Tênis", bones: "Bonés", kenner: "Kenner", shorts: "Shorts", acessorios: "Acessórios", times: "Times",
};

export const categories = [
  { slug: "kits", label: "Kits", image: "/assets/produtos/card-categoria-kits.png" },
  { slug: "tenis", label: "Tênis", image: "/assets/produtos/card-categoria-tenis.png" },
  { slug: "bones", label: "Bonés", image: "/assets/produtos/card-categoria-bones.png" },
  { slug: "kenner", label: "Kenner", image: "/assets/produtos/card-categoria-kenner.png" },
  { slug: "shorts", label: "Shorts", image: "/assets/produtos/card-categoria-bermudas.png" },
  { slug: "acessorios", label: "Acessórios", image: "/assets/produtos/card-acessorios.png" },
] as const;

export const formatPrice = (value: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
export const getProduct = (id: string) => products.find((item) => item.id === id);

