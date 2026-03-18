// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ["@nuxt/ui", "@nuxthub/core", '@nuxtjs/seo'],
    app: {
        viewTransition: true,
        head: {
            titleTemplate: "%s",
            htmlAttrs: {
                lang: "en"
            }
        }
    },
    site: {
        url: "https://nxus.pages.dev",
        name: "Dylan Marcano"
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
