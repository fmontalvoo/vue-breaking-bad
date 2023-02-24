import ErrorLayout from '@/modules/errors/layout/ErrorLayout.vue'

const router = {
    name: 'error',
    redirect: { name: 'not-found' },
    component: ErrorLayout,
    children: [
        {
            path: '404',
            name: 'not-found',
            component: () => import('@/modules/errors/pages/NotFound.vue'),
        },
    ]
}

export default router