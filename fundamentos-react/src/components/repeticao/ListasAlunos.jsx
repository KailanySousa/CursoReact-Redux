import alunos from "../../data/alunos";
import React from "react";

export default (props) => {
  const lis = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id}) {aluno.nome} - {aluno.nota}
      </li>
    );
  });

  const styles = {
      textAlign: "left",
      listStyle: 'none'
  };
  return (
    <div>
      <ul style={styles}>{lis}</ul>
    </div>
  );
};
