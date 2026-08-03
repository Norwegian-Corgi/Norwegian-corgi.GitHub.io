import {getIconCollections, iconsPlugin} from "@egoist/tailwindcss-icons";

module.exports = {
    theme: {
        extend: {
            // "Vibrant Dark" design system — see DESIGN.md
            colors: {
                surface: {
                    DEFAULT: '#0c0c21',
                    lowest: '#000000',
                    low: '#111128',
                    container: '#171730',
                    high: '#1d1d38',
                    highest: '#232341',
                    bright: '#292949',
                },
                primary: {
                    DEFAULT: '#ff8aa5',
                    container: '#ff7195',
                    dim: '#e40a65',
                    on: '#620027',
                },
                secondary: {
                    DEFAULT: '#00fcca',
                    dim: '#00edbd',
                    on: '#005b47',
                },
                tertiary: {
                    DEFAULT: '#ffeeab',
                    dim: '#efd13b',
                },
                content: {
                    DEFAULT: '#e5e3ff',
                    variant: '#aaa8c4',
                    muted: '#74738d',
                },
                outline: {
                    DEFAULT: '#74738d',
                    variant: '#46465d',
                },
            },
            fontFamily: {
                display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                label: ['"Space Grotesk"', 'ui-monospace', 'monospace'],
            },
            letterSpacing: {
                label: '0.05em',
                wider: '0.15em',
            },
            keyframes: {
                marquee: {
                    from: {transform: 'translateX(0)'},
                    to: {transform: 'translateX(-50%)'},
                },
            },
            animation: {
                marquee: 'marquee 40s linear infinite',
            },
        },
    },
    plugins: [
        iconsPlugin({
            // simple-icons carries the brand logos; grommet-icons covers the rest
            // (and Java, which simple-icons dropped over trademark).
            collections: getIconCollections(["grommet-icons", "simple-icons"]),
        }),
    ],
}
