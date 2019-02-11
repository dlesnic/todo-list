import React, { Component } from 'react'
import './TodoItem.css';

export default class TodoItem extends Component {

    updateItem = (event) => {
        this.props.updateItem(event.target.checked, this.props.item.id)
    };

    render() {
        return (
          <div className='todo-item'>
              <input
                type='text'
                defaultValue={this.props.item.text}
                className={this.props.item.completed ? "completed" : ""}/>
              <input
                  type="checkbox"
                  className='align-left checkbox-round'
                  onChange={this.updateItem}/>
          </div>
        )}
}
