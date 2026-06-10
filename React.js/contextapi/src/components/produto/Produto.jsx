



import { useContext, useState } from "react";
import ProdutoContext from "../../context/ProdutoContext"

const Produtos = () => {
  // state global
  const { produto, setProduto } = useContext(ProdutoContext);
  // state local
  const [novoProduto, setNovoProduto] = useState([]);

  return (
    <div>
      <h2>Produtos</h2>

      <p>
            <input
              type="text"
              placeholder="Digite o nome do produto"
              onChange={(e) => {
                setNovoProduto(e.target.value);
              }}
            />

            <button
              onClick={() => {
                setProduto(novoProduto);
              }}
            >
              Cadastrar produto
            </button>

            <h2>Produtos Cadastrados</h2>
            <p>{produto}</p>
      </p>
    </div>
  );
};

export default Produtos;
