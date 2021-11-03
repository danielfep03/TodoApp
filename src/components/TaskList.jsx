import React from 'react'
import Task from './Task'
import {v4 as uuid} from 'uuid'
import  useInitialState from '../hooks/useInitialState'
import '../styles/TaskList.css'

function TaskList({completed, active}) {
    const stateInit = useInitialState()
    const {state, handleCheck} = stateInit

    const activeTask = state.filter((item) => item.completed === false)
    const taskCompleted = state.filter((item) => item.completed)

    if (completed)
    {
        return (
            <div className="task__list">
                {taskCompleted.map(({completed, task, id}) => <Task name={task} completed={completed} handleCheck={handleCheck} key={uuid()} id={id}/>)}
                <div className="resume">
                    <span>{activeTask.length} items left</span>
                    <span>Clear Completed</span>
                </div>
            </div>
        )
    }

    if (active)
    {
        return (
            <div className="task__list">
                {activeTask.map(({completed, task, id}) => <Task name={task} completed={completed} handleCheck={handleCheck} key={uuid()} id={id}/>)}
                <div className="resume">
                    <span>{activeTask.length} items left</span>
                    <span>Clear Completed</span>
                </div>
            </div>
        )
    }

    return (
        <div className="task__list">
            {state.map(({completed, task, id}) => <Task name={task} completed={completed} handleCheck={handleCheck} key={uuid()} id={id}/>)}
            <div className="resume">
                <span>{activeTask.length} items left</span>
                <span>Clear Completed</span>
            </div>
        </div>
    )
}

export default TaskList
