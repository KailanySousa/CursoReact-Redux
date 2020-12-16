import React from 'react';
import DiretaFilho from './DiretaFilho';

export default props => {
    return (
        <div>
            <DiretaFilho nome="Kailany" idade={18} legal={true}></DiretaFilho>
            <DiretaFilho nome="Ayla" idade={4} legal={false}></DiretaFilho>
        </div>
    )
}