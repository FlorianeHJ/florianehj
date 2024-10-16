import React from 'react'
import { useParams } from 'react-router-dom'

const projects = [
    {
        id: 1,
        name: 'Movie App',
        description: 'Une application pour chercher des films.',
        images: ['image1.jpg', 'image2.jpg'], // Remplacez par vos vraies images
    },
    {
        id: 2,
        name: 'Yoga App',
        description: 'Une application pour suivre vos séances de yoga.',
        images: ['image3.jpg', 'image4.jpg'],
    },
    // Ajoutez d'autres projets ici
]

const ProjectDetails = () => {
    const { projectId } = useParams()
    const project = projects.find((p) => p.id === parseInt(projectId))

    if (!project) {
        return <div>Projet non trouvé.</div>
    }

    return (
        <div>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            {project.images.map((image, index) => (
                <img key={index} src={image} alt={project.name} />
            ))}
        </div>
    )
}

export default ProjectDetails
