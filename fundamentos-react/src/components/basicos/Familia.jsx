import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default (props) => {
  return (
    <div>
      <FamiliaMembro nome="Kailany" sobrenome={props.sobrenome}></FamiliaMembro>
      <FamiliaMembro nome="Ayla" {...props}></FamiliaMembro>
      <FamiliaMembro nome="Manoel" sobrenome="Gama"></FamiliaMembro>
    </div>
  );
};
