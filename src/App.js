import React, { Component } from 'react';
import SingleTask from './Components/SingleTask';
import './App.css';

export default class ToDo extends Component {

    state = {
        inputValue: "",
        tasks: [],
    }

    randomKey() {
        return (Math.random() + 1).toString(32)
    }

    randomColor() {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        return `rgb(${r},${g},${b})`
    }

    saveValue = (e) => {
        this.setState({
            inputValue: e.target.value,
        })
    }

    addTask = () => {
        if (this.state.inputValue === "") return;
        let randomKeyGen = this.randomKey()
        this.setState({
            tasks: [<SingleTask randomColor={this.randomColor()} key={randomKeyGen} keyGen={randomKeyGen}  value={this.state.inputValue} />, ...this.state.tasks],
            inputValue: "",
        });
    }

    render() {
        let { inputValue, tasks } = this.state
        return (
            <React.Fragment>
                <main>
                    <h1>ToDo Application</h1>
                    <div id="inputValue">
                        <input
                            onKeyPress={e => {
                                if (e.which === 13) {
                                    this.addTask()
                                }
                            }}
                            onChange={this.saveValue}
                            value={inputValue} />
                        <button onClick={this.addTask}>Add Task</button>
                    </div>
                    <div className="overflow-auto">
                        {tasks}
                    </div>
                </main>
            </React.Fragment>
        );
    }
}
