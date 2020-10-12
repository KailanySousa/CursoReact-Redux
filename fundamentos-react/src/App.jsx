import React from "react";

import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParamentro from "./components/basicos/ComParamentro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

// no export com default pode ser uma função anonima, pode ser declara também como arrowfunction
// caso o export seja sem o default a função tem que ter nome
// com Arrow Function, () simboliza que a função não tem parametros, _ simboliza que a função tem um parametro mas eles não interessam
// também não precisa ter as {} para abrir e fechar a função, sendo assim, o return é desnecessário
export default (_) => (
  <div id="app">
    <h1>Fundamento ReactJs</h1>
    <Card titulo="#05 - Desafio Aleatório">
      <Aleatorio min={1} max={10}></Aleatorio>
    </Card>
    <Card titulo="#03 - Fragmento">
      <Fragmento />
    </Card>
    <Card titulo="#02 - Com Parâmetro">
      <ComParamentro titulo="Situação do Aluno" aluno="Kailany" nota={9.3} />
    </Card>
    <Card titulo="#01 - Primeiro Componente">
      <Primeiro></Primeiro>
    </Card>
  </div>
);
