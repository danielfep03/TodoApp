import React from 'react'
import Task from './Task'

import '../styles/TaskList.css'

function TaskList() {
    return (
        <div className="task__list">
            <Task completed = {true}/>
            <Task completed = {true}/>
            <Task completed = {false}/>
            <Task completed = {false}/>
            <Task completed = {false}/>
            <Task completed = {false}/>
            <div className="resume">
                <span>5 items left</span>
                <span>Clear Completed</span>
            </div>
        </div>
    )
}

export default TaskList
