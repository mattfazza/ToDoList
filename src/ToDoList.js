import React, { Component } from "react";
import ToDoItems from "./ToDoItems";
import "./ToDoList.css";

class ToDoList extends Component {

    constructor (props){
        super(props);

        this.state = {
            items: []
        }

        //these have to be binded in order to work
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    //If what is input in the input box isn't empty, create newItem
    addItem(e) {
        if (this._inputElement.value !== ""){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            //Utilize the previous state to append newItem
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }

        this._inputElement.value = "";

        console.log(this.state.items);
        
        //This is here to provent the default behavior that was adding
        //a bullet point before the item
        e.preventDefault();

    }

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

    //render will provide the html snippet to be included as we update the list
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