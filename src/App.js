import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Work from './pages/Work'
import Path from './pages/Path'

const App = () => {
    return (
        <div>
            <Nav />
            <Header />
            <Home />
            <About />
            <Path />
            <Work />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
