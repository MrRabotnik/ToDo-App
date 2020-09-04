import React, { Component } from 'react';
import './App.css';


export default class Calculator extends Component {

    numberBtns = []

    operators = ["+", "-", "*", "/", "=", "AC", "<"]

    operatorBtns = []

    state = {
        value: "",
        operand1: "",
        operand2: "0",
        valueChange:false,
        operator: "",
    }

    changeValue(num) {
        this.setState(() => this.state.value += num)
    }

    saveValue(operator){
        this.setState(() =>{
            return {
                this.state.operand1 = this.state.value,
                this.state.operator = operator,
                this.state.value = `${this.state.operand1}${this.state.operator}${this.state.operand2}`,
            }
        })
    }

    createNumberButtons(){
        for (let i = 1; i <= 9; i++) {
            let id = `btn_number_${i}`
            this.numberBtns.push(<button onClick={() => { this.changeValue(i) }} className="number-btns" id={id}>{i}</button>)
        }
    }

    createOperatorButtons() {
        for (let i of this.operators) {
            let id = `operator_btn_${i}`
            this.operatorBtns.push(<button onClick={() => { this.saveValue(i) }} className="operator-btns" id={id}>{i}</button>)
        }
    }

    render() {
        this.createNumberButtons()
        this.createOperatorButtons()

        return ( 
            <div className = "calculator" >
                <input onChange = {()=>{} } value = { this.state.value } placeholder = "0" />
                { this.numberBtns }
                <button onClick={() => { this.changeValue(0) }} className = "number-btns" id = "btn_number_0" > 0 </button>
                { this.operatorBtns }
            </div>
        )
    }
}