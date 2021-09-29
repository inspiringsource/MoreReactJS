import React from "react";

export default props => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div
      style={{
        textDecoration: props.todo.complete ? "line-through" : ""
      }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;<button color="#000000" onClick={props.onDelete}>👍</button>
  </div>
);