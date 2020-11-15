import React, {createContext, useState, useEffect} from 'react'

const TaskListContext = createContext()

function TaskListContextProvider(props){
    const initialState = JSON.parse(localStorage.getItem('tasks')) || []

    const [tasks, setTasks] = useState(initialState) 
        /* [
            {id: 1, title: 'Read The Book..'},
            {id: 2, title: 'Wash The Car..'},
            {id: 3, title: 'Write Some Code..'} 
        ] */
    
    const [editItem, setEditItem] = useState(null)
    
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = title => setTasks([...tasks, {id: Date.now(), title: title}])

    const removeTask = id => setTasks(tasks.filter(task => task.id !== id))

    const clearList = () => setTasks([])

    const findItem = id => {
        const item = tasks.find(task => task.id === id)
        setEditItem(item)
    } 

    const editTask = (id, title) => {
        const newTasks = tasks.map(task => (task.id === id) ? {id: id, title: title} : task )
        //console.log(newTasks)
        setTasks(newTasks)
        setEditItem(null)
    }

    return <TaskListContext.Provider value={{
        tasks, 
        addTask, 
        removeTask, 
        clearList, 
        findItem,
        editItem, 
        editTask
    }}>
        {props.children}
    </TaskListContext.Provider>
}

/*  
    var arr = [1, 2, 3, 4]
    console.log(arr.map(a => a == 3 ? 'rr' : a)) 
*/

export {TaskListContextProvider as default, TaskListContext}