import React from 'react'

//import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsBriefcase, BsChatSquareText, BsClipboardData } from 'react-icons/bs'

//link
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="fixed bottom-2 lg:bottom:8 w-full overflow-hidden z-50">
            <div className="container mx-auto">
                {/* nav inner */}
                <div className="w-full bg-primary/40 backdrop-blur-2xl  h-[60px] rounded-full max-w-[460px] mx-auto px-5 flex justify-around items-center text-2x1 text-[#e0f2fe]/50">
                    <Link
                        to="/"
                        className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                    >
                        <BiHomeAlt />
                    </Link>
                    <Link
                        to="/about"
                        className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                    >
                        <BiUser />
                    </Link>
                    <Link
                        to="/services"
                        className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                    >
                        <BsClipboardData />
                    </Link>
                    <Link
                        to="/work"
                        className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                    >
                        <BsBriefcase />
                    </Link>
                    <Link
                        to="/contact"
                        className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
                    >
                        <BsChatSquareText />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav
