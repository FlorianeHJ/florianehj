import React, { useState } from 'react'
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

    const projects = [
        {
            img: Img1,
            alt: 'Screen shot du projet Movie App',
            name: 'Movie App',
            tags: ['React', 'SASS', 'Axios'],
            link: 'https://github.com/FlorianeHJ/Movie-App.git',
        },
        {
            img: Img2,
            alt: 'Screen shot du projet Yoga App',
            name: 'Yoga App',
            tags: ['Javascript', 'CSS'],
            link: 'https://github.com/FlorianeHJ/Yoga-App.git',
        },
        {
            img: Img3,
            alt: 'Screen shot du projet Crypto Watch',
            name: 'Crypto Watch',
            tags: ['React', 'SASS', 'Axios', 'Redux'],
            link: 'https://github.com/FlorianeHJ/Crypto-watch.git',
        },
        {
            img: Img4,
            alt: 'Screen shot du projet Kasa',
            name: 'Kasa',
            tags: ['React', 'SASS'],
            link: 'https://github.com/FlorianeHJ/OC---kasa.git',
        },
        {
            img: Img5,
            alt: 'Screen shot du projet Nina Carducci',
            name: 'Nina Carducci',
            tags: ['SEO', 'Accessibilité', 'WAVE'],
            link: 'https://github.com/FlorianeHJ/OC---Nina-Carducci.git',
        },
        {
            img: Img6,
            alt: 'Screen shot du projet Booki',
            name: 'Booki',
            tags: ['HTML', 'CSS'],
            link: 'https://github.com/FlorianeHJ/OC---Nina-Carducci.git',
        },
    ]

    return (
        <section id="work" className="section mx-auto ">
            <div className="flex flex-col gap-4 py-8 items-center">
                <div>
                    <h2 className="h2 text-accent text-center">
                        Mes projets <br />
                        <span className="text-[25px] font-secondary lowercase ">
                            Top 3
                        </span>
                    </h2>
                </div>
                <div className="flex flex-row gap-7 flex-wrap justify-center">
                    {projects.slice(0, visibleCount).map((project, index) => (
                        <a key={index} target="_blank" href={project.link}>
                            <Card
                                img={project.img}
                                alt={project.alt}
                                name={project.name}
                            >
                                {project.tags.map((tag, index) => (
                                    <Tag key={index} tech={tag} />
                                ))}
                            </Card>
                        </a>
                    ))}
                </div>
                {isExpanded && ( // Affiche le bouton "Afficher moins" seulement si la vue est élargie
                    <div className="py-8">
                        <button
                            className="btn btn-sm"
                            onClick={() => {
                                setVisibleCount(3) // Réinitialise pour afficher uniquement les 3 premiers projets
                                setIsExpanded(false) // Remet l'état à non élargi
                            }}
                        >
                            Afficher moins
                        </button>
                    </div>
                )}
                {visibleCount < projects.length &&
                    !isExpanded && ( // Affiche le bouton "Afficher plus" seulement si on n'a pas encore élargi
                        <div className="py-8">
                            <button
                                className="btn btn-sm"
                                onClick={() => {
                                    setVisibleCount(visibleCount + 3) // Augmente le nombre de projets visibles
                                    setIsExpanded(true) // Change l'état à élargi
                                }}
                            >
                                Afficher plus
                            </button>
                        </div>
                    )}
            </div>
        </section>
    )
}

export default Work
