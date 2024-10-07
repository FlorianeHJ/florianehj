import React from 'react'
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'
import Card from '../components/Card'

import { Link } from 'react-router-dom'
import Tag from '../components/Tag'

const Work = () => {
    return (
        <section id="work" className="section mx-auto h-screen">
            <div className="flex flex-col gap-4 py-8 items-center">
                {/* {text} */}
                <div>
                    <h2 className="h2 text-accent text-center">
                        Mes projets <br />
                        <span className="text-[25px] font-secondary lowercase ">
                            Top 3
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
                </div>
                <Link to="/allworks" className="py-8">
                    <button className="btn btn-sm  ">
                        Voir tous mes projets
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default Work
