import React, { Component } from "react";
import "./App.css";
import AddToDo from "./components/AddToDo";
import UpdateList from "./components/UpdateList";

class App extends Component {
  state = {
    items: {}
  };

  addItem = item => {
    const items = { ...this.state.items };
    items[`item${Date.now()}`] = item;
    this.setState({
      items
    });
  };

  updateItem = (key, updatedItem) => {
    const items = { ...this.state.items };
    items[key] = updatedItem;
    this.setState({ items });
  };

  addToList = key => {
    //take copy of state
    const items = { ...this.state.items };
    //add to items
    items[key] = items[key] + 1 || 1;
    //set state
    this.setState({ items });
  };

  render() {
    return (
      <div className="to-do">
        <AddToDo
          items={this.state.items}
          addToList={this.addToList}
          addItem={this.addItem}
        />
        <UpdateList items={this.state.items} updateItem={this.updateItem} />
      </div>
    );
  }
}

export default App;
