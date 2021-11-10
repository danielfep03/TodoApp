// @ts-nocheck
import React, {useContext} from 'react'

import Cross from '../images/icon-cross.svg'
import Check from '../images/icon-check.svg'

import AppContext from '../context/AppContext'
import '../styles/Task.css'

const Task = ({completed, name, id, draggableProvided}) => {
    const stateInit = useContext(AppContext)
    const {handleCheck, deleteTask} = stateInit
    return (
        <div className={'task ' + (completed && 'completed')} {...draggableProvided.draggableProps} ref={draggableProvided.innerRef} {...draggableProvided.dragHandleProps}>
            <div className="wrapper">
                <button className={'check ' + (completed && 'checked')} onClick={() => handleCheck(id)}>
                    {completed && <img src={Check} alt="" />}
                </button>
                <span className={completed ? 'completed' : ''}>{name}</span>
            </div>
            <button className='cross' onClick={() => deleteTask(id)}>
                <img src={Cross} alt="" />
            </button>
        </div>
    )
}

export default Task
