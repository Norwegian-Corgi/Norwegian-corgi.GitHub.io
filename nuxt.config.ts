// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        "@element-plus/nuxt",
        "@nuxtjs/tailwindcss",
        "@nuxtjs/device",
        "@nuxt/image"
    ],
    css: ["~/assets/css/main.css"],
    elementPlus: {
        icon: 'ElIcon',
        importStyle: 'css',
    },
    tailwindcss: {
        configPath: 'tailwind.config.ts'
    },
    devServer: {
        host: '0.0.0.0'
    }
})