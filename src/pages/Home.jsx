import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Image from '../assets/profil2.png'

const Home = () => {
    return (
        <section
            id="home"
            className="section flex justify-center items-center h-screen flex-row md:gap-12"
        >
            {/* {text} */}
            <div className=" flex flex-col justify-center  items-center text-center font-secondary ">
                <h1 className="text-[45px] sm:text-[60px] font-bold leading-[0.8] uppercase">
                    Développeuse Web <br />
                    <span className="text-[55px] sm:text-[70px] text-accent">
                        React
                    </span>
                </h1>
                <div className="hidden md:block text-[45px] font-secondary font-semibold uppercase leading-[2]">
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
                <p className="text-lg mb-8 mx-auto ">
                    Développeuse web front-end <strong>passionnée</strong>,
                    spécialisée en <strong>React</strong> et{' '}
                    <strong>Tailwind CSS</strong>, j'ai réalisé plusieurs
                    projets alliant <strong>efficacité</strong>,{' '}
                    <strong>design responsive</strong> et{' '}
                    <strong>performance</strong>.<strong> Organisée</strong> et
                    toujours à la recherche de{' '}
                    <strong>solutions créatives</strong>, je m'épanouie dans la
                    création d'interfaces utilisateur intuitives et optimisées.
                </p>
                <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto ">
                    <a href="#contact">
                        <button className="btn btn-lg">Contactez moi</button>
                    </a>
                </div>
            </div>
            {/* {image} */}
            <div className="w-1/3">
                <img
                    className="hidden md:block md:w-[220px] rounded-full backdrop-blur-md"
                    src={Image}
                    alt="Photo de Floriane HJ"
                />
            </div>
        </section>
    )
}

export default Home
