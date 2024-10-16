import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
import Work from './pages/Work'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<ProjectDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
