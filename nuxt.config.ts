// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ["@nuxt/ui", "@nuxthub/core", '@nuxtjs/seo', '@nuxt/fonts'],
    app: {
        viewTransition: true,
        head: {
            titleTemplate: "%s",
            htmlAttrs: {
                lang: "en"
            }
        }
    },
    experimental: {
        componentIslands: true,
    },
    ogImage: {
        zeroRuntime: true,
        defaults: {
            renderer: "satori"
        }
    },
    site: {
        url: "https://nxus.pages.dev",
        name: "Dylan Marcano"
    },
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: [
                '/',
            ],
        },
    },
    routeRules: {
        "/admin/**": {
            prerender: false,
        },
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
