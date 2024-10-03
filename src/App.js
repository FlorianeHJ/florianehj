import React from 'react'
// components
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Services from './components/Services'
import Work from './components/Work'

const App = () => {
    return (
        <div className="bg-background">
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/about" Component={About} />
                    <Route path="/work" Component={Work} />
                    <Route path="/services" Component={Services} />
                    <Route path="/contact" Component={Contact} />
                </Routes>
            </BrowserRouter>
            <div className="h-screen"></div>
        </div>
    )
}

export default App
