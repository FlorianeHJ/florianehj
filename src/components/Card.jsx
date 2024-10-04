import React from 'react'

const Card = ({ img, alt, name, children }) => {
    return (
        <div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl w-[350px] h-[200px] cursor-pointer ">
                <div className="group-hover:bg-primary/80 w-full h-full absolute z-40 transition-all duration-300"></div>
                {/* {images} */}
                <img
                    className="group-hover:scale-125 transition-all duration-500 w-full h-full"
                    src={img}
                    alt={alt}
                />
                {/* {nom du projet} */}
                <div className="absolute -bottom-full left-8 group-hover:bottom-24 transition-all duration-500 z-50 ">
                    <p className="text-4xl">{name}</p>
                </div>
                {/* {tags} */}
                <div className="absolute -bottom-full left-8 group-hover:bottom-10 transition-all duration-700 z-50 flex flex-row gap-2">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Card
