import React from 'react'
import { useParams } from 'react-router-dom'
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'

const projects = [
    {
        id: 1,
        name: 'Movie App',
        description: 'Une application pour chercher des films.',
        image: Img1,
    },
    {
        id: 2,
        name: 'Yoga App',
        description: 'Une application pour suivre vos séances de yoga.',
        image: Img2,
    },
    // Ajoutez d'autres projets ici
]

const ProjectDetails = () => {
    const { projectId } = useParams()
    const project = projects.find((p) => p.id === parseInt(projectId))

    return (
        <div>
            <Nav />
            <Header />
            <section className="section flex flex-row justify-center items-center h-screen">
                <div>
                    <img
                        className="w-1/2"
                        src={project.image}
                        alt={project.name}
                    />
                </div>
                <div>
                    <h1 className="h1">{project.name}</h1>
                    <p>{project.description}</p>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ProjectDetails
