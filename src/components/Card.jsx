import React from 'react'

const Card = ({ img, alt, name, children }) => {
    return (
        <div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl w-[330px] h-[200px] cursor-pointer">
                {/* Fond noir par défaut qui disparaît au hover */}
                <div className="bg-secondary/50 group-hover:bg-transparent w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* {image légèrement zoomée par défaut et dézoom au hover} */}
                <img
                    className="group-hover:scale-100 transition-all duration-500 w-full h-full object-cover scale-110 filter blur-sm group-hover:filter-none group-hover:blur-none "
                    src={img}
                    alt={alt}
                />
                {/* {nom du projet visible par défaut et disparaît au hover} */}
                <div className="absolute bottom-24 left-8 transition-all duration-500 z-50 group-hover:bottom-[-100%]">
                    <p className="text-4xl">{name}</p>
                </div>
                {/* {tags visibles par défaut et disparaissent au hover} */}
                <div className="absolute bottom-10 left-8 transition-all duration-500 z-50 group-hover:bottom-[-100%] flex flex-row gap-2">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Card
