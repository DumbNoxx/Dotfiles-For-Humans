export default defineNuxtRouteMiddleware(async (to, from) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const res = await fetch("https://nxus-api-blog.nxus-dev.workers.dev/api/admin/api/me", {
            credentials: "include",
        })
        if (!res.ok) {
            throw createError({
                statusCode: 403,
                statusMessage: 'Access Denied', 
                fatal: true 
            })
        }
    }
    return true
})
