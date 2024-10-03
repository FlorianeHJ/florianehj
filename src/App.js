import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'
import Work from './pages/Work'

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
