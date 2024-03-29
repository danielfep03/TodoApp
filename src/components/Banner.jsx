import React, { useState } from 'react'
// import React from 'react'

import sun from '../images/icon-sun.svg'
import moon from '../images/icon-moon.svg'

import useTheme from '../hooks/useTheme'

import '../styles/Banner.css'

function Banner() {
    const light_theme = {
        'task': '#fff',
        'background': '#F6F6F8',
        'border_dark': '#9B9BA3',
        'text': '#555660',
        'hover': 'hsl(235, 19%, 35%)'
    }

    const dark_theme = {
        'task': '#25273C',
        'background': 'hsl(235, 21%, 11%)',
        'border_dark': '#373a54',
        'text': 'hsl(234, 39%, 85%)',
        'hover': 'hsl(236, 33%, 92%)'
    }

    const [theme, setTheme] = useState(light_theme)

    const handleTheme = () => {
        let currentTheme = (JSON.stringify(dark_theme) == JSON.stringify(theme) ? light_theme : dark_theme)
        setTheme(currentTheme)
    }

    useTheme(theme)

    return (
        <div className="banner">
            <div className="banner__wrapper">
                <h1>TODO</h1>
                <button className="theme__selector" onClick={handleTheme}>
                    <img src={JSON.stringify(dark_theme) == JSON.stringify(theme) ? sun : moon} alt="Sun" />
                </button>
            </div>
        </div>
    )
}

export default Banner
