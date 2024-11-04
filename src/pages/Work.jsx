import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImgCW1 from '../assets/crypto-tower/1.png'
import ImgKasa1 from '../assets/kasa/1.png'
import ImgGrimoire1 from '../assets/mon-vieux-grimoire/1.png'
import ImgMovie1 from '../assets/movie-app/1.png'
import ImgNC1 from '../assets/nina-carducci/1.png'
import ImgSB1 from '../assets/sophie-bluel/1.png'
import ImgYoga1 from '../assets/Yoga Timer/1.png'
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
            img: ImgYoga1,
            alt: 'Screen shot du projet Yoga App',
            name: 'Yoga App',
            tags: ['React', 'Tailwind', 'Node.JS', 'MongoDB'],
        },
        {
            id: 2,
            img: ImgMovie1,
            alt: 'Screen shot du projet Movie App',
            name: 'Movie App',
            tags: ['React', 'SASS', 'Axios'],
        },

        {
            id: 3,
            img: ImgCW1,
            alt: 'Screen shot du projet Crypto Watch',
            name: 'Crypto Watch',
            tags: ['React', 'SASS', 'Axios', 'Redux'],
        },
        {
            id: 4,
            img: ImgKasa1,
            alt: 'Screen shot du projet Kasa',
            name: 'Kasa',
            tags: ['React', 'SASS'],
            link: 'https://github.com/FlorianeHJ/OC---kasa.git',
        },
        {
            id: 5,
            img: ImgNC1,
            alt: 'Screen shot du projet Nina Carducci',
            name: 'Nina Carducci',
            tags: ['SEO', 'Accessibilité', 'WAVE'],
            link: 'https://github.com/FlorianeHJ/OC---Nina-Carducci.git',
        },
        {
            id: 6,
            img: ImgGrimoire1,
            alt: 'Screen shot du projet Mon vieux Grimoire',
            name: 'Mon vieux Grimoire',
            tags: ['Node.js', 'Express.js', 'MongoDB'],
            link: 'https://github.com/FlorianeHJ/OC---Grimoire.git',
        },
        {
            id: 7,
            img: ImgSB1,
            alt: 'Screen shot du projet Sophie Bluel',
            name: 'Sophie Bluel',
            tags: ['Javascript', 'CSS', 'HTML'],
            link: 'https://github.com/FlorianeHJ/OC---Sophie-Bluel.git',
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
                        className={`btn px-3 py-1 text-sm font-secondary ${
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
                            setVisibleCount(projects.length) // Augmente le nombre de projets visibles
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
