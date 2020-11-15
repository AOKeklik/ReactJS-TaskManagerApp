// edit TUSUNA BASILDIGINDA editItem DE TIKLANILAN task DEGERI DONDUURLR
// useEffect SAYFA YUKLENDINGNDE CALISR, EGER editItem DA DEGER YOKSA setTitle('') BOS DONER
// YOK editItem DA DEGR VARSA setTitle ILE input ELMNTININ value SINE editItem.title DEGERI ATANIR
import React, { useState, useContext, useEffect } from 'react'
import {TaskListContext} from '../context/TaskListContext'

function TaskForm() {
    const {addTask, clearList, editItem, editTask} = useContext(TaskListContext)
    const [title, setTitle] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        if(!editItem){
            addTask(title)
            setTitle('')
        }else{
            editTask(editItem.id, title)
            setTitle('')
        }
    }

    const handleChange = e => {
        setTitle(e.target.value)
    }

    useEffect(() => {
        if(editItem){
            setTitle(editItem.title)
            //console.log('ll')
        }else{
            setTitle('')
            //console.log('pp')
        }
    }, [editItem])

    return <form onSubmit={handleSubmit} className="form">
        <input 
            value={title}
            onChange={handleChange}
            type="text" 
            className="task-input" 
            placeholder="Add a Task.."
            required />
        <div className="buttons">
            <button 
                type="submit" 
                className="btn add-task-btn">
                {editItem ? 'Edit Task' : 'Add Task'}</button>
            <button
                onClick={clearList}
                className="btn clear-btn">Clear</button>
        </div>
    </form>
}

export default TaskForm
