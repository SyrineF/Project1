import React, { useState } from "react";
import "./styles/ToDoList.css";

function SingleToDo(props) {
  const [details, setDetails] = useState(false);
  const { id, task, from, to } = props.data;
  const [CurrentTask, setCurrentTask] = useState({
    id: id,
    task: task,
    from: from,
    to: to,
  });
  const detailshandler = () => {
    setDetails(!details);
  };
  return (
    <div className="container">
      <div className="row background justify-content-between">
        <p>id: {props.index}</p>
        {/* ritha index chneya ya cyr ? */}
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
            <input
              type="text"
              value={id}
              onChange={(e) => setCurrentTask({ ...CurrentTask, id: id })}
            />
            <input
              type="text"
              value={CurrentTask.task}
              onChange={(e) =>
                setCurrentTask({ ...CurrentTask, task: e.target.value })
              }
            />
            <input
              type="text"
              value={CurrentTask.from}
              onChange={(e) =>
                setCurrentTask({ ...CurrentTask, from: e.target.value })
              }
            />
            <input
              type="text"
              value={CurrentTask.to}
              onChange={(e) =>
                setCurrentTask({ ...CurrentTask, to: e.target.value })
              }
            />
            <button
              className="btn btn-outline-primary"
              onClick={(e) => {
                e.preventDefault();
                setDetails(false);
                props.update(CurrentTask, props.index);
              }}
            >
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default SingleToDo;