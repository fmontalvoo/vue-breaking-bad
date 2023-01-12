import { useQuery } from '@tanstack/vue-query'

import { getById } from '@/services'

import charactersStore from '@/store/characters.store';

export const useCharacters = () => {

    const getCharacterById = async (characterId: number) => {
        charactersStore.startLoadingCharacter()
        
        if (charactersStore.checkCharacter(characterId))
            return charactersStore.charactersDetail.list[characterId]

        return await getById(characterId)
    }


    const {
        isLoading,
        data: characters
    } = useQuery(
        ['characters'],
        () => {
            if (charactersStore.characters.count > 0)
                return charactersStore.characters.list
        },
    )

    return {
        isLoading,
        characters,
        getCharacterById,
    }
}