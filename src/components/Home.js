import React from 'react'

import Image from '../assets/profil.jpg'

import { TypeAnimation } from 'react-type-animation'

import { FaDribbble, FaGithub, FaYoutube } from 'react-icons/fa'

import Header from './Header'
import Nav from './Nav'

const Banner = () => {
    return (
        <div>
            <Nav />
            <Header />
            <section id="home" className="section">
                <div className="mx-auto">
                    <div className="flex flex-row gap-12">
                        {/* {text} */}
                        <div className="flex-1 justify-between items-center text-center font-secondary">
                            <h1 className="text-[110px] font-bold leading-[0.8] ">
                                Floriane <span>HJ</span>
                            </h1>
                            <div className="mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]">
                                <span className=" text-white mr-4">I am a</span>
                                <TypeAnimation
                                    sequence={[
                                        'Developer',
                                        2000,
                                        'Super-heroe',
                                        2000,
                                        'Mother',
                                        2000,
                                    ]}
                                    speed={50}
                                    className="text-accent"
                                    wrapper="span"
                                    repeat={Infinity}
                                />
                            </div>
                            <p className="mb-8 mx-auto ">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Esse illum, repellendus odit
                                explicabo temporibus fugiat rerum pariatur
                                doloribus itaque eveniet? Quasi ex, sapiente
                                recusandae tenetur iure provident eligendi qui
                                blanditiis.
                            </p>
                            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto ">
                                <button className="btn btn-lg">
                                    Contact me
                                </button>
                                <div className="flex text-[20px] gap-x-6 max-w-max mx-auto ">
                                    <a href="#">
                                        <FaYoutube />
                                    </a>
                                    <a href="#">
                                        <FaGithub />
                                    </a>
                                    <a href="#">
                                        <FaDribbble />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* {image} */}
                        <div className="">
                            <img
                                className="w-[220px] h-[400px] rounded-full"
                                src={Image}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner
