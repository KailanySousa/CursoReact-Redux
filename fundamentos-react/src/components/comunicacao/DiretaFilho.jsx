import React from 'react';

export default props => {
    return (
        <div>
            <span>{props.nome} </span>
            <span><strong>{props.idade} </strong></span>
            <span>{props.legal ? 'É legal' : 'Não é legal'} </span>
        </div>
    )
}  