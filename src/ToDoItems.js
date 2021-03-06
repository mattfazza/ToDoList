import React, { Component } from "react";
import FlipMove from "react-flip-move"

class ToDoItems extends Component {

    constructor(props){
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }

    //whenever you create an task, you add a <li> element that has certain properties
    //most importantly, it deletes itself on click by passing a key to delete
    createTasks(item){
        return <li onClick={() => this.delete(item.key) }
                    key={item.key}>{item.text}</li>
    }

    delete(key){
        console.log("key is " + key);
        
        this.props.delete(key);
    }

    render(){
        var toDoEntries = this.props.entries;
        var listItems = toDoEntries.map(this.createTasks);

        return(
            <ul className = "TheList">
            <FlipMove duration={250} easing="ease-out">
            {listItems}
            </FlipMove>
            
            </ul>
    )
    };

}

export default ToDoItems;