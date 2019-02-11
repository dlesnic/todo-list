import React, { Component } from 'react'
import './TodoItem.css';

export default class TodoItem extends Component {

    updateItem = (event) => {
        this.props.updateItem(event.target.value, this.props.item.id)
    }


    render() {

    return (
      <div className='todo-item'>
          <input
            type='text'
            value={this.props.item.text}
            className={this.props.item.checked ? "completed" : ""}/>
          <input
              type="checkbox"
              className='align-left checkbox-round'
              onChange={this.updateItem}/>
      </div>
    )}
}
