import React, { useState } from "react";
import SingleToDo from "./SingleToDo";
import { v4 as uuidv4 } from "uuid";

function ToDoList() {
  const todoList = [
    { id: 1, task: "eat", from: "10am", to:"11am" },
    { id: 2, task: "sleep", from: "9am", to:"10am" },
    { id: 3, task: "work", from: "7am", to:"9am" },
  ];
  const [todos, setTodos] = useState(todoList);
  const [task, setTask] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  // const handleChange = (e) => {
  //   setTask(e.target.value);
  //   setFrom(e.target.value);
  //   setTo(e.target.value);
  // };
  const handleAdd = (e) => {
    e.preventDefault();
    console.log(task);
    const newTask = { id: uuidv4(), task: task, from: from, to : to };
    setTodos([...todos, newTask]);
    console.log(todos);
    setTask("");
    setFrom("");
    setTo("");
  };
  const deleteHandler = (id) => {
    console.log(id);

    const items = todos.filter((todo) => todo.id !== id);
    setTodos(items);
  };
  return (
    <div className="container justify-content-center">
      <h1>My ToDo List</h1>
      <div className="col-12 m-4">
        <form className="row">
          <input
            className="mr-4 "
            placeholder="add a new task"
            value={task}
            onChange={ (e)=>{
              setTask(e.target.value)
            }}
          />
            <input
            className="mr-4 "
            placeholder="from .."
            value={from}
            onChange={ (e)=>{
              setFrom(e.target.value)
            }
            }
          />
            <input
            className="mr-4 "
            placeholder="to .."
            value={to}
            onChange={ (e)=>{
              setTo(e.target.value)
            }
            }
          />
          <button className="btn btn-outline-success" onClick={handleAdd}>
            Add
          </button>
        </form>
      </div>
      <div>
        {todos.map((td) => {
          return (
            <div className="col-12" key={td.id}>
              <SingleToDo data={td} click={deleteHandler} />
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ToDoList;
