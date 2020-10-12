import "./App.css";
import React from "react";

import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParamentro from "./components/basicos/ComParamentro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from "./components/basicos/Familia";

// no export com default pode ser uma função anonima, pode ser declara também como arrowfunction
// caso o export seja sem o default a função tem que ter nome
// com Arrow Function, () simboliza que a função não tem parametros, _ simboliza que a função tem um parametro mas eles não interessam
// também não precisa ter as {} para abrir e fechar a função, sendo assim, o return é desnecessário
export default (_) => (
  <div id="App">
    <h1>Fundamento ReactJs</h1>
    <div className="Cards">
      <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
        <Familia sobrenome="Sousa"></Familia>
      </Card>
      <Card titulo="#04 - Desafio Aleatório" color="#E94C6F">
        <Aleatorio min={1} max={10}></Aleatorio>
      </Card>
      <Card titulo="#03 - Fragmento" color="#542733">
        <Fragmento />
      </Card>
      <Card titulo="#02 - Com Parâmetro" color="#5A6A62">
        <ComParamentro titulo="Situação do Aluno" aluno="Kailany" nota={9.3} />
      </Card>
      <Card titulo="#01 - Primeiro Componente" color="#C6D5CD" fontColor="#000">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
