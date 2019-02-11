import React, { Component } from 'react'
import './TodoHeader.css';

class TodoHeader extends Component<> {

    state = {
        inputValue: ""
    }

    handleClick = () => {
        this.props.addItem(this.state.inputValue);
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }

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