import initialState from '../initialState.js'

import {useState} from 'react'


const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const handleCheck = (task) => {
        const newState = state.map((item) => (item.id === task) ? {...item, 'completed': !item.completed} : item)
        setState([
            ...newState
        ])
    }

    const deleteTask = () => {
        console.log('deleted')
    
    }

    return {
        state,
        handleCheck,
        deleteTask
    }
}

export default useInitialState

