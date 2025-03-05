import { CartContainer } from "../Cart/style.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiArrowSmLeft, HiOutlineTrash } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";

export const Cart = () => {
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [total, setTotal] = useState(0);

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

  return (
    <CartContainer>
      <div className="cart-content">
        <header>
          <Link to="/" className="btn-back">
            <HiArrowSmLeft
              size={22}
              color="rgba(0, 0, 0, 0.9)"
              className="icon-back"
            />
            Voltar
          </Link>
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
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="item-image"
                    />

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

                <form className="cart-summary-detail">
                  <div className="user-name">
                    <label htmlFor="name">Nome:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Digite seu nome"
                      required
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
