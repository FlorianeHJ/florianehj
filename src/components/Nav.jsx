import React from 'react'

//import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsBriefcase, BsChatSquareText } from 'react-icons/bs'

//link
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="fixed bottom-10 z-50  ">
            <div className="w-33 h-12 p-9 bg-primary/40 backdrop-blur-2xl rounded-full flex flex-row justify-around items-center text-2xl text-[#e0f2fe]/50  ">
                <Link
                    to="/"
                    className="cursor-pointer w-[60px] h-[60px]  flex items-center justify-center hover:hover "
                >
                    <BiHomeAlt />
                </Link>
                <Link
                    to="/about"
                    className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:hover"
                >
                    <BiUser />
                </Link>

                <Link
                    to="/work"
                    className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:hover"
                >
                    <BsBriefcase />
                </Link>
                <Link
                    to="/contact"
                    className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:hover"
                >
                    <BsChatSquareText />
                </Link>
            </div>
        </nav>
    )
}

export default Nav
