import React, { Component } from "react";

class AddItemForm extends Component {
  nameRef = React.createRef();

  createItem = event => {
    event.preventDefault();
    const item = {
      task: this.nameRef.current.value
    };
    this.props.addItem(item);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="add-item-form" onSubmit={this.createItem}>
        <input
          name="task"
          type="text"
          ref={this.nameRef}
          placeholder="Enter a task..."
          autoComplete="off"
        />
        <button type="submit">+Add Task</button>
      </form>
    );
  }
}

export default AddItemForm;
