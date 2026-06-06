// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ["@nuxt/ui", "@nuxtjs/sitemap"],
    app: {
        viewTransition: true,
        head: {
            script: [
                {
                    src: 'https://static.cloudflareinsights.com/beacon.min.js',
                    defer: true,
                    'data-cf-beacon': JSON.stringify({ token: '9851a764004d4b6cb5c39bdbe5dac3fa' })
                }
            ],
            titleTemplate: "%s",
            htmlAttrs: {
                lang: "en"
            }
        },
    },
    nitro: {
        prerender: {
            crawlLinks: false,
            routes: [
                '/',
            ],
        },
    },
    routeRules: {
        "/admin/**": {
            prerender: false,
        },
        "/blog/**": {
            isr: 3600
        }

    },
    vite: {
        optimizeDeps: {
            include: [
                '@nuxt/ui > prosemirror-state',
                '@nuxt/ui > prosemirror-transform',
                '@nuxt/ui > prosemirror-model',
                '@nuxt/ui > prosemirror-view',
                '@nuxt/ui > prosemirror-gapcursor'
            ]
        }
    },
})
