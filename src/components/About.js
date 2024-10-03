import React from 'react'

import { useInView } from 'react-intersection-observer'

import Header from './Header'
import Nav from './Nav'

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    })

    return (
        <div>
            <Nav />
            <Header />
            <section id="about" className="section mx-auto py-8">
                <h2 className="h2 text-accent text-center text-4xl">
                    A propos
                </h2>
                <div className="flex flex-row gap-12 py-3">
                    <div>
                        <h3 className="h3 mb-4 text-center text-2xl">
                            Partir d'une expertise hôtelière...
                        </h3>
                        <p className="mb-6 text-justify">
                            Après avoir passé plusieurs années à arpenter les
                            couloirs des hôtels 4*, à accueillir des clients
                            avec le sourire et à gérer des équipes avec
                            l'efficacité d'une cheffe d'orchestre, j'ai appris
                            une chose essentielle : la{' '}
                            <strong>satisfaction client</strong>, c'est tout un
                            art. De Guest Relation Manager à Hospitality Manager
                            en passant par cheffe de cuisine à domicile, que ce
                            soit à Chicago ou en conciergerie d'entreprise en
                            France, j'ai perfectionné la maîtrise des{' '}
                            <strong>relations humaines</strong>, la création
                            culinaire sur mesure et la gestion des imprévus.{' '}
                            <strong>Organisée</strong>,{' '}
                            <strong>rigoureuse</strong> et toujours à la
                            recherche de l'excellence, j'ai affûté mes
                            compétences autant dans la{' '}
                            <strong>gestion d'équipes</strong> que dans la{' '}
                            <strong>résolution de problèmes complexes</strong>.
                        </p>
                    </div>
                    <div>
                        <h3 className="h3 mb-4 text-center text-2xl">
                            ... pour exceller en développement web front-end.
                        </h3>
                        <p className="mb-6 text-justify">
                            Et un jour, j'ai voulu aller plus loin : créer un
                            site web dynamique pour mon entreprise de cuisine.
                            C’est là que la magie a opéré : j’ai re-découvert
                            que le code, et je me suis dit : il est temps d'en
                            faire ton métier ! C’est un peu comme la cuisine :
                            il faut de la précision, de la créativité (avec un
                            souspon de patience), et un bon mélange
                            d’ingrédients pour réussir ! Aujourd'hui, après de{' '}
                            <strong>nombreux projets réussis </strong> et une
                            <strong>
                                certification de développement web
                            </strong>{' '}
                            en poche, je suis maintenant{' '}
                            <strong>développeuse web front-end</strong> avec une
                            expertise en <strong>React</strong>. Je conçois des{' '}
                            <strong>
                                interfaces aussi élégantes qu'efficaces
                            </strong>
                            , tout en gardant à l'esprit{' '}
                            <strong>l'expérience utilisateur</strong>, comme je
                            l’ai toujours fait avec mes clients dans
                            l'hôtellerie. Alors, si vous cherchez quelqu'un
                            d'aussi <strong>passionné par le code</strong> que
                            par les bonnes recettes, je suis prête à relever le
                            défi !
                        </p>
                    </div>
                </div>
                <div className="flex gap-x-8 items-center">
                    <button className="btn btn-lg">Contactez moi</button>
                </div>
            </section>
        </div>
    )
}

export default About
