import React from 'react'
import {
    FaGithub,
    FaLinkedin,
    FaMailBulk,
    FaPhone,
    FaWhatsapp,
} from 'react-icons/fa'
import { FaDownload } from 'react-icons/fa6'

const Contact = () => {
    const handleOpenPDF = () => {
        window.open('/cv_floriane_hurtebize_2024.pdf', '_blank')
    }
    return (
        <section
            id="contact"
            className="section pb-20 mx-auto flex-1 flex flex-col justify-center items-center bg-background2"
        >
            <div className="flex-1 flex flex-col justify-center items-center ">
                <h2 className="h2">Travaillons ensemble !</h2>
                <h3 className="h3">
                    Disponible pour rejoindre votre équipe dès Janvier 2025
                </h3>
            </div>
            <p className="text-lg">
                Je suis à votre disposition sur LinkedIn, GitHub, par email ou
                par téléphone. 💻{' '}
            </p>
            <div className="flex flex-row w-full justify-center items-center">
                <div className="flex text-4xl gap-10 py-16 justify-center items-center ">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className="transition-transform duration-200 hover:scale-125 hover:text-accent"
                        href="https://www.linkedin.com/in/floriane-hurtebize-03218b119/"
                        title="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className="transition-transform duration-200 hover:scale-125 hover:text-accent"
                        href="https://github.com/FlorianeHJ"
                        title="Github"
                    >
                        <FaGithub />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className="transition-transform duration-200 hover:scale-125 hover:text-accent"
                        href="mailto:fjulia.dev@gmail.com"
                        title="email"
                    >
                        <FaMailBulk />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className="transition-transform duration-200 hover:scale-125 hover:text-accent"
                        href="tel:+33612216315"
                        title="Téléphone"
                    >
                        <FaPhone />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className="transition-transform duration-200 hover:scale-125 hover:text-accent"
                        href="https://wa.me/+33612216315"
                        title="Whatsapp"
                    >
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
            <button
                onClick={handleOpenPDF}
                className="btn flex flex-row gap-4 mb-10 items-center"
            >
                <FaDownload className="text-lg" />
                CV
            </button>
        </section>
    )
}

export default Contact
