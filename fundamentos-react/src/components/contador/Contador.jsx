import React, { Component } from 'react';
import './Contador.css';

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         numero: this.props.numeroInicial
    //     }

    //     this.inc = this.inc.bind(this)
    // }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        }) // função herdada do Component 
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        }) // função herdada do Component 
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value
        })
    }

    // função chamada para que as informações possam ser renderizadas na tela
    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                        <input type="number" id="passoInput" name="passoInput" value={this.state.passo} onChange={this.setPasso} />
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}

export default Contador;