/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            primary: 'Playfair Display',
            secondary: 'Lora',
        },
        container: {
            padding: {
                DEFAULT: '15px',
            },
        },
        screens: {
            sm: '640px', // Petit écran, généralement pour les téléphones
            md: '768px', // Écran moyen, tablettes
            lg: '1024px', // Grand écran, ordinateurs portables
            xl: '1280px', // Très grand écran, ordinateurs de bureau
            '2xl': '1536px', // Écrans très larges
        },
        colors: {
            background1: '#FFFFFF',
            background2: '#F5F5F5',
            primary: '#5B5963',
            accent: '#4CCCE6',
            text: '#5B5963',
            transparent: 'transparent',
            btnHover: '#e5e5e5',

            btnActive: '#c4c4ca',
        },

        plugins: [],
    },
}
