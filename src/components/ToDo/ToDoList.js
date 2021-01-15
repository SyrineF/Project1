import React from "react";
import SingleToDo from "./SingleToDo";

function ToDoList() {
  const todoList = [
    { id: 1, task: "eat" },
    { id: 2, task: "sleep" },
    { id: 3, task: "work" },
  ];

  return (
      <div>
          {
              todoList.map((td)=>{
                  return(
                      <div className="col-12" key={td.id}>
                          <SingleToDo data={td}/>
                      </div>

                  );
              })
          }
      </div>

  );
}

export default ToDoList;
