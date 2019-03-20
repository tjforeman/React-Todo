// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import ToDo from './Todo'

const ToDoList= props =>{
    return(
        props.list.map((event)=>{
            return(
                <ToDo key={event.id} task={event.task} />
            )
        })
    )
}
export default ToDoList