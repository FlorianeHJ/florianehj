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
            primary: '#C2E6FF',
            secondary: '#0D1520',
            accent: '#70B8FF',
            transparent: 'transparent',
        },
        extend: {
            backgroundImage: {
                site: "url('./assets/bg1.png')",
            },
        },
        plugins: [],
    },
}
