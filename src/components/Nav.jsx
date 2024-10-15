import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsBriefcase, BsChatSquareText } from 'react-icons/bs'
import BtnNav from './BtnNav' // Assurez-vous que le chemin du fichier est correct

const Nav = () => {
    return (
        <nav className="fixed bottom-2 lg:bottom-6 w-full overflow-hidden z-50">
            <div className="w-[350px] mx-auto px-5 flex justify-between items-center text-2xl text-btnActive border-t border-b border-btnActive backdrop-blur-sm">
                <BtnNav to="home" icon={<BiHomeAlt />} />
                <BtnNav to="about" icon={<BiUser />} />
                <BtnNav to="work" icon={<BsBriefcase />} />
                <BtnNav to="contact" icon={<BsChatSquareText />} />
            </div>
        </nav>
    )
}

export default Nav
