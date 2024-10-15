/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            primary: 'Orbitron',
            secondary: 'Rajdhani',
            tertiary: 'Aldrich',
        },
        container: {
            padding: {
                DEFAULT: '15px',
            },
        },
        screens: {
            sm: '530px',
            md: '845px',
            lg: '1024px',
            xl: '1280px',
        },
        colors: {
            background1: '#FFFFFF',
            background2: '#F5F5F5',
            primary: '#5B5963',
            accent: '#4CCCE6',
            text: '#5B5963',
            transparent: 'transparent',
        },

        plugins: [],
    },
}
