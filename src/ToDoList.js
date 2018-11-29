import React, { Component } from "react";
import ToDoItems from "./ToDoItems";
import "./ToDoList.css";

class ToDoList extends Component {

    constructor (props){
        super(props);

        this.state = {
            items: []
        }

        //binding is required for this to work
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    //addItem will look at the input from the box and add a new item in case
    //the input isn't empty
    addItem(e) {
        if (this._inputElement.value !== ""){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }

        this._inputElement.value = "";

        console.log(this.state.items);
        
        e.preventDefault();

    }

    //The key used to delete items comes from the the value 
    //the user clicks
    deleteItem(key) {
        var filteredItems = this.state.items.filter(function(item)
        {
            return(item.key !== key)
        }
        );

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return(
            <div className="ToDoListMain">
                <div className="Header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                        placeholder="enter task"></input>
                        <button type="submit">add</button>
                    </form>  
                </div>
                <ToDoItems entries={this.state.items}
                            delete={this.deleteItem}
                />
            </div>
        );
    }
}

export default ToDoList;