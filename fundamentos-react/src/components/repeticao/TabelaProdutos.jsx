import produtos from "../../data/produtos";
import "./TabelaProdutos.css";
import React from "react";

export default (props) => {
  const linhas = produtos.map((produto, i) => {
    return (
      <tr key={produto.id} className={i % 2 == 0 ? "Par" : "Impar"}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>R$ {produto.preco.toFixed(2).replace(".", ",")}</td>
      </tr>
    );
  });

  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Nome</td>
            <td>Preço</td>
          </tr>
          {linhas}
        </thead>
      </table>
    </div>
  );
};
