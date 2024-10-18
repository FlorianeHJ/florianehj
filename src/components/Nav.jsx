import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsBriefcase, BsChatSquareText } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import BtnNav from './BtnNav'

const Nav = () => {
    return (
        <nav className="fixed bottom-2 lg:bottom-6 w-full overflow-hidden z-50">
            <div className="w-[350px] mx-auto px-5 flex justify-between items-center text-2xl text-btnActive border-t border-b border-btnActive backdrop-blur-sm">
                <Link
                    to="/#home"
                    smooth="true"
                    onClick={() => {
                        const homeSection = document.querySelector('#home')
                        if (homeSection) {
                            homeSection.scrollIntoView({
                                behavior: 'smooth',
                            })
                        } else {
                            console.log(homeSection)
                        }
                    }}
                >
                    <BtnNav to="home" icon={<BiHomeAlt />} />
                </Link>

                <BtnNav to="about" icon={<BiUser />} />
                <BtnNav to="work" icon={<BsBriefcase />} />
                <BtnNav to="contact" icon={<BsChatSquareText />} />
            </div>
        </nav>
    )
}

export default Nav
