import React, { useState } from 'react';
import './Input.css';

export default props => {

    const [valor, setValor] = useState('Inicial');

    function quandoMudar(e) {
        console.log(e);
        setValor(e.target.value);
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div className="Box-Input">
                <input value={valor} onChange={quandoMudar} />
               
                {
                    /* ao declarar um input sem utilizar o evento onChange no console retornará um aviso
                    dizendo que as mudanças do componente não estão sendo manipuladas,
                    deste modo o input deve ser declarao com o readOnly */
                }
                <input value={valor} readOnly />
               
                {/* componente não controlado */}
                <input value={undefined} /> 
            </div>
        </div>
    )
}