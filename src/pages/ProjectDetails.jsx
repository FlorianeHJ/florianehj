import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'
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
        name: 'Yoga Timer',
        description:
            'Yoga Timer est une application conçue pour accompagner les utilisateurs dans leur séance de Yoga.',
        aims: [
            'Favoris : En vous connectant, vous pouvez sauvegarder vos positions préférées en les ajoutant à vos favoris.',
            'Ajustement du timer : Ajustez le temps pour chaque position selon vos besoins, afin de personnaliser votre pratique.',
            'Suppression de positions : Si certaines positions ne vous conviennent pas, vous pouvez facilement les supprimer.',
            'Démarrage de compte à rebours : Lancez un compte à rebours pour chaque position de yoga sélectionnée et laissez-vous guider dans votre pratique.',
        ],
        aimsBack: [
            `Authentification: Les utilisateurs peuvent s'inscrire et se connecter à l'aide de JSON Web Token (JWT).`,
            `Gestion des favoris: Les utilisateurs authentifiés peuvent ajouter des positions de yoga à leurs favoris, qui sont stockées dans MongoDB.`,
            `Sécurité: Le backend utilise 'helmet' et 'express-rate-limit' pour protéger contre les attaques courantes.`,
        ],
        techBack: [
            'Express.js',
            'MongoDB',
            'Mongoose',
            'JWT',
            'bcrypt',
            'dotenv',
        ],
        techFront: [
            'React',
            'React Router DOM',
            'Axios',
            'Tailwind CSS',
            'React Icons',
        ],
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
            <section className="section flex flex-col justify-center items-center pt-28">
                <div className="flex flex-row justify-around items-center py-10 gap-16">
                    <img
                        className="w-1/2 shadow-xl"
                        src={project.image}
                        alt={project.name}
                    />
                    <div className="flex flex-col items-center text-center justify-center">
                        <h1 className="uppercase text-5xl font-primary py-6 ">
                            {project.name}
                        </h1>
                        <p>{project.description}</p>
                    </div>
                </div>

                <ul className="list-none mt-4">
                    {project.aims.map((aim, index) => (
                        <li
                            key={index}
                            className="flex items-start mb-4 text-lg text-gray-300 hover:text-white transition-transform duration-300 hover:scale-105"
                        >
                            <BsCheckCircle className="text-btnActive mr-2" />
                            {aim}
                        </li>
                    ))}
                </ul>
                <div>
                    <h2 className="text-3xl font-primary uppercase border-b py-5">
                        Front-End
                    </h2>

                    <ul className="list-disc list-inside mt-4">
                        {project.techFront.map((aim, index) => (
                            <li key={index} className="text-left">
                                {aim}
                            </li>
                        ))}
                    </ul>
                    <h2 className="text-3xl font-primary uppercase border-b py-5">
                        Back-End
                    </h2>
                    <ul className="list-disc list-inside mt-4">
                        {project.aimsBack.map((aim, index) => (
                            <li key={index} className="text-left">
                                {aim}
                            </li>
                        ))}
                    </ul>
                    <ul className="list-disc list-inside mt-4">
                        {project.techBack.map((aim, index) => (
                            <li key={index} className="text-left">
                                {aim}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ProjectDetails
