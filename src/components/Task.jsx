// @ts-nocheck
import React from 'react'

import Cross from '../images/icon-cross.svg'
import Check from '../images/icon-check.svg'
import PropTypes from 'prop-types'

import '../styles/Task.css'


/**
 * @param {object} props - Task Properties
 * @param {boolean} props.completed - Is task compled?
 * @param {onClick} props.handleCheck- Is task compled?
 */

function Task({completed, handleCheck, name, id}) {
    return (
        <div className={'task ' + (completed && 'completed')} >
            <div className="wrapper">
                <button className={'check ' + (completed && 'checked')} onClick={() => handleCheck(id)}>
                    {completed && <img src={Check} alt="" />}
                </button>
                <span className={completed ? 'completed' : ''}>{name}</span>
            </div>
            <img src={Cross} alt="" />
        </div>
    )
}

Task.propTypes = {
    handleCheck: PropTypes.func,
    completed: PropTypes.bool
}

export default Task
