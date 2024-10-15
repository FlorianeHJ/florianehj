import React, { useEffect, useRef, useState } from 'react'
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa'
import logo from '../assets/logo2.png'

const Header = () => {
    const [prevScroll, setPrevScroll] = useState(0)
    const headerRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY

            if (headerRef.current) {
                if (currentScroll > prevScroll && currentScroll > 80) {
                    headerRef.current.style.transform = 'translateY(-100%)'
                    headerRef.current.style.transition =
                        'transform 0.5s ease-in-out'
                }

                if (currentScroll < prevScroll) {
                    headerRef.current.style.transform = 'translateY(0)'
                    headerRef.current.style.transition =
                        'transform 0.5s ease-in-out'
                }
            }

            setPrevScroll(currentScroll)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [prevScroll])

    return (
        <header
            ref={headerRef}
            className="section fixed z-50 py-3 left-0 right-0 mx-auto max-w-screen"
        >
            <div className="flex flex-row gap-9 justify-center items-center ">
                <div className="md:w-24 sm:w-18 w-14">
                    <a href="#home">
                        <img
                            src={logo}
                            alt="Logo du portfolio avec la lettre F"
                        />
                    </a>
                </div>
                <div>
                    <div className="lg:max-w-[1100px] border-b  ">
                        <p className="hidden sm:flex text-xs md:text-[16px] text-center items-center italic px-5 py-2 h-[60px]  ">
                            "De cheffe de cuisine à chef de code, je suis passée
                            des fourneaux aux frameworks, avec toujours la même
                            passion pour les créations sur mesure !"
                        </p>
                    </div>
                </div>
                <div>
                    <div className="flex text-3xl gap-x-6 max-w-max mx-auto ">
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
