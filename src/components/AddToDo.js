import React, { Component } from "react";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";

class addToDo extends Component {
  render() {
    return (
      <div className="add-to-do">
        <ItemList items={this.props.items} />
        <AddItemForm
          addToList={this.props.addToList}
          addItem={this.props.addItem}
        />
      </div>
    );
  }
}

export default addToDo;
