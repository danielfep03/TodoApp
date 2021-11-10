import React from 'react'
import Banner from './components/Banner'
import Container from './components/Container'

import useInitialState from './hooks/useInitialState'
import AppContext from './context/AppContext.js'

import './styles/App.css'

function App() {
    const initialState = useInitialState()
    return (
        <div className="App">
            <AppContext.Provider value={initialState}>
                <Banner />
                <Container />
            </AppContext.Provider>
        </div>
    )
}

export default App
