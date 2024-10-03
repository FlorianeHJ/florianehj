import React from 'react'
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'
import Header from './Header'
import Nav from './Nav'

const Work = () => {
    return (
        <div>
            <Nav />
            <Header />
            <section id="work" className="section mx-auto ">
                <div className="flex flex-col py-8">
                    {/* {text} */}
                    <div>
                        <h2 className="h2 text-accent text-center">
                            Mes projets <br />
                            <span className="text-sm italic lowercase ">
                                les plus récents
                            </span>
                        </h2>
                    </div>
                    <div className="flex flex-row gap-7">
                        {/* {Card 1} */}
                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl w-50">
                            {/* {hover fondu} */}
                            <div className="group-hover:bg-primary/70 w-full h-full absolute z-40 transition-all duration-300"></div>
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
                        {/* {Card 2} */}
                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                            {/* {overlay} */}
                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            {/* {images} */}
                            <img
                                className="group-hover:scale-125 transition-all duration-500"
                                src={Img2}
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
                        {/* {Card 3} */}
                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                            {/* {overlay} */}
                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            {/* {images} */}
                            <img
                                className="group-hover:scale-125 transition-all duration-500"
                                src={Img3}
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
                </div>
                <button className="btn btn-sm py-3">
                    Voir tous mes projets
                </button>
            </section>
        </div>
    )
}

export default Work
