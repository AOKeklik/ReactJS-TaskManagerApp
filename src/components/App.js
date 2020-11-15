import React from 'react'

import '../App.css'
import TaskListContextProvider from '../context/TaskListContext'
import Header from './Header'
import TaskList from './TasksList'
import TaskForm from './TaskForm'

function App() {
  return <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
                <Header />
                <TaskForm />
                <TaskList />
          </div>
        </div>
      </div>
  </TaskListContextProvider>
}

export default App;
