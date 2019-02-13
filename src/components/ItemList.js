import React, { Component } from "react";

class ItemList extends Component {
  render() {
    return (
      <li>
        {this.props.item.task}
        <button onClick={() => this.props.deleteItem(this.props.index)}>
          &times;
        </button>
      </li>
    );
  }
}

export default ItemList;
