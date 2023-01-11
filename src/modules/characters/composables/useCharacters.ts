import { useQuery } from '@tanstack/vue-query'

import charactersStore from '@/store/characters.store';

export const useCharacters = () => {

    const {
        isLoading,
        data: characters
    } = useQuery(
        ['characters'],
        () => {
            if (charactersStore.characters.count > 0)
                return charactersStore.characters.list
        },
        {
            onSuccess(data) {
                charactersStore.loadCharactersSuccess(data!)
            }
        }
    )

    return {
        isLoading,
        characters,
    }
}