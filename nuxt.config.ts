// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxtjs/device",
        "@nuxt/image"
    ],
    css: ["~/assets/css/main.css"],
    app: {
        head: {
            link: [
                {rel: "preconnect", href: "https://fonts.googleapis.com"},
                {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: ""},
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;700&display=swap"
                }
            ]
        }
    },
    tailwindcss: {
        configPath: 'tailwind.config.ts'
    },
    devServer: {
        host: '0.0.0.0'
    },
    ssr: true
})