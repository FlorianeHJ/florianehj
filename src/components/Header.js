import React from 'react'

import Logo from '../assets/logo.png'

const Header = () => {
    return (
        <header>
            <div className="section py-5 mx-auto">
                <div className="flex justify-between items-center">
                    <a href="#">
                        <img className="w-[80px] h-[75px]" src={Logo} alt="" />
                    </a>
                    <p className="text-base text-center">
                        "De cheffe à chef de code, je suis passée des fourneaux
                        aux frameworks, avec toujours la même passion pour les
                        créations sur mesure !"
                    </p>
                    <button className="btn btn-sm">Work with me</button>
                </div>
            </div>
        </header>
    )
}

export default Header
