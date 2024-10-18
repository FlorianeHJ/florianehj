import React from 'react'

const Card = ({ img, alt, name, children }) => {
    return (
        <>
            <div className="group relative overflow-hidden  w-80 h-60 cursor-pointer shadow-2xl">
                {/* Fond noir par défaut qui disparaît au hover */}
                <div className="bg-background2/75 group-hover:bg-transparent w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* {image légèrement zoomée par défaut et dézoom au hover} */}
                <img
                    className="group-hover:scale-100 transition-all duration-500 w-full h-full object-cover scale-110 filter blur-sm group-hover:filter-none group-hover:blur-none "
                    src={img}
                    alt={alt}
                />
                {/* {nom du projet visible par défaut et disparaît au hover} */}
                <div className="absolute bottom-24 left-6 transition-all duration-500 z-50 group-hover:bottom-[-100%]">
                    <p className="text-3xl font-primary text-text2">{name}</p>
                </div>
                {/* {tags visibles par défaut et disparaissent au hover} */}
                <div className="absolute bottom-10 left-6 transition-all duration-500 z-50 group-hover:bottom-[-100%] flex flex-row gap-3">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Card
