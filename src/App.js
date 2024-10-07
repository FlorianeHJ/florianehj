import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './pages/About'
import AllWorks from './pages/AllWorks'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Work from './pages/Work'

const App = () => {
    return (
        <div className="bg-site  bg-no-repeat bg-cover overflow-hidden">
            <Nav />
            <Header />
            <Home />
            <About />
            <Work />
            <BrowserRouter>
                <Routes>
                    <Route path="/allworks" Component={AllWorks} />
                </Routes>
            </BrowserRouter>
            <Contact />
            <Footer />
        </div>
    )
}

export default App
