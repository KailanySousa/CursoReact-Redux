import React from 'react';

export default props => {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input type="number" id="passoInput" name="passoInput" value={props.passo} onChange={ e => props.setPasso(+e.target.value)} />
        </div>
    )
}