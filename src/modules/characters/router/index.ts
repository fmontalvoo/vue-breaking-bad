import type { RouteRecordRaw } from 'vue-router'

import CharacterLayout from '@/modules/characters/layout/CharacterLayout.vue';

const router: RouteRecordRaw = {
    path: '/characters',
    name: 'characters',
    redirect: { name: 'characters-list' },
    component: CharacterLayout,
    children: [
        {
            path: 'list',
            name: 'characters-list',
            component: () => import('@/modules/characters/pages/CharacterList.vue'),
        },
        {
            path: 'search',
            name: 'characters-search',
            component: () => import('@/modules/characters/pages/CharacterSearch.vue'),
        },
        {
            path: ':id',
            name: 'characters-detail',
            component: () => import('@/modules/characters/pages/CharacterDetail.vue'),
        },
    ]
}

export default router