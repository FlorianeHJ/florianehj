import React from 'react'
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'
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
                    <h2 className="h2 text-accent text-center pt-10">
                        Tous mes projets
                    </h2>
                    <div className="flex flex-row flex-wrap gap-7 py-10">
                        <Card
                            img={Img1}
                            alt="Screen shot du projet Movie App"
                            name="Movie App"
                        >
                            <Tag tech="React" />
                            <Tag tech="SASS" />
                            <Tag tech="Axios" />
                        </Card>
                        {/* {Card 2} */}
                        <Card
                            img={Img2}
                            alt="Screen shot du projet Movie App"
                            name="Yoga App"
                        >
                            <Tag tech="Javascript" />
                            <Tag tech="CSS" />
                        </Card>
                        {/* {Card 3} */}
                        <Card
                            img={Img3}
                            alt="Screen shot du projet Movie App"
                            name="Crypto Watch"
                        >
                            <Tag tech="React" />
                            <Tag tech="SASS" />
                            <Tag tech="Axios" />
                            <Tag tech="Redux" />
                        </Card>
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
