import React from 'react'
import { Link } from 'react-scroll'

const BtnNav = ({ to, icon }) => {
    return (
        <Link
            to={to}
            smooth={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:text-text"
        >
            {icon}
        </Link>
    )
}

export default BtnNav
