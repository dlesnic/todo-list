import React, { Component } from 'react';
import './TodoFooter.css';


class TodoFooter extends Component {

    changeView = (event) => {
        this.props.changeView(event.target.value);
    };

    displayCount = (count) => {
       if(count === 1) {
           return `${count} item left`;
       }
        if(count > 1) {
            return `${count} items left`;
        }
    };


    render() {
        return (
            <div className='todo-footer'>
                <label className='todo-count'>{this.displayCount(this.props.listSize)}</label>
                <input type="button" onClick={this.changeView} value="All"/>
                <input type="button" onClick={this.changeView} value="Active"/>
                <input type="button" onClick={this.changeView} value="Completed"/>
            </div>
        );
    }
}
 
export default TodoFooter;