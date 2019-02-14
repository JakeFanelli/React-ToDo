import React, { Component } from "react";

class AddItemForm extends Component {
  state = {
    value: ""
  };

  nameRef = React.createRef();

  createItem = event => {
    event.preventDefault();
    const item = {
      task: this.nameRef.current.value
    };
    this.props.addItem(item);
    event.currentTarget.reset();
    this.setState({ value: this.nameRef.current.value });
  };

  onChange = () => {
    this.setState({ value: this.nameRef.current.value });
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
          onChange={this.onChange}
        />
        <button
          disabled={this.state.value.length > 0 ? false : true}
          type="submit"
        >
          +Add Task
        </button>
      </form>
    );
  }
}

export default AddItemForm;
