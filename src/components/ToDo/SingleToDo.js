import React from "react";
import "./styles/ToDoList.css";

function SingleToDo(props) {
  const { id, task } = props.data;
  return (
    <div className="container">
      <div className="row background justify-content-between">
        <p>id: {id}</p>
        <h4>{task}</h4>
        <button className="btn btn-warning">Détails</button>
        <button
          className="btn btn-danger"
          onClick={(e) => {
            e.preventDefault();
            props.click(id);
          }}
        >
          delete Task
        </button>
      </div>
    </div>
  );
}

export default SingleToDo;
