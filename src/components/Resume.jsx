import React, {useContext} from 'react'
import AppContext from '../context/AppContext'

import '../styles/Resume.css'

function Resume() {
    const initialState = useContext(AppContext)
    const {state, deleteTask} = initialState

    const activeTask = state.filter((item) => item.completed === false)
    const removeCompletedTask = () => {
        console.log(state)
        state.forEach((task) => task.completed && deleteTask(task.id))
    }

    return (
        <div className="resume">
            <span>{activeTask.length} items left</span>
            <button onClick={removeCompletedTask} className="clear__Completed">Clear Completed</button>
        </div>
    )
}

export default Resume
