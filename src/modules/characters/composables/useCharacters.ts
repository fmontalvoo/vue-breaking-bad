import { useQuery } from '@tanstack/vue-query'

import { getAll } from '@/services'

export const useCharacters = () => {

    const {
        isLoading,
        data: characters
    } = useQuery(
        ['characters'],
        async () => (await getAll()).results,
    )

    return {
        isLoading,
        characters,
    }
}