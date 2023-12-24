const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    safelist: [
        'shadow-budget-primary',
        'shadow-midrange-primary',
        'shadow-premium-primary',
        'border-budget-primary',
        'border-midrange-primary',
        'border-premium-primary',
        'text-budget-secondary',
        'bg-budget-primary',
        'text-midrange-secondary',
        'bg-midrange-primary',
        'text-premium-secondary',
        'bg-premium-primary',
    ],
    theme: {
        screens: {
            'sm': '600px',
            'md': '640px',
            'lg': '728px',
            'xl': '960px',
            '2xl': '1240px',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1.5rem',
                lg: '2rem',
                xl: '2rem',
                '2xl': '2rem',
            }
        },
        extend: {
            colors: {
                'site': {
                    300: '#d7b53b',
                    400: '#d2ab23',
                    500: '#CDA20A',
                    600: '#b99209',
                    700: '#a48208',
                },
                'budget': {
                    'primary': '#0364B0',
                    'secondary': '#FFFFFF'
                },
                'midrange': {
                    'primary': '#731DD5',
                    'secondary': '#FFFF00',
                },
                'premium': {
                    'primary': '#870000',
                    'secondary': '#FFFFFF'
                },
                'best-budget': {
                    'primary': '#0364B0',
                    'secondary': '#FAD000'
                },
                'best-selling': {
                    'primary': '#0bda51',
                    'secondary': '#333333'
                },
                'high-performance': {
                    'primary': '#ffdf04',
                    'secondary': '#e53029'
                },
                'popular-choice': {
                    'primary': '#0F1111',
                    'secondary': '#f08804'
                },
                'custom': {
                    'primary': '#000000',
                    'secondary': '#FFFFFF'
                },
            },
            fontFamily: {
                'poppins': ['Poppins', ...defaultTheme.fontFamily.sans],
                'open-sans': ['OpenSans', ...defaultTheme.fontFamily.sans],
                'montserrat': ['Montserrat', ...defaultTheme.fontFamily.sans],
                'number-plate': ['NumberPlate', ...defaultTheme.fontFamily.sans]
            },
            gridTemplateColumns: {
                '21': 'repeat(21, minmax(0, 1fr))',
                '27': 'repeat(27, minmax(0, 1fr))',
            }
        },
    },
    plugins: [],
}
