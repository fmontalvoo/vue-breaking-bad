import { createRouter, createWebHistory } from "vue-router"

import characterRouter from '@/modules/characters/router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            redirect: () => ({ name: 'characters' })
        }
    ]
})

router.addRoute(characterRouter)

export default router