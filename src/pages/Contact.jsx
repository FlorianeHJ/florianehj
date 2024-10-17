import React from 'react'
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa'

const Contact = () => {
    return (
        <section
            id="contact"
            className="section py-8 mx-auto flex-1 flex flex-col justify-center items-center"
        >
            <div className="flex-1 flex flex-col justify-center items-center ">
                <h2 className="h2  text-accent">Travaillons ensemble !</h2>
                <h3 className="text-[35px]">
                    Je suis disponible dès Janvier 2025
                </h3>
            </div>
            <div className="flex flex-col w-full items-center">
                <h4>Contactez moi via</h4>
                <div className="flex text-[40px] gap-x-6 mx-auto ">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/floriane-hurtebize-03218b119/"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/FlorianeHJ"
                    >
                        <FaGithub />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="mailto:fjulia.dev@gmail.com"
                    >
                        <FaMailBulk />
                    </a>
                </div>

                <h4>Ou via ce formulaire</h4>
                <form className="flex flex-col gap-y-6 py-10 w-2/3">
                    <label
                        for="Username"
                        class="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                    ></label>
                    <input
                        className="border rounded-lg p-2 outline-none w-full transition-all text-secondary"
                        type="text"
                        placeholder="Your name"
                    />
                    <input
                        className="border rounded-lg p-2 outline-none w-full transition-all text-secondary"
                        type="text"
                        placeholder="Your email"
                    />
                    <textarea
                        className="border rounded-lg p-2 outline-none w-full transition-all text-secondary resize-none"
                        placeholder="Your message"
                    ></textarea>
                    <div className="flex justify-center">
                        <button className="btn btn-sm">Envoyer</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
