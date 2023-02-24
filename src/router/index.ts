import { createRouter, createWebHistory } from "vue-router"

import errorRoutes from '@/modules/errors/router'
import characterRoutes from '@/modules/characters/router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/characters',
            ...characterRoutes
        },
        {
            path: '/error',
            ...errorRoutes
        },
        {
            path: '/',
            redirect: () => ({ name: 'characters-list' })
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: () => ({ name: 'not-found' })
        }
    ]
})

// router.addRoute(characterRouter)

export default router