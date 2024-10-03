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
            sm: '640px',
            md: '768px',
            lg: '1020px',
            xl: '1280px',
        },
        colors: {
            background: '#082f49',
            primary: '#0a0a0a',
            accent: '#f0f9ff',
        },
        extend: {},
    },
    plugins: [],
}
