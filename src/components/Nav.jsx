import React from 'react'

import '../styles/Nav.css'

function Nav() {
    return (
        <div>
            <div className="nav">
                <button className="selected">All</button>
                <button>Active</button>
                <button>Complete</button>
            </div>
        </div>
    )
}

export default Nav
