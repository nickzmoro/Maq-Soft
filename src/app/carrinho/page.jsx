import { Cart } from "@/views/Cart";

export const metadata = {
  title: "Seu Carrinho | Maq Soft Sorvetes",
  description:
    "Confira os itens selecionados e faça seu pedido direto pelo WhatsApp da Maq Soft Sorvetes.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function CartPage() {
  return <Cart />;
}
