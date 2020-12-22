import './Contador.css';

import React, { Component } from 'react';

import Display from './Display';
import PassoForm from './PassoForm';
import Botoes from './Botoes';

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

    // setPasso = (e) => {
    //     this.setState({
    //         passo: +e.target.value
    //     })
    // }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    // função chamada para que as informações possam ser renderizadas na tela
    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                <Botoes setInc={this.inc} setDec={this.dec}></Botoes>
            </div>
        )
    }
}

export default Contador;