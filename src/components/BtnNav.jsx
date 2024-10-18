import React from 'react'

const BtnNav = ({ icon }) => {
    return (
        <span
            className="cursor-pointer w-[60px] h-[60px] flex items-center
            justify-center transition-transform duration-200 hover:scale-105
            hover:text-text"
        >
            {icon}
        </span>
    )
}

export default BtnNav
