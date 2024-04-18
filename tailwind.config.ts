import {getIconCollections, iconsPlugin} from "@egoist/tailwindcss-icons";

module.exports = {
    theme: {
        extend: {
            colors: {
                green: {
                    custom: '#00DC82',
                },
                blue: {
                    custom: '#020420'
                }
            }
        },
    },
    plugins: [
        iconsPlugin({
            collections: getIconCollections(["grommet-icons"]),
        }),
    ],
}