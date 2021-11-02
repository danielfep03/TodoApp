import React from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'
import Nav from './Nav'

import '../styles/Container.css'

function Container() {
    return (
        <div className="container">
            <AddTask />
            <TaskList />
            <Nav />
            <span>Drag and drop to reorder list</span>
        </div>
    )
}

export default Container
