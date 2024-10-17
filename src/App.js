import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LegaleNotices from './pages/LegaleNotices'
import ProjectDetails from './pages/ProjectDetails'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:projectId" element={<ProjectDetails />} />
                <Route path="/legalenotices" element={<LegaleNotices />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
