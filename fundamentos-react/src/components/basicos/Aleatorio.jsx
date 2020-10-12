import React from "react";

export default (props) => {
  const { max, min } = props;
  const numeroSorteado = parseInt(Math.random() * (max - min) + min);
  return (
    <div>
      <h1>Aleatório</h1>
      <p>
        Sorteio de um número aleatório entre {min} e {max}{" "}
      </p>
      <p>Número sorteado: {numeroSorteado}</p>
    </div>
  );
};
