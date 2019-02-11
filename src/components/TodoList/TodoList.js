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
        const newItems = this.state.todoItems.map(item => {
            if(item.id !== index) {
                return item;
            }
            return {
                ...item,
                completed: value
            };
        });

        this.setState({todoItems : newItems});
    };


    render() {
        return (
            <div>
                <TodoHeader addItem={this.addItem}/>
                {
                    this.state.todoItems.map(item => <TodoItem updateItem={this.updateItem} key={item.id} item={item}/>)
                }
            </div>
        );
    }
}
 
export default TodoList;