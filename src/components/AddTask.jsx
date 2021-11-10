import React, {useState, useContext} from 'react'
import AppContext from '../context/AppContext'

import '../styles/AddTask.css'

function AddTask () {
    const [description, setDescription] = useState('')
    const initialState = useContext(AppContext)
    const {createTask} = initialState

    const handleCreateTask = (event) => {
        if (description == ''){
            return
        }
        if (event.key === 'Enter') {
            createTask(description)
            setDescription('')
        }
        else if (event.type === 'click') {
            createTask(description)
        }
    }
    return (
        <div className="add__task">
            <button className="circle" onClick={handleCreateTask}>
            </button>
            <input className="input__new__task"
                type="text"
                placeholder="Create a new todo"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onKeyUp={handleCreateTask}
            >
            </input>
        </div>
    )
}

export default AddTask
