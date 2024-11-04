import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsBriefcase, BsChatSquareText } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import BtnNav from './BtnNav'

const Nav = () => {
    return (
        <nav className="fixed bottom-2 lg:bottom-6 w-full overflow-hidden z-50">
            <div className=" w-[250px] md:w-[350px] mx-auto px-5 flex justify-center md:justify-between items-center text-xl md:text-2xl text-btnActive border-t border-b border-btnActive backdrop-blur-sm">
                <Link to="/#home" smooth="true">
                    <BtnNav to="home" icon={<BiHomeAlt />} />
                </Link>
                <Link to="/#about" smooth="true">
                    <BtnNav to="about" icon={<BiUser />} />
                </Link>
                <Link to="/#work" smooth="true">
                    <BtnNav to="work" icon={<BsBriefcase />} />
                </Link>
                <Link to="/#contact" smooth="true">
                    <BtnNav to="contact" icon={<BsChatSquareText />} />
                </Link>
            </div>
        </nav>
    )
}

export default Nav
