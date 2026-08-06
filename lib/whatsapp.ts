export const WHATSAPP_NUMBER = "5521995546733";
export function whatsappUrl(message: string) { return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`; }

export const messages = {
  contact: "Olá!\n\nGostaria de falar com a equipe da Galeria Outlet.",
  storePickup: "Olá!\n\nGostaria de fazer um pedido pela Galeria Outlet e retirar na loja.",
  uber: "Olá!\n\nGostaria de fazer um pedido pela Galeria Outlet e receber por Uber.",
  unit: (unit: string) => `Olá!\n\nGostaria de falar com a equipe da ${unit} da Galeria Outlet.`,
  product: (name: string, imageUrl: string) => `Olá!\n\nTenho interesse neste produto:\n\n${name}\n\nFoto do produto:\n${imageUrl}\n\nGostaria de mais informações.`,
  promotion: (name: string) => `Olá!\n\nTenho interesse na promoção:\n\n${name}\n\nGostaria de saber os modelos disponíveis.`,
};
