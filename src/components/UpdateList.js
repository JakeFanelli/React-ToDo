import React, { Component } from "react";
import UpdateItemForm from "./UpdateItemForm";

class UpdateList extends Component {
  render() {
    return (
      <div className="manageList">
        <h2>Update List</h2>
        {Object.keys(this.props.items).map(key => (
          <UpdateItemForm
            key={key}
            index={key}
            item={this.props.items[key]}
            updateItem={this.props.updateItem}
          />
        ))}
      </div>
    );
  }
}

export default UpdateList;
