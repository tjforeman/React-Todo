// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import ToDo from './Todo'



const ToDoList= props =>{
    return(
        props.list.map((event)=>{
            return(
                <div className='item-container'>
                <ToDo list={props.list}task={event.task} id={event.id} completed={event.completed} key={event.index} toggleItem={props.toggleItem}/>
                </div>
            )
        })
    )
}
export default ToDoList