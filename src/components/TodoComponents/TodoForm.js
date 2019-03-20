import React from 'react'

const ToDoForm= props =>{
    return(
        <form>
            <input type='text'
            value={props.task}
            onChange={props.handleChanges}
            placeholder='...todo'/>
            <button onClick={props.updateList}>Add ToDo</button>
        </form>
    )
}
export default ToDoForm