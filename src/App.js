import React, { Component } from 'react';
import './App.css';


export default class Calculator extends Component {

    numberBtns = []

    operators = ["+", "-", "*", "/", "=", "AC", "<"]

    operatorBtns = []

    state = {
        value: "",
        operand1: "",
        operand2: 0,
        valueChange:false,
        operator: "",
        firstOperand: true,
    }

    changeValue(num) {
        this.setState({
            value : this.state.value + num
        })
    }

    saveValue(operator) {
        if (operator === "+" || operator === "-" || operator === "*" || operator === "/") {
            this.setState({
                operand1: this.state.value,
                operator: operator,
                operand2: this.state.firstOperand ? this.state.value : eval(`${this.state.operand2} ${this.state.operator} ${this.state.operand1}`),
                value: '',
                firstOperand: false,
            },console.log(this.state))
        } else if (operator === "=") {
            this.setState({
                value: eval(`${this.state.operand2} ${this.state.operator} ${this.state.value}`) ,
                operand1: "",
                operator: "",
                firstOperand: true,
            })
        } else if (operator === "<") {
            this.setState({
                value: this.state.value.slice(0, this.state.value.length - 1),
            })
        } else {
            this.setState({
                value: "",
                operand1: "",
                operand2: 0,
                operator: "",
                firstOperand: true,
            })
        }
    }

    createNumberButtons(){
        for (let i = 1; i <= 9; i++) {
            let id = `btn_number_${i}`
            this.numberBtns.push(<button key={i} onClick={() => { this.changeValue(i) }} className="number-btns" id={id}>{i}</button>)
        }
    }

    createOperatorButtons() {
        for (let i of this.operators) {
            let id = `operator_btn_${i}`
            this.operatorBtns.push(<button key={i} onClick={() => { this.saveValue(i) }} className="operator-btns" id={id}>{i}</button>)
        }
    }

    render() {
        this.createNumberButtons()
        this.createOperatorButtons()

        return ( 
            <div className = "calculator" >
                <input onChange = {()=>{} } value = { this.state.value } placeholder = "Enter a Number" />
                { this.numberBtns }
                <button onClick={() => { this.changeValue(0) }} className = "number-btns" id = "btn_number_0" > 0 </button>
                { this.operatorBtns }
            </div>
        )
    }
}