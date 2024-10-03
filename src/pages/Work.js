import React from 'react'
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'
import Card from '../components/Card'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Tag from '../components/Tag'

const Work = () => {
    return (
        <div>
            <Nav />
            <Header />
            <section id="work" className="section mx-auto ">
                <div className="flex flex-col py-8">
                    {/* {text} */}
                    <div>
                        <h2 className="h2 text-accent text-center">
                            Mes projets <br />
                            <span className="text-sm italic lowercase ">
                                les plus récents
                            </span>
                        </h2>
                    </div>
                    <div className="flex flex-row gap-7">
                        {/* {Card 1} */}
                        <Card
                            img={Img1}
                            alt="Screen shot du projet Movie App"
                            name="Movie App"
                        >
                            <Tag tech="React" />
                        </Card>
                        {/* {Card 2} */}
                        <Card
                            img={Img2}
                            alt="Screen shot du projet Movie App"
                            name="Movie App"
                        >
                            <Tag tech="React" />
                        </Card>
                        {/* {Card 3} */}
                        <Card
                            img={Img3}
                            alt="Screen shot du projet Movie App"
                            name="Movie App"
                        >
                            <Tag tech="React" />
                        </Card>
                    </div>
                </div>
                <button className="btn btn-sm py-3">
                    Voir tous mes projets
                </button>
            </section>
        </div>
    )
}

export default Work
