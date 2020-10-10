import "./index.css";
import ReactDOM from "react-dom";
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParamentro from "./components/basicos/ComParamentro";

ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
    <ComParamentro titulo="Segundo Componente" subtitulo="Muito Criativo" />
  </div>,
  document.getElementById("root")
);
