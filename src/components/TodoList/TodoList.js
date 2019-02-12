import React, { Component } from 'react';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';
import TodoFooter from "../TodoFooter/TodoFooter";


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

    updateItem = (obj, index) => {
        const newItems = this.state.todoItems.map(item => {
            if(item.id !== index) {
                return item;
            }
            return Object.assign(item, obj);
        });

        this.setState({todoItems : newItems});
    };

    changeView = (value) => {
        this.setState({
            view: value
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
        const showFooter = this.state.todoItems.length > 0;
        return (
            <div>
                <TodoHeader addItem={this.addItem}/>
                {
                    this.state.todoItems
                        .filter(item => this.filterByView(item))
                        .map(item => <TodoItem updateItem={this.updateItem} key={item.id} item={item}/>)
                }
                {showFooter && <TodoFooter listSize={this.state.todoItems.length} changeView={this.changeView}/>}
            </div>
        );
    }
}
 
export default TodoList;