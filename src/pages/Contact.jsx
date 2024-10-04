import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'

const Contact = () => {
    return (
        <div>
            <Nav />
            <Header />
            <section className="section mx-auto">
                <div className="flex-1 flex ">
                    <div>
                        <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide ">
                            Me contacter
                        </h4>
                        <h2 className="text-[45px] leading-none mb-12">
                            Travaillons ensemble !
                        </h2>
                    </div>
                </div>
                {/* {form}
                    <form className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
                        <input
                            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                            type="text"
                            placeholder="Your name"
                        />
                        <input
                            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                            type="text"
                            placeholder="Your email"
                        />
                        <textarea
                            className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
                            placeholder="Your message"
                        ></textarea>
                        <button className="btn btn-lg">Send Message</button>
                    </form> */}
            </section>
            <Footer />
        </div>
    )
}

export default Contact
