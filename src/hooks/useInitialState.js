import initialState from '../initialState.js'
import {v4 as uuid} from 'uuid'

import {useState} from 'react'


const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const createTask = (name) => {
        const newTask = {id: uuid().toString(), task: name, completed: false}
        const storage = JSON.parse(localStorage.getItem('tasks'))
        storage.push(newTask)
        
        localStorage.setItem('tasks', JSON.stringify(storage))

        setState([
            ...state,
            newTask
        ])
    }

    const handleCheck = (task) => {
        const newState = state.map((item) => (item.id === task) ? {...item, 'completed': !item.completed} : item)
        localStorage.setItem('tasks', JSON.stringify(newState))
        setState([
            ...newState
        ])
    }

    const deleteTask = (task) => {
        const newState = state.filter((item) => (item.id !== task))
        localStorage.setItem('tasks', JSON.stringify(newState))
        setState([
            ...newState
        ])
    }

    const removeCompletedTask = () => {
        const newState = state.filter((item) => item.completed === false)
        setState([
            ...newState
        ])
    }

    return {
        state,
        setState,
        createTask,
        handleCheck,
        deleteTask,
        removeCompletedTask
    }
}

export default useInitialState

