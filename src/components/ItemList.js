import React from "react";

const ItemList = props => (
  <li className="task-items" onClick={() => props.deleteItem(props.index)}>
    {props.item.task}
  </li>
);

export default ItemList;
