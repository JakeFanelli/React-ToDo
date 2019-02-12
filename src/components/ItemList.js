import React, { Component } from "react";

class ItemList extends Component {
  renderItems = key => {
    const item = this.props.items[key];
    return <li key={key}>{item.task}</li>;
  };

  render() {
    const itemIds = Object.keys(this.props.items);
    return (
      <div className="to-do-list">
        <h2>To Do</h2>
        <ul>{itemIds.map(this.renderItems)}</ul>
      </div>
    );
  }
}

export default ItemList;
