import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import projectsData from '../data/projects'

const ProjectDetails = () => {
    const { projectId } = useParams()
    const project = projectsData.find((p) => p.id === parseInt(projectId))

    if (!project) {
        return <div>Projet non trouvé</div>
    }

    return (
        <div>
            <Nav />
            <Header />
            <section className="section flex flex-col justify-center items-start py-28">
                <div className="flex flex-row justify-around items-center py-10 gap-16">
                    <img
                        className="w-1/2 shadow-xl"
                        src={project.image}
                        alt={project.name}
                    />
                    <div className="flex flex-col items-center text-center justify-center">
                        <h1 className="uppercase text-5xl font-primary py-6">
                            {project.name}
                        </h1>
                        <p>{project.description}</p>
                        <div className="flex flex-row gap-16 py-10">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={project.link1}
                            >
                                <button className="btn">Github</button>
                            </a>
                            {project.link2 && (
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={project.link2}
                                >
                                    <button className="btn">En ligne</button>
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <ul className="list-none mt-4">
                    {project.aims.map((aim, index) => (
                        <li
                            key={index}
                            className="flex items-center mb-2 text-base text-gray-300 hover:text-white transition-transform duration-300 hover:scale-105"
                        >
                            <BsCheckCircle className="text-btnActive mr-2" />
                            {aim}
                        </li>
                    ))}
                </ul>

                {project.techFront && project.techFront.length > 0 && (
                    <>
                        <h2 className="text-3xl font-primary uppercase border-b py-5">
                            Front-End
                        </h2>
                        <p className="py-3 text-base shadow-sm">
                            Les outils utilisés :
                        </p>
                        <ul className="list-none mt-4">
                            {project.techFront.map((tech, index) => (
                                <li
                                    key={index}
                                    className="flex items-center mb-2 text-base text-gray-300 hover:text-white transition-transform duration-300 hover:scale-105"
                                >
                                    <BsCheckCircle className="text-btnActive mr-2" />
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </>
                )}

                {/* Vérification de l'existence de back */}
                {project.back && (
                    <>
                        {project.back.aimsBack &&
                            project.back.aimsBack.length > 0 && (
                                <div>
                                    <h2 className="text-3xl font-primary uppercase border-b py-5">
                                        Back-End
                                    </h2>
                                    <p className="py-3 text-base shadow-sm">
                                        Les spécificités du backend :
                                    </p>
                                    <ul className="list-none mt-4">
                                        {project.back.aimsBack.map(
                                            (aim, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center mb-2 text-base text-gray-300 hover:text-white transition-transform duration-300 hover:scale-105"
                                                >
                                                    <BsCheckCircle className="text-btnActive mr-2" />
                                                    {aim}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}

                        {project.back.techBack &&
                            project.back.techBack.length > 0 && (
                                <div>
                                    <p className="py-3 text-base shadow-sm">
                                        Les outils utilisés :
                                    </p>
                                    <ul className="list-none mt-4">
                                        {project.back.techBack.map(
                                            (tech, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center  mb-2 text-base text-gray-300 hover:text-white transition-transform duration-300 hover:scale-105"
                                                >
                                                    <BsCheckCircle className="text-btnActive mr-2" />
                                                    {tech}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}
                    </>
                )}
            </section>
            <Footer />
        </div>
    )
}

export default ProjectDetails
