import React from "react";

const ItemList = props => (
  <li className="task-items">
    {props.item.task}
    <button onClick={() => props.deleteItem(props.index)}>&times;</button>
  </li>
);

export default ItemList;
