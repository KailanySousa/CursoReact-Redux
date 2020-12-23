import React, { Component } from 'react';

class Valor extends Component {
    render() {
        return (
            <div className="Valor">
                <div>{this.props.numero}</div>
            </div>
        )
    }
}

export default Valor;