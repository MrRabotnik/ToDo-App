import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './App.css';

export default class ToDo extends Component {

    state = {
        inputValue: "",
        tasks: [],
        trashDisplay: "display_none",
        cursorPointer: "",
        openWarningPopUp: "none",
        selectTasksColor: "black",
        border: "",
        selecting: false,
    }

    randomKey() {
        return (Math.random() + 1).toString(32).slice(2)
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
        let taskClasses = `single-task-input ${this.state.cursorPointer}`
        this.setState({
            tasks: [
                <div key={randomKeyGen} className="single-task">
                    <input
                        className={taskClasses} 
                        value={this.state.inputValue}
                        onChange={() => { }}
                        />
                    <div className="close-btn" onClick={() => { this.removeTask(randomKeyGen) }}>
                        <span>&times;</span>
                        <div className="delete-slide">
                            Delete
                    </div>
                    </div>
                </div>, ...this.state.tasks],
            inputValue: "",
        });
    }

    removeTask = (key) => {
        this.setState({
            tasks: [...this.state.tasks.filter(task => task.key !== key)]
        })
    }

    selectingTasksStart = () => {
        if (this.state.tasks.length === 0) return;
        let taskClasses = `single-task-input ${this.state.cursorPointer ? "" : "cursor_pointer"}`
        let divClasses = `single-task ${this.state.border ? "" : "border_blue"}`
        let newTasks = this.state.tasks.map(i => {
            let randomKeyGen = this.randomKey()
            return <div key={randomKeyGen} className={divClasses} onClick={() => { this.selectingTasks(randomKeyGen) }}>
                        <input
                            className={taskClasses}
                            value={i.props.children[0].props.value}
                            onChange={e => { console.log(e.target.value) }}
                        />
                        <div className="close-btn" onClick={() => { this.removeTask(randomKeyGen) }}>
                            <span>&times;</span>
                            <div className="delete-slide">
                                Delete
                            </div>
                        </div>
                    </div>
        })
        this.setState({
            trashDisplay: this.state.trashDisplay ? "" : "display_none",
            cursorPointer: this.state.cursorPointer ? "" : "cursor_pointer",
            border: this.state.border ? "" : "border_blue",
            tasks: [...newTasks],
            selectTasksColor: this.state.trashDisplay === "display_none" ? "white" : "black",
            selecting: !this.state.selecting
        })
    }

    deSelectingTasksStart = () => {
        let taskClasses = `single-task-input`
        let divClasses = `single-task`
        let newTasks = this.state.tasks.map(i => {
            let randomKeyGen = this.randomKey()
            return <div key={randomKeyGen} className={divClasses} onClick={() => { this.selectingTasks(randomKeyGen) }}>
                <input
                    className={taskClasses}
                    value={i.props.children[0].props.value}
                    onChange={e => { console.log(e.target.value) }}
                />
                <div className="close-btn" onClick={() => { this.removeTask(randomKeyGen) }}>
                    <span>&times;</span>
                    <div className="delete-slide">
                        Delete
                    </div>
                </div>
            </div>
        })
        this.setState({
            trashDisplay: "display_none",
            cursorPointer: "",
            border: "",
            tasks: [...newTasks],
            openWarningPopUp: "none",
            selectTasksColor: "black",
            selecting: !this.state.selecting
        })
    }

    selectingTasks = (key) => {
        if (!this.state.selecting) return
        let taskClasses = `single-task-input cursor_pointer`
        let newTasks = this.state.tasks.map(i => {
            if (i.key !== key) {
                return i
            } else {
                let randomKeyGen = this.randomKey()
                let divClasses = `single-task ${i.props.className === "single-task border_red" ? "border_blue" : "border_red"}`
                return <div key={randomKeyGen} className={divClasses} onClick={() => { this.selectingTasks(randomKeyGen) }}>
                            <input
                                className={taskClasses}
                                value={i.props.children[0].props.value}
                                onChange={e => { console.log(e.target.value) }}
                            />
                            <div className="close-btn" onClick={() => { this.removeTask(randomKeyGen) }}>
                                <span>&times;</span>
                                <div className="delete-slide">
                                    Delete
                                        </div>
                            </div>
                        </div>
            }
        })
        this.setState({
            tasks: [...newTasks],
            border: this.state.border === "border_red" ? "border_blue" : "border_red"
        })
    }

    openWarningPopUp = () => {
        this.setState({
            openWarningPopUp: "flex"
        })
    }

    deletingSelectedTasks = () => {
        this.setState({
            tasks: [...this.state.tasks.filter(i => i.props.className !== "single-task border_red")],
            openWarningPopUp: "none",
        })
    }

    render() {
        let { inputValue, tasks, trashDisplay, openWarningPopUp, selectTasksColor } = this.state
        return (
            <main>
                <div className="warning_pop_up" style={{ display: openWarningPopUp}}>
                    <span>Are You Sure?</span>
                    <div>
                        <div className="yes_no_buttons" id="answer_no" onClick={this.deSelectingTasksStart}>No</div>
                        <div className="yes_no_buttons" id="answer_yes" onClick={this.deletingSelectedTasks}>Yes</div>
                    </div>
                </div>
                <h1>ToDo Application</h1>
                <div id="inputValue">
                    <input
                        onKeyPress={e => {
                            if (e.key === "Enter") {
                                this.addTask()
                            }
                        }}
                        onChange={this.saveValue}
                        value={inputValue} />
                    <button onClick={this.addTask}>Add Task</button>
                </div>
                <div className="tools_container">
                    <FontAwesomeIcon style={{color: selectTasksColor}} icon={faList} onClick={this.selectingTasksStart}/>
                    <FontAwesomeIcon className={trashDisplay} icon={faTrash} onClick={this.openWarningPopUp}/>
                </div>
                <div className="overflow-auto">
                    {tasks}
                </div>
            </main>
        );
    }
}
