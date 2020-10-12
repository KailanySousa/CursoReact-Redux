import React from 'react';

export default (props) => {
    const numeroSorteado = Math.random(props.min, props.max);
    return (
        <div>
            <h1>Aleatório</h1>
            <p>Sorteio de um número aleatório entre {props.min} e {props.max} </p>
            <p>Número sorteado: {numeroSorteado}</p>
        </div>
   )
}