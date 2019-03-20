import React from 'react'

const ToDoForm= props =>{
    return(
        <form>
            <input type='text'
            value={props.task}
            onChange={props.handleChanges}
            placeholder='...todo'/>
            <button class='btn' onClick={props.updateList}>Add ToDo</button>
            <button class='btn'>Clear Completed</button>
        </form>
    )
}
export default ToDoForm