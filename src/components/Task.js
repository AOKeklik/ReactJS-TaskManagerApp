import React, {useContext} from 'react'
import {FaRegTrashAlt, FaRegEdit} from 'react-icons/fa'

import {TaskListContext} from '../context/TaskListContext'

function Task({task}) {
    const {removeTask, findItem} = useContext(TaskListContext)

    return <li className="list-item">
        <span>{task.title}</span>
        <div>
            <button 
                onClick={() => removeTask(task.id)}
                className="btn-delete task-btn"><i><FaRegTrashAlt /></i></button>
            <button 
                onClick={() => findItem(task.id)}
                className="btn-delete task-btn"><i><FaRegEdit /></i></button>
        </div>
    </li>
}

export default Task
