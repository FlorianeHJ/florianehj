import React from 'react'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

const experience = [
    {
        name: 'Cheffe de cuisine à domicile - Dragonfly',
        description: `Ma mission principale en tant que cheffe de cuisine à domicile était d'assurer la satisfaction de mes clients avec des plats sur-mesure, tout en maintenant l'excellence dans mes plats et une rigueur constante. Chaque déplacement nécessitait une adaptation rapide à différents environnements, une planification minutieuse, et une attention aux détails.`,
    },
    {
        name: 'Hospitality Manager référente - VF-OPAL',
        description: `En tant qu'Hospitality Manager référente, j'ai géré un large portefeuille de clients tout en supervisant des équipes pour garantir un service de conciergerie d'entreprise exemplaire. Mon rôle exigeait une organisation impeccable, la gestion de multiples priorités et une réactivité constante face aux demandes clients.`,
    },
    {
        name: 'Responsable relation clientèle et qualité - Sofitel',
        description: `En tant que Responsable Relation Clientèle et Qualité, je gérais les demandes spéciales des clients, y compris celles des VIP, tout en étant responsable de la satisfaction globale et de la qualité des services. J'assurais une gestion proactive des retours clients, en ligne et sur place, pour garantir que chaque expérience soit à la hauteur des attentes.`,
    },
    {
        name: 'Réceptionniste - Hyatt Chicago',
        description: `Lors de mon expérience en tant que réceptionniste à Chicago, j'ai eu l'opportunité de travailler dans un environnement international, en étant bilingue anglais-français. Mon rôle consistait à accueillir et à assister une clientèle diversifiée, tout en répondant à leurs besoins spécifiques. La gestion de réservations, la coordination avec les différents services de l'hôtel, et l'attention portée aux détails étaient essentiels pour assurer un service fluide et de qualité.`,
    },
]

const Path = () => {
    return (
        <section className="section bg-background1 py-8">
            <h2 className="h2 text-accent text-center ">Mon parcours</h2>
            <div className="flex-1 flex flex-col items-center justify-center">
                {experience.map((exp, index) => {
                    const { name, description } = exp
                    return (
                        <div
                            className="border-b w-4/5 flex md:w-3/4 py-8 justify-between"
                            key={index}
                        >
                            <div className="max-w-3xl">
                                <h4 className="text-2xl tracking-wider font-primary font-semibold pb-4">
                                    {name}
                                </h4>

                                <p className="font-secondary leading-tight text-md">
                                    {description}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/floriane-hurtebize-03218b119/"
                                    className="btn hidden lg:block text-sm px-2 border-b-transparent"
                                >
                                    <FaArrowUpRightFromSquare />
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Path
