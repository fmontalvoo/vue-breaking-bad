import { computed, ref } from 'vue';

import { useQuery } from '@tanstack/vue-query'

import { getById } from '@/services'

import type { Character } from '@/models/response.model'

const errorMessage = ref<string>('')
const hasError = ref<boolean>(false)
const isLoading = ref<boolean>(false)
const characterSet = ref<{ [id: number]: Character }>({})

const getCharacterById = async (characterId: number) => {
    isLoading.value = true

    if (characterSet.value[characterId])
        return characterSet.value[characterId]

    try {
        return await getById(characterId)
    } catch (error) {
        throw error
    }

}
export const useCharacter = (id: number) => {

    useQuery(
        ['characters', id],
        () => getCharacterById(id),
        {
            onSuccess: (character) => {
                characterSet.value[character.id] = character
                isLoading.value = false
            },
            onError: (error: Error) => {
                hasError.value = true
                isLoading.value = false
                errorMessage.value = error.message
            }
        }
    )

    return {
        hasError,
        isLoading,
        errorMessage,
        list: characterSet,
        character: computed(() => characterSet.value[id])
    }
}