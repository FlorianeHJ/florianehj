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
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
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
            text2: '#010101',
        },

        plugins: [],
    },
}
