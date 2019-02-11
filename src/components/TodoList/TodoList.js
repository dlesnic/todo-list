import React, { Component } from 'react';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';


class TodoList extends Component {
    state = {
        todoItems: [],
        view: "All"
    };

    views = {
        ALL: "All",
        ACTIVE: "Active",
        COMPLETED: "Completed"
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

    changeView = (event) => {
        this.setState({
            view: event.target.value
        })
    }

    filterByView = (item) => {
        switch(this.state.view) {
            case this.views.ALL:
                return true;
            case this.views.COMPLETED:
                return item.completed;
            case this.views.ACTIVE:
                return !item.completed;
            default:
                return true;
        }
    };

    render() {
        return (
            <div>
                <TodoHeader addItem={this.addItem}/>
                {
                    this.state.todoItems
                        .filter(item => this.filterByView(item))
                        .map(item => <TodoItem updateItem={this.updateItem} key={item.id} item={item}/>)
                }
                <div>
                    <input type="button" onClick={this.changeView} value="All"/>
                    <input type="button" onClick={this.changeView} value="Active"/>
                    <input type="button" onClick={this.changeView} value="Completed"/>
                </div>
            </div>
        );
    }
}
 
export default TodoList;