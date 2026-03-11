import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/Home/Home.vue")
    },
    {
      path: "/blog",
      component: () => import("../views/Blog/Blog.vue")
    },
    {
      path: "/blog/:id",
      component: () => import("../views/Post/Post.vue")
    },
    {
      path: "/:pathMatch(.*)*", name: "NotFound", component: () => import("../views/404/404.vue")
    },
    {
      path: "/admin",
      component: () => import("../views/admin/Admin.vue"),
      children: [
        { path: "", component: () => import("../views/admin/subRoutes/Login.vue") },
        { path: "dashboard", meta: { requiresAuth: true }, component: () => import("../views/admin/subRoutes/Dashboard.vue") },
        { path: "editor", meta: { requiresAuth: true }, component: () => import("../views/admin/subRoutes/Editor.vue") },
      ]
    },

  ],
})

router.beforeEach(async (to) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const res = await fetch("https://nxus-api-blog.nxus-dev.workers.dev/api/admin/api/me", {
      credentials: "include"
    })
    if (!res.ok) {
      return {
        name: "NotFound"
      }
    }
  }
});

export default router
