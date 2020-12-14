import React from 'react';
import If, { Else } from './If.js';

export default props => {
    const usuario = props.usuario || {};
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja Bem Vindo <strong>{usuario.nome}</strong>!

                <Else>
                    Seja Bem Vinda <strong>amigona</strong>!
                </Else>
            </If>
        </div>
    )
}
