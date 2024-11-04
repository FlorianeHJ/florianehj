import React from 'react'
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="absolute bg-background/80 backdrop-blur-2xl w-full hidden sm:block">
            {' '}
            {/* Cacher sur mobile */}
            <p className="text-sm p-2 flex flex-row text-center justify-start gap-2">
                © 2024 Created with 🩵 by{' '}
                <span>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/floriane-hurtebize-03218b119/"
                    >
                        Floriane HJ
                    </a>
                </span>{' '}
                <Link to="/legalenotices">
                    <span className="italic">Mentions légales</span>
                </Link>
                <a
                    target="_blank"
                    rel="noreferrer"
                    className="transition-transform duration-200 hover:scale-125 hover:text-accent"
                    href="https://www.linkedin.com/in/floriane-hurtebize-03218b119/"
                >
                    <FaLinkedin />
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    className="transition-transform duration-200 hover:scale-125 hover:text-accent"
                    href="https://github.com/FlorianeHJ"
                >
                    <FaGithub />
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    className="transition-transform duration-200 hover:scale-125 hover:text-accent"
                    href="mailto:fjulia.dev@gmail.com"
                >
                    <FaMailBulk />
                </a>
            </p>
        </footer>
    )
}

export default Footer
