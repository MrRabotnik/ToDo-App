import React, { Component } from 'react';

export default class SingleTask extends Component {
    state = {
        value: this.props.value,
        randomColor: this.props.randomColor,
        key: this.props.keyGen,
    }

    render() {
        let { key, randomColor, value } = this.state
        return (
            <div key={key} className="single-task" style={{ borderColor: randomColor, boxShadow: `0 0 5px ${randomColor}` }}>
                <input
                    className="single-task-input"
                    value={value}
                    onChange={e => {
                        this.setState({
                            value: e.target.value
                        })
                    }} />
                <div className="close-btn" onClick={() => {}}>
                    <span>&times;</span>
                    <div className="delete-slide">
                        Delete
                    </div>
                </div>
            </div>
        );
    };
};