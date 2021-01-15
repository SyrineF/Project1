import React, { useState } from "react";
import SingleToDo from "./SingleToDo";
import { v4 as uuidv4 } from "uuid";

function ToDoList() {
  const todoList = [
    { id: 1, task: "eat" },
    { id: 2, task: "sleep" },
    { id: 3, task: "work" },
  ];
  const [todos, setTodos] = useState(todoList);
  const [task, setTask] = useState("");
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    console.log(task);
    const newTask = { id: uuidv4(), task: task };
    setTodos([...todos, newTask]);
    console.log(todos);
    setTask("");
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
            onChange={handleChange}
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
