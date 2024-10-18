import React, { useEffect } from 'react'
import { FaDownload } from 'react-icons/fa6'
import { useLocation } from 'react-router-dom' // Importer le hook useLocation pour gérer l'URL
import { TypeAnimation } from 'react-type-animation'
import Image from '../assets/profil4.png'
import logoGit from '../assets/stack/logo-git.png'
import logoNextjs from '../assets/stack/logo-nextjs.png'
import logoNodejs from '../assets/stack/logo-nodejs.png'
import logoReact from '../assets/stack/logo-react.png'
import logoSass from '../assets/stack/logo-sass.png'
import logoTailwind from '../assets/stack/logo-tailwind.png'
import logoTypescript from '../assets/stack/logo-typescript.png'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import About from './About'
import Contact from './Contact'
import Path from './Path'
import Work from './Work'

const Home = () => {
    const location = useLocation() // Utiliser useLocation pour obtenir l'URL

    // useEffect pour gérer le scroll vers les sections à partir du hash
    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.substring(1) // Retire le "#" du hash pour obtenir l'ID
            const section = document.getElementById(sectionId)

            if (section) {
                section.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }, [location]) // Réagir à chaque changement d'URL

    const handleOpenPDF = () => {
        window.open('/cv_floriane_hurtebize_2024.pdf', '_blank')
    }

    return (
        <div>
            <Nav />
            <Header />

            <section
                id="home"
                className="section flex flex-col justify-center pt-28 pb-20 items-center md:gap-12 bg-background2"
            >
                <div className=" flex flex-row justify-center gap-20 items-center text-end font-primary  ">
                    <div>
                        {' '}
                        <h1 className="text-[45px] sm:text-[60px] font-bold leading-[1] uppercase">
                            Développeuse Web
                            <span className="text-[55px] sm:text-[70px] text-accent">
                                {' '}
                                React
                            </span>
                        </h1>
                        <div className="hidden md:block text-[45px] font-primary font-semibold uppercase leading-[2]">
                            <span className=" text-white mr-4">Je suis</span>
                            <TypeAnimation
                                sequence={[
                                    'Floriane HJ',
                                    2000,
                                    'experte React',
                                    2000,
                                    'tech passionnée',
                                    2000,
                                ]}
                                speed={50}
                                className="text-accent"
                                wrapper="span"
                                repeat={Infinity}
                            />
                        </div>
                    </div>
                    <div className="w-1/6">
                        <img
                            className="hidden md:block  rounded-full backdrop-blur-md shadow-lg"
                            src={Image}
                            alt="Portrait de Floriane HJ"
                        />
                    </div>
                </div>
                <p className="md:text-2xl text-xl py-2 w-11/12 font-secondary text-center ">
                    Développeuse web front-end <strong>passionnée</strong>,
                    spécialisée en <strong>React</strong> et{' '}
                    <strong>Tailwind CSS</strong>, j'ai réalisé plusieurs
                    projets alliant <strong>efficacité</strong>,{' '}
                    <strong>design responsive</strong> et{' '}
                    <strong>performance</strong>. <strong> Organisée</strong> et
                    toujours à la recherche de{' '}
                    <strong>solutions créatives</strong>, je m'épanouie dans la
                    création d'interfaces utilisateur intuitives et optimisées.
                </p>
                <div className="flex flex-row justify-center py-10 items-center gap-12 w-1/2">
                    <img
                        className="w-1/12 transition-transform duration-200 hover:scale-125"
                        src={logoReact}
                        alt="Logo de React"
                    />
                    <img
                        className="w-1/12 transition-transform duration-200 hover:scale-125"
                        src={logoSass}
                        alt="Logo de SASS"
                    />
                    <img
                        className="w-1/12 transition-transform duration-200 hover:scale-125"
                        src={logoTailwind}
                        alt="Logo de Tailwind CSS"
                    />
                    <img
                        className="w-1/12 transition-transform duration-200 hover:scale-125"
                        src={logoTypescript}
                        alt="Logo de Typescript"
                    />
                    <img
                        className="w-1/12 transition-transform duration-200 hover:scale-125"
                        src={logoNodejs}
                        alt="Logo de Node.js"
                    />
                    <img
                        className="w-1/12 transition-transform duration-200 hover:scale-125"
                        src={logoNextjs}
                        alt="Logo de Next.js"
                    />
                    <img
                        className="w-1/12 transition-transform duration-200 hover:scale-125"
                        src={logoGit}
                        alt="Logo de Git"
                    />
                </div>
                <div className="flex max-w-max gap-x-6 items-center">
                    <a href="#contact">
                        <button className="btn">Contactez moi</button>
                    </a>
                    <button
                        onClick={handleOpenPDF}
                        className="btn flex flex-row gap-4 items-center"
                    >
                        <FaDownload className="text-lg" />
                        CV
                    </button>
                </div>
            </section>
            <About />
            <Work />
            <Path />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
