import React, { Component } from 'react';
import './App.css';


export default class ToDo extends Component {
    state = {
        value: ""
    }

    tasks = []

    changeValue(val) {
    }

    addTask(val) {
        this.tasks.push(<p>{val}</p>)
    }

    render() {
        return (
            <React.Fragment>
                <input onChange={this.changeValue()} type="text" />
                <button onClick={() => { this.addTask(this.state.value)}}>Add Task</button>
                {this.tasks}
            </React.Fragment>
        );
    }
}