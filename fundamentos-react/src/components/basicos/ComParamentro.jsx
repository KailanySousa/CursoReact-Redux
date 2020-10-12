import React from "react";

export default function ComParametros(props) {
  console.log(props);
  const status = props.nota > 5 ? "Aprovado" : "Reprovado";
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        O aluno {props.subtitulo} obteve a note {props.nota} e foi {status}
      </p>
    </div>
  );
}
