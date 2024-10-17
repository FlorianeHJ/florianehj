// src/data/projects.js
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'
import Img4 from '../assets/portfolio-img4.png'
import Img5 from '../assets/portfolio-img5.png'

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
    {
        id: 3,
        name: 'Crypto Watch',
        image: Img3,
        link1: 'https://github.com/FlorianeHJ/Crypto-watch.git',
        description: `Crypto-Watch est une application web qui permet de suivre en temps réel l'évolution des cryptomonnaies avec des graphiques interactifs et des options de filtrage. L'application offre la possibilité de trier les cryptomonnaies selon plusieurs critères (comme les performances par période) et est construite avec React et Redux pour une gestion efficace de l'état.`,
        aims: [
            `Mise à jour en temps réel : Suivez les fluctuations des cryptomonnaies presque en direct.`,
            `Graphiques interactifs : Visualisez les données à l'aide de graphiques élégants (via recharts).`,
            `Filtrage des données : Trier les cryptomonnaies avec ou sans "Table Coin", trier les performances par fréquence/période.`,
            `Gestion de l'état avec Redux : Utilisation de @reduxjs/toolkit et react-redux pour une gestion centralisée de l'état.`,
            `Stylisation : Le projet utilise Sass pour les styles avancés.`,
        ],
        techFront: [
            'React',
            'Redux & Redux ToolKit',
            'Axios',
            'Recharts',
            'SASS',
        ],
        back: null,
    },
    {
        id: 4,
        name: 'Kasa',
        image: Img4,
        link1: 'https://github.com/FlorianeHJ/OC---kasa.git',
        description: `Kasa est une application web qui permet aux utilisateurs de consulter différentes locations d'appartements. Chaque appartement est présenté avec des détails complets, y compris des informations sur l'hôte, un carroussel de photos, le lieu, les équipements disponibles et les notes attribuées par les utilisateurs.`,
        aims: [
            `Affichage de l'ensemble des appartements: Affichage sur la page d'accueil l'ensemble des location disponible`,
            `Détails de chaque appartement : Hôte, lieu, équipements, évaluations...`,
            `Mise en place d'un slideshow pour chaque location`,
            `Mise en place de collapse pour les équipements`,
        ],
        techFront: ['React', 'React Router DOM', 'SASS'],
        back: null,
    },
    {
        id: 5,
        name: 'Nina Carducci',
        image: Img5,
        link1: 'https://github.com/FlorianeHJ/OC---Nina-Carducci',
        description: `Ce projet consiste à remettre à neuf un site web existant en améliorant son SEO (optimisation pour les moteurs de recherche) et son accessibilité. Plusieurs aspects techniques ont été pris en charge, incluant la correction de bugs, l'optimisation des performances, ainsi que des améliorations SEO techniques et locales.`,
        aims: [
            `Affichage de l'ensemble des appartements: Affichage sur la page d'accueil l'ensemble des location disponible`,
            `Détails de chaque appartement : Hôte, lieu, équipements, évaluations...`,
            `Mise en place d'un slideshow pour chaque location`,
            `Mise en place de collapse pour les équipements`,
        ],
        techFront: ['React', 'React Router DOM', 'SASS'],
        back: null,
    },
]

export default projects
