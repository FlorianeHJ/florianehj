import React from 'react'

import Image from '../assets/profil2.png'

import { TypeAnimation } from 'react-type-animation'

import Header from './Header'
import Nav from './Nav'

const Banner = () => {
    return (
        <div>
            <Nav />
            <Header />
            <section className="section flex py-10 flex-row gap-12">
                {/* {text} */}
                <div className="flex-1 justify-between items-center text-center font-secondary">
                    <h1 className="text-[60px] font-bold leading-[0.8] uppercase">
                        Développeuse Web{' '}
                        <span className="text-[70px] text-accent">React</span>
                    </h1>
                    <div className="text-[45px] font-secondary font-semibold uppercase leading-[2]">
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
                    <p className="mb-8 mx-auto ">
                        Développeuse web front-end <strong>passionnée</strong>,
                        spécialisée en <strong>React</strong> et{' '}
                        <strong>Tailwind CSS</strong>, j'ai réalisé plusieurs
                        projets alliant <strong>efficacité</strong>,{' '}
                        <strong>design responsive</strong> et{' '}
                        <strong>performance</strong>.<strong> Organisée</strong>{' '}
                        et toujours à la recherche de{' '}
                        <strong>solutions créatives</strong>, j'excelle dans la
                        création d'interfaces utilisateur intuitives et
                        optimisées.
                    </p>
                    <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto ">
                        <a href="/contact">
                            <button className="btn btn-lg">
                                Contactez moi
                            </button>
                        </a>
                    </div>
                </div>
                {/* {image} */}
                <div className="">
                    <img
                        className="w-[220px] h-[400px] rounded-full backdrop-blur-md"
                        src={Image}
                        alt=""
                    />
                </div>
            </section>
        </div>
    )
}

export default Banner
