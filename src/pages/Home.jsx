import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Image from '../assets/profil4.png'

const Home = () => {
    return (
        <section
            id="home"
            className="section flex justify-center items-center h-screen flex-row md:gap-12 bg-background2"
        >
            {/* {text} */}
            <div className=" flex flex-col justify-center  items-center text-center font-primary  ">
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
                <p className="md:text-2xl text-xl py-10 font-secondary ">
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
                <div className="flex max-w-max gap-x-6 items-center  ">
                    <a href="#contact">
                        <button className="btn btn-lg">Contactez moi</button>
                    </a>
                </div>
            </div>
            {/* {image} */}
            <div>
                <img
                    className="hidden md:block rounded-full backdrop-blur-md shadow-lg"
                    src={Image}
                    alt="Photo de Floriane HJ"
                />
            </div>
        </section>
    )
}

export default Home
