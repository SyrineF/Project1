import React, { useState } from "react";
import "./styles/ToDoList.css";

function SingleToDo(props) {
  const [details, setDetails] = useState(false);
  const { id, task, from, to } = props.data;

  const detailshandler = () => {
    setDetails(!details);
  };
  return (
    <div className="container">
      <div className="row background justify-content-between">
        <p>id: {id}</p>
        <h4>{task}</h4>
        <button className="btn btn-warning" onClick={detailshandler}>
          Détails
        </button>

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
      {details && (
        <div className="container">
          <form className="row justify-content-between">
            <input type="text" value={id} />
            <input type="text" value={task} />
            <input type="text" value={from} />
            <input type="text" value={to} />
            <button className="btn btn-outline-primary">Update</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default SingleToDo;
