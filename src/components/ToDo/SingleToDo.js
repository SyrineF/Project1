import React from 'react'
import "./styles/ToDoList.css"

function SingleToDo(props) {
    const {id, task}= props.data;
    return (
        <div className="container">
            <div className="row background">
               <h4>{task}</h4>
            </div>
        </div>
        
    )
}

export default SingleToDo
