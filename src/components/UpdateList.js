import React from "react";
import UpdateItemForm from "./UpdateItemForm";

const UpdateList = props => (
  <div className="manageList">
    <h2>Update List</h2>
    {Object.keys(props.items).map(key => (
      <UpdateItemForm
        key={key}
        index={key}
        item={props.items[key]}
        updateItem={props.updateItem}
      />
    ))}
  </div>
);

export default UpdateList;
