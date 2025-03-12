import { CartContainer } from "../Cart/style.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineTrash } from "react-icons/hi";
import { AiOutlineWhatsApp, AiFillHome } from "react-icons/ai";

export const Cart = () => {
  const [itensCarrinho, setItensCarrinho] = useState([]); // estado do carrinho
  const [total, setTotal] = useState(0); // estado do total
  const [nome, setNome] = useState(""); // estado do nome

  // Carregar dados do carrinho ao iniciar
  useEffect(() => {
    carregarCarrinho();
  }, []);

  // Função para carregar o carrinho do localStorage
  const carregarCarrinho = () => {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    setItensCarrinho(carrinho);

    // Calcular o total
    const valorTotal = carrinho.reduce(
      (soma, item) => soma + item.price * item.quantidade,
      0
    );
    setTotal(valorTotal);
  };

  // Função para alterar a quantidade de um item
  const alterarQuantidade = (id, delta) => {
    const carrinhoAtualizado = itensCarrinho.map((item) => {
      if (item.id === id) {
        // Garantir quantidade mínima de 1
        const novaQuantidade = Math.max(1, item.quantidade + delta);
        return { ...item, quantidade: novaQuantidade };
      }
      return item;
    });

    // Atualizar estado e localStorage
    setItensCarrinho(carrinhoAtualizado);
    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtualizado));

    // Recalcular total
    const novoTotal = carrinhoAtualizado.reduce(
      (soma, item) => soma + item.price * item.quantidade,
      0
    );
    setTotal(novoTotal);
  };

  // Função para remover item do carrinho
  const removerItem = (id) => {
    const carrinhoAtualizado = itensCarrinho.filter((item) => item.id !== id);

    // Atualizar estado e localStorage
    setItensCarrinho(carrinhoAtualizado);
    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtualizado));

    // Recalcular total
    const novoTotal = carrinhoAtualizado.reduce(
      (soma, item) => soma + item.price * item.quantidade,
      0
    );
    setTotal(novoTotal);
  };

  // Enviar pedido ao WhatsApp da sorveteria
  const handleSubmit = (e) => {
    e.preventDefault();

    // Formata a mensagem com os itens do carrinho
    const mensagem = `Olá! Gostaria de fazer um pedido:\n\n*PRODUTOS*\n${itensCarrinho
      .map(
        (item) =>
          `• ${item.quantidade}x ${item.name} - R$ ${(
            item.price * item.quantidade
          ).toFixed(2)}`
      )
      .join("\n")}\n\n*Total*: R$ ${total.toFixed(2)}\n*Nome*: ${nome}`;

    // Número do WhatsApp da loja
    const numeroWhatsApp = "5514991629644";

    // Codifica a mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagem);

    // Cria o link do WhatsApp
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

    // Abre o WhatsApp em uma nova janela
    window.open(linkWhatsApp, "_blank");
  };

  return (
    <CartContainer>
      <div className="cart-content">
        <header>
          <div className="nav-history">
            <Link to="/" className="home">
              <AiFillHome
                size={17}
                color="rgba(0, 0, 0, 0.6)"
                className="icon-back"
              />
              Início
            </Link>
            <span>/</span>
            <p>Carrinho</p>
          </div>
          <h3>Seu Carrinho</h3>
        </header>

        <main>
          {itensCarrinho.length === 0 ? (
            <div className="empty-cart">
              <p>Seu carrinho está vazio.</p>
            </div>
          ) : (
            <>
              <div className="items-cart">
                {itensCarrinho.map((item) => (
                  <div key={item.id} className="item-cart-box">
                    <div className="image-container">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="item-image"
                      />
                    </div>

                    <div className="item-details">
                      <div>
                        <p className="item-name">{item.name}</p>
                      </div>

                      <div className="item-quantity">
                        <button
                          className="btn-quantity"
                          onClick={() => alterarQuantidade(item.id, -1)}
                        >
                          -
                        </button>
                        <span>{item.quantidade}</span>
                        <button
                          className="btn-quantity"
                          onClick={() => alterarQuantidade(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                      <div className="subtotal-remove">
                        <div className="item-subtotal">
                          <p>R$ {(item.price * item.quantidade).toFixed(2)}</p>
                        </div>

                        <button
                          className="btn-remove"
                          onClick={() => removerItem(item.id)}
                        >
                          <HiOutlineTrash
                            size={18}
                            color="#FF0000"
                            className="icon-remove"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="viaWhatsApp">
                  <AiOutlineWhatsApp size={56} color="#4CAF50" />
                  <p>
                    <span>Reserva via WhatsApp</span>
                    Conclua seu pedido e reserve agora mesmo!
                  </p>
                </div>

                <form className="cart-summary-detail" onSubmit={handleSubmit}>
                  <div className="user-name">
                    <label htmlFor="name">Nome:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Digite seu nome"
                      required
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </div>

                  <div className="detail">
                    <h3>Detalhe</h3>
                    <p>
                      Retirar em:
                      <span>R. Investigador Valdemir Nunes Medeiros</span>
                    </p>
                  </div>

                  <div className="total-cart">
                    <h3>Total:</h3>
                    <h3 className="total-price">R$ {total.toFixed(2)}</h3>
                  </div>

                  <button className="btn-finish" type="submit">
                    Enviar pedido
                  </button>
                </form>
              </div>
            </>
          )}
        </main>
      </div>
    </CartContainer>
  );
};
