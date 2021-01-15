import React, {useState} from "react";
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
        <button className="btn btn-warning"  onClick={detailshandler}>
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
      { details &&
        <div className="container">
          <h3>task: {task}</h3>
          <h3>from: {from}</h3>
          <h3>to : {to}</h3>
          </div>
        }
    </div>
  );
}

export default SingleToDo;
