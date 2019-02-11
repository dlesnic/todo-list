import React, { Component } from 'react';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';


class TodoList extends Component {

    state = {
        todoItems: []
    };

    todoCounter = 1;

    addItem = (value) => {
        const todoItem = {
            id: this.todoCounter++,
            text: value,
            completed: false
        };
        this.setState({
            todoItems: [...this.state.todoItems, todoItem]
        });
    };

    updateItem = (value, index) => {
        const item = this.state.todoItems.get(index);
        item.completed = value;

    }


    render() {
        return (
            <div>
                <TodoHeader addItem={this.addItem}/>
                {
                    this.state.todoItems.map(item => <TodoItem updateItem={this.updateItem} item={item}/>)
                }
            </div>
        );
    }
}
 
export default TodoList;