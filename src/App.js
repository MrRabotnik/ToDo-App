import React, { Component } from 'react';
import "./App.css"


export default class Currency extends Component {

    state = {
        price: 15,
        currency: "$",
    };

    currencyChange() {
        if (this.state.currency === "$") {
            this.setState({
                price: this.state.price * 478,
                currency: "dram",
            })
            this.price = `${this.state.price * 487} Դրամ`

        } else if (this.state.currency === "dram") {
            this.setState({
                price: this.state.price / 478,
                currency: "$",
            })
            console.log(this.state.price, this.state.currency)
        }
    };

    render() {
        return (
            <div>
                <button onClick={() => {this.currencyChange()}}>Chenge Currency</button>
                <span>{this.state.price} {this.state.currency}</span>
            </div>
        );
    };
}

