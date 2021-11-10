import React, {useContext} from 'react'
import Task from './Task'
// import Resume from './Resume'
import {v4 as uuid} from 'uuid'
import AppContext from '../context/AppContext'
import '../styles/TaskList.css'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

function TaskList({completed, active}) {
    const initialState = useContext(AppContext)
    const {state, setState} = initialState

    const activeTask = state.filter((item) => item.completed === false)
    const taskCompleted = state.filter((item) => item.completed)

    const reorder = (list, startIndex, endIndex) => {
        const result = [...list]
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)

        return result
    }

    const dragEnd = (result) => {
        const {source, destination} = result
        if (!destination){
            return
        }
        if (source.index === destination.index && source.drppableId === destination.droppableId) {
            return
        }
        const newArray = reorder(state, source.index, destination.index)
        setState(newArray)
        localStorage.setItem('tasks', JSON.stringify(newArray))
    }

    if (completed)
    {
        return (
            <DragDropContext onDragEnd={dragEnd}>
                <Droppable droppableId='tasks'>
                    { (droppableProvided) => (
                        <div
                            {...droppableProvided.droppableProps}
                            ref={droppableProvided.innerRef}
                            className="task__list"
                        >

                            {taskCompleted.map(({completed, task, id}, index) => (<Draggable key={uuid()} draggableId={id} index={index}>
                                { (draggableProvided) => {
                                    return (<Task name={task} completed={completed} id={id} draggableProvided={draggableProvided}/>)
                                }}
                            </Draggable>))}

                            {droppableProvided.placeholder}

                        </div>)}
                </Droppable>
            </DragDropContext>
        )
    }

    if (active)
    {
        return (
            <DragDropContext onDragEnd={dragEnd}>
                <Droppable droppableId="tasks">
                    { (droppableProvided) => (
                        <div
                            {...droppableProvided.droppableProps}
                            ref={droppableProvided.innerRef}
                            className="task__list"
                        >

                            {activeTask.map(({completed, task, id}, index) => (<Draggable key={uuid()} draggableId={id} index={index}>
                                { (draggableProvided) => {
                                    return (<Task name={task} completed={completed} id={id} draggableProvided={draggableProvided}/>)
                                }}
                            </Draggable>))}

                            {droppableProvided.placeholder}

                        </div>)}
                </Droppable>
            </DragDropContext>
        )
    }

    return (
        <DragDropContext onDragEnd={dragEnd}>
            <Droppable droppableId="tasks">
                { (droppableProvided) => (
                    <div
                        {...droppableProvided.droppableProps}
                        ref={droppableProvided.innerRef}
                        className="task__list"
                    >

                        {state.map(({completed, task, id}, index) => (<Draggable key={uuid()} draggableId={id} index={index}>
                            { (draggableProvided) => (<Task name={task} completed={completed} id={id} draggableProvided={draggableProvided}/>) }
                        </Draggable>))}

                        {droppableProvided.placeholder}

                    </div>)}
            </Droppable>
        </DragDropContext>
    )
}

export default TaskList
