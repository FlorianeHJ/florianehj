import React from 'react'
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa'
import Logo from '../assets/logo.png'

const Header = () => {
    return (
        <header>
            <div className="section py-3 mx-auto">
                <div className="flex gap-5 justify-between items-center ">
                    <a href="/">
                        <img
                            className="w-[75px] h-[70px]"
                            src={Logo}
                            alt="Logo du portfolio style manga"
                        />
                    </a>
                    <p className="text-base text-center italic px-5 py-2 bg-primary/20 backdrop-blur-2xl  h-[60px] rounded-full max-w-[900px]">
                        "De cheffe de cuisine à chef de code, je suis passée des
                        fourneaux aux frameworks, avec toujours la même passion
                        pour les créations sur mesure !"
                    </p>
                    <div className="flex text-[22px] gap-x-6 max-w-max mx-auto ">
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/floriane-hurtebize-03218b119/"
                        >
                            <FaLinkedin />
                        </a>
                        <a target="_blank" href="https://github.com/FlorianeHJ">
                            <FaGithub />
                        </a>
                        <a target="_blank" href="mailto:fjulia.dev@gmail.com">
                            <FaMailBulk />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
