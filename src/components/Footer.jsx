import React from 'react'
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bottom-12 bg-primary/40 backdrop-blur-2xl ">
            <p className="text-sm p-2 flex flex-row text-center justify-center gap-5">
                © 2024 Created with 🩵 by{' '}
                <span>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/floriane-hurtebize-03218b119/"
                    >
                        Floriane HJ
                    </a>
                </span>{' '}
                <span className="italic">
                    <a href="#">Mentions légales</a>
                </span>
                <a
                    className="text-[19px]"
                    target="_blank"
                    href="https://www.linkedin.com/in/floriane-hurtebize-03218b119/"
                >
                    <FaLinkedin />
                </a>
                <a
                    className="text-[19px]"
                    target="_blank"
                    href="https://github.com/FlorianeHJ"
                >
                    <FaGithub />
                </a>
                <a
                    className="text-[19px]"
                    target="_blank"
                    href="mailto:fjulia.dev@gmail.com"
                >
                    <FaMailBulk />
                </a>
            </p>
        </footer>
    )
}

export default Footer
