import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import AllWorks from './pages/AllWorks'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Work from './pages/Work'

const App = () => {
    return (
        <div className="bg-background  ">
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/about" Component={About} />
                    <Route path="/work" Component={Work} />
                    <Route path="/allworks" Component={AllWorks} />
                    <Route path="/contact" Component={Contact} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
