export interface RouteLink {
    name: string
    path: string
    title: string
}

export const routerLinks: RouteLink[] = [
    {
        name: 'characters',
        path: '/characters',
        title: 'Characters'
    }
]