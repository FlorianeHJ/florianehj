import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'

const experience = [
    {
        name: 'Cheffe de cuisine à domicile',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi totam mollitia cumque aspernatur laborum dolores natus dolore commodi eius aliquam, dolor esse doloremque voluptatem quidem perferendis quas ducimus voluptate?',
        link: 'Learn more',
    },
    {
        name: 'Hospitality Manager référente',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi totam mollitia cumque aspernatur laborum dolores natus dolore commodi eius aliquam, dolor esse doloremque voluptatem quidem perferendis quas ducimus voluptate?',
        link: 'Learn more',
    },
    {
        name: 'Responsable relation clientèle et qualité',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi totam mollitia cumque aspernatur laborum dolores natus dolore commodi eius aliquam, dolor esse doloremque voluptatem quidem perferendis quas ducimus voluptate?',
        link: 'Learn more',
    },
    {
        name: 'Réceptionniste',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi totam mollitia cumque aspernatur laborum dolores natus dolore commodi eius aliquam, dolor esse doloremque voluptatem quidem perferendis quas ducimus voluptate?',
        link: 'Learn more',
    },
]

const About = () => {
    return (
        <section id="about" className="section mx-auto py-8">
            {/* {Partie blabla} */}
            <div>
                <h2 className="h2 text-accent text-center text-4xl py-3">
                    Le discours d'une dev
                </h2>
                <div className="flex flex-row gap-12 py-3">
                    <div>
                        <h3 className="h3 mb-10 text-center text-2xl">
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
                        <h3 className="h3 mb-10 text-center text-2xl">
                            ... pour coder et programmer !
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
                <div className="flex gap-x-8 justify-center items-center">
                    <button className="btn btn-sm">Contactez moi</button>
                </div>
            </div>
            {/* {Partie expérience & formations} */}
            <div>
                <h2 className="h2 text-accent text-center text-4xl py-14 ">
                    Le parcours
                </h2>
                <div className="flex-1 flex flex-col items-center justify-center">
                    {experience.map((exp, index) => {
                        const { name, description, link } = exp
                        return (
                            <div
                                className="border-b border-white/20 h-[146px] mb-[38px] flex w-2/3"
                                key={index}
                            >
                                <div className="max-w-[476px]">
                                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                                        {name}
                                    </h4>
                                    <p className="font-secondary leading-tight text-sm">
                                        {description}
                                    </p>
                                </div>
                                <div className="flex flex-col flex-1 items-end">
                                    <a
                                        target="_blank"
                                        href="https://www.linkedin.com/in/floriane-hurtebize-03218b119/"
                                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                                    >
                                        <BsArrowUpRight />
                                    </a>
                                    <a
                                        target="_blank"
                                        href="https://www.linkedin.com/in/floriane-hurtebize-03218b119/"
                                        className="text-gradient text-sm"
                                    >
                                        {link}
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default About
