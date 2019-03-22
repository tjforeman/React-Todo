import React from 'react'

const ToDoForm= props =>{
    return(
        <div className='form-container'>
        <form>
            <input class='typing' type='text'
            value={props.task}
            onChange={props.handleChanges}
            placeholder='...todo'/>
            <button class='btn' onClick={props.updateList}>Add ToDo</button>
            <button class='btn' onClick={props.clearCompleted}>Clear Completed</button>
        </form>
        </div>
    )
}
export default ToDoForm