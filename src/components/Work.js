import React from 'react'

// import { motion } from 'framer-motion';

// import { fadeIn } from "../variants"

import Img1 from '../assets/portfolio-img1.png'
// import Img2 from "../assets/portfolio-img2.png"
// import Img3 from "../assets/portfolio-img3.png"

const Work = () => {
    return (
        <section id="work" className="section">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-x-10">
                    <div className=" flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
                        {/* {text} */}
                        <div>
                            <h2 className="h2 leading-tight text-accent">
                                My latest <br /> Work
                            </h2>
                            <p className="max-w-sm mb-16">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Fuga tempora omnis vitae alias
                                labore nam repudiandae assumenda modi facere
                                aspernatur quae incidunt veniam, necessitatibus
                                aut est velit ducimus aliquam sunt.
                            </p>
                            <button className="btn btn-sm">
                                View all projects
                            </button>
                        </div>
                        {/* {image} */}
                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                            {/* {overlay} */}
                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            {/* {images} */}
                            <img
                                className="group-hover:scale-125 transition-all duration-500"
                                src={Img1}
                                alt=""
                            />
                            {/* {pretitle} */}
                            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                <span className="text-gradient">
                                    UI/UX Design
                                </span>
                            </div>
                            {/* {title} */}
                            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className="text-3x1 text-white">
                                    Project Title
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">2</div>
                </div>
            </div>
        </section>
    )
}

export default Work
