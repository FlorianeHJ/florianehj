import React from 'react'
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'

const Contact = () => {
    return (
        <div>
            <Nav />
            <Header />
            <section className="section mx-auto flex-1 flex flex-col justify-center items-center">
                <div className="flex-1 flex flex-col justify-center items-center ">
                    <h2 className="h2 text-4xl uppercase text-accent pt-10">
                        Travaillons ensemble !
                    </h2>
                    <h3 className="text-[35px]">
                        Je suis disponible dès Janvier 2025
                    </h3>
                </div>
                <div>
                    <h4>Contactez moi via :</h4>
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
                <h4>Contactez :</h4>
                <form className="flex flex-col gap-y-6 py-10 w-1/2">
                    <input
                        className="border rounded-lg p-2 outline-none w-full transition-all text-black"
                        type="text"
                        placeholder="Your name"
                    />
                    <input
                        className="border rounded-lg p-2 outline-none w-full transition-all text-black"
                        type="text"
                        placeholder="Your email"
                    />
                    <textarea
                        className="border rounded-lg p-2 outline-none w-full transition-all text-blackresize-none"
                        placeholder="Your message"
                    ></textarea>
                    <div className="flex justify-center">
                        <button className="btn btn-sm">Envoyer</button>
                    </div>
                </form>
            </section>
            <Footer />
        </div>
    )
}

export default Contact
