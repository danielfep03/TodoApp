import React from 'react'

import Cross from '../images/icon-cross.svg'
import Check from '../images/icon-check.svg'
import '../styles/Task.css'
import PropTypes from 'prop-types'

/**
 * @param {object} props - Task Properties
 * @param {boolean} props.completed - Is task compled?
 */

function Task({completed}) {
    return (
        <div className={'task ' + (completed && 'completed')} >
            <div className="wrapper">
                <div className={completed ? 'check__completed' : 'check'}>
                    {completed && <img src={Check} alt="" />}
                </div>
                <span className={completed ? 'completed' : ''}>Job around</span>
            </div>
            <img src={Cross} alt="" />
        </div>
    )
}

Task.propTypes = {
    completed: PropTypes.bool,
}

export default Task
