import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <div className="container">
      <header className="header">
        <h1>Seu Carrinho</h1>
      </header>

      <main>
        {itensCarrinho.length === 0 ? (
          <div className="carrinho-vazio">
            <p>Seu carrinho está vazio.</p>
            <Link to="/#sabores" className="btn-continuar">
              Ver Produtos
            </Link>
          </div>
        ) : (
          <>
            <div className="itens-carrinho">
              {itensCarrinho.map((item) => (
                <div key={item.id} className="item-carrinho">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="item-imagem"
                  />

                  <div className="item-detalhes">
                    <h3>{item.name}</h3>
                    <p>R$ {item.price.toFixed(2)}</p>
                  </div>

                  <div className="item-quantidade">
                    <button
                      className="btn-quantidade"
                      onClick={() => alterarQuantidade(item.id, -1)}
                    >
                      -
                    </button>
                    <span>{item.quantidade}</span>
                    <button
                      className="btn-quantidade"
                      onClick={() => alterarQuantidade(item.id, 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="item-subtotal">
                    <p>R$ {(item.price * item.quantidade).toFixed(2)}</p>
                  </div>

                  <button
                    className="btn-remover"
                    onClick={() => removerItem(item.id)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>

            <div className="resumo-carrinho">
              <div className="total-carrinho">
                <h3>Total:</h3>
                <h3>R$ {total.toFixed(2)}</h3>
              </div>

              <button className="btn-finalizar">Finalizar Compra</button>
            </div>
          </>
        )}
      </main>
    </div>
  );
};
