import React, {useState} from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'
import Nav from './Nav'

import '../styles/Container.css'

function Container() {
    const [showCompleted, setShowCompleted] = useState(false)
    const [showActive, setShowActive] = useState(false)

    const handleShowCompleted = () => {
        if (showActive === true){
            setShowActive(false)
        }
        setShowCompleted(true)
    }

    const handleShowActive = () => {
        if (showCompleted === true){
            setShowCompleted(false)
        }
        setShowActive(true)
    }

    const handleShowAll = () => {
        setShowActive(false)
        setShowCompleted(false)
    }

    return (
        <div className="container">
            <AddTask />
            <TaskList completed={showCompleted} active={showActive}/>
            <Nav handleShowCompleted={handleShowCompleted} handleShowActive={handleShowActive} handleShowAll={handleShowAll}/>
            <span>Drag and drop to reorder list</span>
        </div>
    )
}

export default Container
