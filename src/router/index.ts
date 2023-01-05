import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/characters',
            name: 'characters',
            component: import('@/modules/characters/layout/CharacterLayout.vue'),
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: () => ({ name: 'characters' })
        }
    ]
})

export default router