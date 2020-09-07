import React, { Component } from 'react';
import './App.css';


export default class ToDo extends Component {
    state = {
        value: "",
        tasksInState: [],
        key: 0,
    };

    tasks = []

    changeValue = (e) => {
        this.setState({
            value: e.target.value, 
        })
    }

    addTask(val) {
        if(val <= 0) return
        this.tasks.unshift(
            <div key={this.state.key} className="single_task">
                <span key={this.state.key + 1}>{val}</span>
                <div
                    className="del_task"
                    key={this.state.key + 2}
                    onClick={() => {
                        
                    }}
                    >
                    &times;
                </div>
            </div>
        )
        this.setState({
            tasksInState: [...this.tasks],
            value: "",
            key: this.state.key + 1,
        })
    }

    render() {
        let { value, tasksInState} = this.state
        return (
            <React.Fragment>
                <input onChange={this.changeValue} type="text" value={value}/>
                <button onClick={() => { this.addTask(value) }}>Add Task</button>
                {tasksInState}
            </React.Fragment>
        );
    }
}