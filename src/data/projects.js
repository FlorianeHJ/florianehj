// src/data/projects.js
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'

const projects = [
    {
        id: 1,
        name: 'Movie App',
        image: Img1,
        link1: 'https://github.com/FlorianeHJ/Movie-App.git',

        description: `Movie-App est une application web permettant de consulter un large catalogue de films. Les utilisateurs peuvent naviguer dans les films, les filtrer selon plusieurs critères, et ajouter des films à leurs favoris ou coups de cœur.`,
        aims: [
            `Affichage de 20 films à la fois, avec un système de pagination dynamique.`,
            `Filtrage des films selon différents critères (genre, année, popularité, etc.)`,
            `Possibilité de marquer des films comme coups de cœur.`,
            `Navigation facile grâce à react-router-dom.`,
        ],
        techFront: ['React', 'Axios', 'React Router', 'SASS'],
        back: null,
    },

    {
        id: 2,
        name: 'Yoga Timer',
        image: Img2,
        link1: 'https://github.com/FlorianeHJ/Yoga-App.git',
        description:
            'Yoga Timer est une application conçue pour accompagner les utilisateurs dans leur séance de Yoga.',
        aims: [
            'Favoris : En vous connectant, vous pouvez sauvegarder vos positions préférées en les ajoutant à vos favoris.',
            'Ajustement du timer : Ajustez le temps pour chaque position selon vos besoins, afin de personnaliser votre pratique.',
            'Suppression de positions : Si certaines positions ne vous conviennent pas, vous pouvez facilement les supprimer.',
            'Démarrage de compte à rebours : Lancez un compte à rebours pour chaque position de yoga sélectionnée et laissez-vous guider dans votre pratique.',
        ],
        techFront: [
            'React',
            'React Router DOM',
            'Axios',
            'Tailwind CSS',
            'React Icons',
        ],
        back: {
            aimsBack: [
                `Authentification: Les utilisateurs peuvent s'inscrire et se connecter à l'aide de JSON Web Token (JWT).`,
                `Gestion des favoris: Les utilisateurs authentifiés peuvent ajouter des positions de yoga à leurs favoris, qui sont stockées dans MongoDB.`,
                `Sécurité: Le backend utilise 'helmet' et 'express-rate-limit' pour protéger contre les attaques courantes.`,
            ],
            techBack: [
                'Express.js',
                'MongoDB',
                'Mongoose',
                'JWT',
                'bcrypt',
                'dotenv',
            ],
        },
    },
]

export default projects
