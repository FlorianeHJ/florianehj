import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsBriefcase, BsChatSquareText } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Nav = () => {
    return (
        <nav className="fixed bottom-2 lg:bottom:8 w-full overflow-hidden z-50">
            <div className="w-[350px] bg-primary/20 h-[70px] backdrop-blur-2x1 rounded-full mx-auto px-5 flex justify-between items-center text-2x1 text-[#e0f2fe]/50 '">
                <Link
                    to="home"
                    smooth={true}
                    className="cursor-pointer w-[60px] h-[60px]  flex items-center justify-center hover:hover "
                >
                    <BiHomeAlt />
                </Link>
                <Link
                    to="about"
                    smooth={true}
                    className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:hover"
                >
                    <BiUser />
                </Link>

                <Link
                    to="work"
                    smooth={true}
                    className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:hover"
                >
                    <BsBriefcase />
                </Link>
                <Link
                    to="contact"
                    smooth={true}
                    className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:hover"
                >
                    <BsChatSquareText />
                </Link>
            </div>
        </nav>
    )
}

export default Nav
