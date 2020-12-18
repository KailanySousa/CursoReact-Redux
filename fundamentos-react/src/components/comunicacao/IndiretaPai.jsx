import React from 'react';
import IndiretaFilho from './IndiretaFilho';

export default props => {
    let nome = '?', idade = 0, nerd = false;
    function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
        nome = nomeParam;
        idade = idadeParam;
        nerd = nerdParam;
    }
    return (
        <div>
            <div>
            </div>
            <span>{nome} </span>
            <span><strong>{idade}</strong> </span>
            <span>{nerd}</span>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}