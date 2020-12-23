import React, { useState } from 'react';
import './Mega.css';

import Valor from './Valor';

export default props => {

    const [qtde, setQtde] = useState(props.qtde || 6);
    const numeroInicias = gerarNumeros(qtde);
    const [numeros, setNumeros] = useState(numeroInicias);

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio;
    }

    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce(nums => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums);
                return [...nums, novoNumero];
            }, [])
            .sort((n1, n2) => n1 - n2);

        return numeros;
    }

    return (
        <div>
            <h2>Mega</h2>
            <div className="Valores">
                {numeros.map(item => {
                    return <Valor numero={item}></Valor>
                })}
            </div>
            <div className="Mega">
                <label htmlFor="qtde">Qtde: </label>
                <input min="6" max="15" type="number" name="qtde" id="qtde" value={qtde} onChange={(e) => {
                    setQtde(+e.target.value)
                }}
                />
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar Números</button>
        </div>
    )
}