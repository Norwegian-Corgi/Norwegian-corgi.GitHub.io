import {getIconCollections, iconsPlugin} from "@egoist/tailwindcss-icons";

module.exports = {
    theme: {
        extend: {
            colors: {
                green: {
                    custom: '#009a75',
                },
                blue: {
                    custom: '#222222'
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