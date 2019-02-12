import React, { Component } from 'react'
import './TodoHeader.css';

const initialState = {
    inputValue: ""
};
class TodoHeader extends Component<> {
    state = {
        ...initialState
    };

    handleClick = () => {
        if(this.state.inputValue) {
            this.props.addItem(this.state.inputValue);
            this.setState({
                ...initialState
            });
        }
    };

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    };

    render() { 
        return (
            <div className='todo-header'>
                <input
                    type='text'
                    placeholder="What needs to be done"
                    value={this.state.inputValue}
                    onChange={this.handleChange}/>
                <input
                    type='button'
                    value='Apply'
                    onClick={this.handleClick}/>
            </div>
        );
    }
}
 
export default TodoHeader;