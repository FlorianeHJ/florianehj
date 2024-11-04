// src/data/projects.js
import ImgCW1 from '../assets/crypto-tower/1.png'
import ImgKasa1 from '../assets/kasa/1.png'
import ImgGrimoire1 from '../assets/mon-vieux-grimoire/1.png'
import ImgMovie1 from '../assets/movie-app/1.png'
import ImgNC1 from '../assets/nina-carducci/1.png'
import ImgSB1 from '../assets/sophie-bluel/1.png'
import ImgYoga1 from '../assets/Yoga Timer/1.png'

const projects = [
    {
        id: 1,
        name: 'Yoga Timer',
        image: ImgYoga1,
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
        id: 2,
        name: 'Movie App',
        image: ImgMovie1,
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
        id: 3,
        name: 'Crypto Watch',
        image: ImgCW1,
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
        image: ImgKasa1,
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
        image: ImgNC1,
        link1: 'https://github.com/FlorianeHJ/OC---Nina-Carducci',
        description: `Ce projet consistait à remettre à neuf un site web existant en améliorant son SEO (optimisation pour les moteurs de recherche) et son accessibilité. Plusieurs aspects techniques ont été pris en charge, incluant la correction de bugs, l'optimisation des performances, ainsi que des améliorations SEO techniques et locales.`,
        aims: [
            `Débuggage du site : Correction des erreurs techniques pour améliorer la stabilité du site.`,
            `Optimisation des performances : Amélioration des temps de chargement, notamment en utilisant des outils comme Google Lighthouse pour identifier les opportunités d'amélioration.`,
            `Optimisation SEO technique : Mise en place des meilleures pratiques SEO, telles que la gestion des balises meta.`,
            `Référencement local et réseaux sociaux : Ajout de données pour améliorer le référencement local et l'intégration des réseaux sociaux (Open Graph, Twitter Cards).`,
            `Correction de l'accessibilité : Mise en conformité avec les normes d'accessibilité, en utilisant des outils comme l'extension Chrome WAVE et Google Lighthouse.`,
        ],
        techFront: ['Bootstrap', 'Google Lighthouse', 'WAVE'],
        back: null,
    },
    {
        id: 6,
        name: 'Mon vieux Grimoire',
        image: ImgGrimoire1,
        link1: 'https://github.com/FlorianeHJ/OC---Grimoire',
        description:
            '"Mon Vieux Grimoire" est un site de référencement et de notation de livres, développé pour la librairie "Au Vieux Grimoire", qui permet aux utilisateurs de créer des livres, de les noter et de consulter les ouvrages existants ainsi que leurs évaluations.',
        aims: [
            `Inscription / Connexion : Les utilisateurs peuvent s'inscrire ou se connecter pour interagir avec la plateforme.`,
            `Page d'accueil : Présente tous les livres ajoutés par les utilisateurs, avec leurs titres et images.`,
            `Page livre : Affiche les détails d'un livre spécifique (image, titre, auteur, année, genre, et note moyenne).`,
            `Noter les livres : Les utilisateurs peuvent attribuer une note entre 0 et 5 étoiles à un livre.`,
            `Ajouter un livre : Les utilisateurs connectés peuvent ajouter de nouveaux livres avec des champs pour l'image, le titre, l'auteur, l'année, et le genre.`,
            `Gestion des livres : Le créateur d'un livre peut le modifier ou le supprimer.`,
        ],
        techFront: [
            'React',
            'React Router',
            'React Hook Form',
            'Axios',
            'Fontawesome',
        ],
        back: {
            aimsBack: [
                `Inscription d'utilisateur : Les utilisateurs peuvent s'inscrire en fournissant un email et un mot de passe, qui est haché avant d'être stocké.`,

                `Connexion utilisateur : Un utilisateur peut se connecter en fournissant ses identifiants, et reçoit un token JWT en cas de succès.`,

                `Middleware d'authentification : Les routes sensibles sont protégées par un middleware qui vérifie la validité du token JWT.`,

                `Ajout d'un livre : Les utilisateurs peuvent ajouter un livre avec des informations telles que le titre, l'auteur et une image de couverture.`,

                `Modification d'un livre : Un utilisateur peut modifier les détails d'un livre qu'il a ajouté, y compris le titre, l'auteur et l'image.`,

                `Suppression d'un livre : Un utilisateur peut supprimer un livre de la base de données.`,

                `Récupération de tous les livres : Tous les livres enregistrés peuvent être récupérés via une route dédiée.`,

                `Récupération d'un livre : Un utilisateur peut consulter les détails d'un livre spécifique en utilisant son identifiant.`,

                `Ajout d'une note : Un utilisateur peut laisser une note sur un livre.`,

                `Téléchargement d'image : Les images téléchargées, comme les couvertures de livres, sont redimensionnées et optimisées avant d'être stockées.`,

                `Protection contre les attaques par force brute : Le backend limite le nombre de requêtes par IP pour empêcher les attaques par force brute.`,
            ],
            techBack: [
                'Node.js',
                'Express.js',
                'MongoDB',
                'Mongoose',
                'dotenv',
                'express-rate-limit',
                'JWT',
                'bcrypt',
                'multer',
                'sharp',
                'uuid',
            ],
        },
    },
    {
        id: 7,
        name: 'Portfolio - Sophie Bluel',
        image: ImgSB1,
        link1: 'https://github.com/FlorianeHJ/OC---Sophie-Bluel.git',
        description: `Site vitrine pour une photographe, Sophie Bluel, permettant de présenter ses travaux et de gérer ses photos via une interface d'administration (ajouter ou supprimer une photo).`,
        aims: [
            `Page de Présentation : Affiche les travaux de la photographe avec une interface conviviale.`,
            `Page de Connexion : Permet à l'administrateur de se connecter en tant qu'administrateur.`,

            `Modale de modification : Offre la possibilité d'ajouter de nouvelles photos, ou de supprimer des photos existantes.`,
            `Mise à jour de la page d'accueil après ajout ou suppression des oeuvres via la modale.`,
        ],
        techFront: ['javascript', 'CSS', 'HTML'],
        back: null,
    },
]

export default projects
