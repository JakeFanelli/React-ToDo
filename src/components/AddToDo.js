import React from "react";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";

const addToDo = props => (
  <div className="add-to-do">
    <h2>To Do</h2>
    <ul>
      {Object.keys(props.items).map(key => (
        <ItemList
          key={key}
          index={key}
          item={props.items[key]}
          deleteItem={props.deleteItem}
        />
      ))}
    </ul>
    <AddItemForm addToList={props.addToList} addItem={props.addItem} />
  </div>
);

export default addToDo;
