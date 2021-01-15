import React from "react";
import "./styles/ToDoList.css";

function SingleToDo(props) {
  const { id, task } = props.data;
  return (
    <div className="container">
      <div className="row background">
        <h4 className="mr-4">task number : {id}</h4>
        <h4>{task}</h4>
        <button onClick={props.click}>delete Task</button>
      </div>
    </div>
  );
}

export default SingleToDo;
