import React from 'react'
import Img4 from '../assets/portfolio-img4.png'
import Img5 from '../assets/portfolio-img5.png'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Tag from '../components/Tag'

const AllWorks = () => {
    return (
        <div>
            <Nav />
            <Header />
            <section className="section mx-auto">
                <div className="flex flex-col">
                    <h2 className="h2 text-accent text-center">
                        Tous mes projets
                    </h2>
                    <div className="flex flex-row flex-wrap gap-7">
                        <Card
                            img={Img4}
                            alt="Screen shot du projet kasa"
                            name="Kasa"
                        >
                            <Tag tech="React" />
                            <Tag tech="SASS" />
                        </Card>
                        <Card
                            img={Img5}
                            alt="Screen shot du projet Nina Carducci"
                            name="Nina Carducci"
                        >
                            <Tag tech="SEO" />
                            <Tag tech="Accessibilité" />
                            <Tag tech="WAVE" />
                        </Card>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default AllWorks
