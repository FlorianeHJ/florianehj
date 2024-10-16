import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'
import Img4 from '../assets/portfolio-img4.png'
import Img5 from '../assets/portfolio-img5.png'
import Img6 from '../assets/portfolio-img6.png'
import Card from '../components/Card'
import Tag from '../components/Tag'

const Work = () => {
    const [visibleCount, setVisibleCount] = useState(3) // Commence par afficher 3 projets
    const [isExpanded, setIsExpanded] = useState(false) // État pour gérer l'affichage étendu
    const [selectedTag, setSelectedTag] = useState(null) // État pour le tag sélectionné

    // Les projets à afficher
    const projects = [
        {
            id: 1,
            img: Img1,
            alt: 'Screen shot du projet Movie App',
            name: 'Movie App',
            tags: ['React', 'SASS', 'Axios'],
            link: 'https://github.com/FlorianeHJ/Movie-App.git',
        },
        {
            id: 2,
            img: Img2,
            alt: 'Screen shot du projet Yoga App',
            name: 'Yoga App',
            tags: ['React', 'Tailwind', 'Node.JS', 'MongoDB'],
            link: 'https://github.com/FlorianeHJ/Yoga-App.git',
        },
        {
            id: 3,
            img: Img3,
            alt: 'Screen shot du projet Crypto Watch',
            name: 'Crypto Watch',
            tags: ['React', 'SASS', 'Axios', 'Redux'],
            link: 'https://github.com/FlorianeHJ/Crypto-watch.git',
        },
        {
            id: 4,
            img: Img4,
            alt: 'Screen shot du projet Kasa',
            name: 'Kasa',
            tags: ['React', 'SASS'],
            link: 'https://github.com/FlorianeHJ/OC---kasa.git',
        },
        {
            id: 5,
            img: Img5,
            alt: 'Screen shot du projet Nina Carducci',
            name: 'Nina Carducci',
            tags: ['SEO', 'Accessibilité', 'WAVE'],
            link: 'https://github.com/FlorianeHJ/OC---Nina-Carducci.git',
        },
        {
            id: 6,
            img: Img6,
            alt: 'Screen shot du projet Booki',
            name: 'Booki',
            tags: ['HTML', 'CSS'],
            link: 'https://github.com/FlorianeHJ/OC---Booki.git',
        },
    ]

    // Extraire une liste unique de tous les tags + ajout du tag "Tous"
    const allTags = [
        'Tous',
        ...new Set(projects.flatMap((project) => project.tags)),
    ]

    // Fonction pour gérer la sélection d'un tag
    const handleTagClick = (tag) => {
        if (tag === 'Tous') {
            setSelectedTag(null) // Si "Tous" est sélectionné, on désélectionne le tag
        } else if (selectedTag === tag) {
            setSelectedTag(null) // Si le tag est déjà sélectionné, on le désélectionne
        } else {
            setSelectedTag(tag) // Sinon on sélectionne le nouveau tag
        }
    }

    // Filtrer les projets par tag sélectionné
    const filteredProjects = selectedTag
        ? projects.filter((project) => project.tags.includes(selectedTag))
        : projects

    return (
        <section
            id="work"
            className="section bg-background2 mx-auto flex flex-col gap-6 py-8 justify-center items-center"
        >
            <h2 className="h2 ">
                Mes projets <br />
            </h2>

            {/* Section filtre */}
            <div className="flex gap-5 justify-center pb-12 flex-wrap">
                {allTags.map((tag, index) => (
                    <button
                        key={index}
                        onClick={() => handleTagClick(tag)}
                        className={`btn px-4 py-2 text-base font-secondary ${
                            selectedTag === null && tag === 'Tous'
                                ? 'shadow-md translate-y-[2px] border-transparent'
                                : selectedTag === tag
                                ? 'shadow-md translate-y-[2px] border-transparent'
                                : 'btn'
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Affichage des projets filtrés */}
            <div className="flex flex-row gap-10 flex-wrap justify-center">
                {filteredProjects.slice(0, visibleCount).map((project) => (
                    <Link key={project.id} to={`/${project.id}`}>
                        <Card
                            img={project.img}
                            alt={project.alt}
                            name={project.name}
                        >
                            {project.tags.map((tag, index) => (
                                <Tag key={index} tech={tag} />
                            ))}
                        </Card>
                    </Link>
                ))}
            </div>
            {isExpanded && (
                <div className="py-12">
                    <button
                        className="btn"
                        onClick={() => {
                            setVisibleCount(3) // Réinitialise pour afficher uniquement les 3 premiers projets
                            setIsExpanded(false) // Remet l'état à non élargi
                        }}
                    >
                        Afficher moins
                    </button>
                </div>
            )}
            {visibleCount < projects.length && !isExpanded && (
                <div className="py-12">
                    <button
                        className="btn"
                        onClick={() => {
                            setVisibleCount(visibleCount + 3) // Augmente le nombre de projets visibles
                            setIsExpanded(true) // Change l'état à élargi
                        }}
                    >
                        Afficher plus
                    </button>
                </div>
            )}
        </section>
    )
}

export default Work
