import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import About from './pages/About'
import AllWorks from './pages/AllWorks'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Work from './pages/Work'
import Header from './components/Header'

const App = () => {
    return (
        <div className="bg-background  ">
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
