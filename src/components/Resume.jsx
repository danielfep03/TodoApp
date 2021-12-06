import React, {useContext} from 'react'
import AppContext from '../context/AppContext'

import '../styles/Resume.css'

function Resume() {
    const initialState = useContext(AppContext)
    const {state, removeCompletedTask} = initialState

    const activeTask = state.filter((item) => item.completed === false)

    return (
        <div className="resume">
            <span>{activeTask.length} items left</span>
            <button onClick={removeCompletedTask} className="clear__Completed">Clear Completed</button>
        </div>
    )
}

export default Resume
