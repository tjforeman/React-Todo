import React from 'react'

const ToDo = props => {
    return (
        <div className={`item${props.completed ? " completed": null}`} onClick={() =>props.toggleItem(props.id)}>
        <p>{props.task}</p>
        </div>
    )
}

export default ToDo;