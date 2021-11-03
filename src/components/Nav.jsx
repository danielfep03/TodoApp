import React, {useState} from 'react'

import '../styles/Nav.css'

function Nav({handleShowCompleted, handleShowActive, handleShowAll}) {

    const [whichShow, setWhichShow] = useState(0)
    const showActive = () => {
        setWhichShow(1)
        handleShowActive()
    }

    const showCompleted = () => {
        setWhichShow(2)
        handleShowCompleted()
    }

    const showAll = () => {
        setWhichShow(0)
        handleShowAll()
    }

    return (
        <div>
            <div className="nav">
                <button className={whichShow === 0 ? 'selected' : ''} onClick={showAll}>All</button>
                <button className={whichShow === 1 ? 'selected' : ''} onClick={showActive}>Active</button>
                <button className={whichShow === 2 ? 'selected' : ''} onClick={showCompleted}>Complete</button>
            </div>
        </div>
    )
}

export default Nav
