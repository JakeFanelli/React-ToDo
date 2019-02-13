import React, { Component } from "react";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";

class addToDo extends Component {
  render() {
    return (
      <div className="add-to-do">
        <h2>To Do</h2>
        <ul>
          {Object.keys(this.props.items).map(key => (
            <ItemList
              key={key}
              index={key}
              item={this.props.items[key]}
              deleteItem={this.props.deleteItem}
            />
          ))}
        </ul>
        <AddItemForm
          addToList={this.props.addToList}
          addItem={this.props.addItem}
        />
      </div>
    );
  }
}

export default addToDo;
