import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:projectId" element={<ProjectDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
