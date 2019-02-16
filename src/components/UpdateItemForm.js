import React, { Component } from "react";

class UpdateItemForm extends Component {
  handleChange = event => {
    const updatedItem = {
      ...this.props.item,
      [event.currentTarget.name]: event.currentTarget.value
    };
    console.log(updatedItem);
    this.props.updateItem(this.props.index, updatedItem);
  };
  render() {
    return (
      <div className="item-edit">
        <input
          type="text"
          name="task"
          onChange={this.handleChange}
          defaultValue={this.props.item.task}
          autoComplete="off"
        />
      </div>
    );
  }
}

export default UpdateItemForm;
