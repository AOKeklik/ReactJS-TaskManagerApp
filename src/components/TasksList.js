import React, { useContext } from 'react'

import {TaskListContext} from '../context/TaskListContext'
import Task from './Task'

function TasksList() {
    const {tasks} = useContext(TaskListContext)
    return <>
        {
            tasks.length ? (
                <ul className="list">
                    {
                        tasks.map((task, index) => <Task key={index} task={task} />)
                    }
                </ul>
            ) : <div className="no-tasks">No Tasks</div>
        }
    </>
}

export default TasksList
