import React from 'react'

function SingleToDo(props) {
    const {id, task}= props.data;
    return (
        <div className="row">
            <h3>task number : {id}</h3>
            <h3>{task}</h3>
        </div>
    )
}

export default SingleToDo
