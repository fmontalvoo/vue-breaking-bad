import { computed, ref } from 'vue';

import { useQuery } from '@tanstack/vue-query'

import { getAll } from '@/services'

import type { Character } from '@/models/response.model';

const errorMessage = ref<string>('')
const hasError = ref<boolean>(false)
const characters = ref<Character[]>([])

export const useCharacters = () => {
    const { isLoading } = useQuery(
        ['characters'],
        async () => {
            try {
                return (await getAll()).results
            } catch (error) {
                throw error
            }
        },
        {
            onSuccess: (data) => {
                characters.value = data
            },
            onError: (error: Error) => {
                hasError.value = true
                errorMessage.value = error.message
            }
        }
    )

    return {
        hasError,
        isLoading,
        characters,
        errorMessage,
        count: computed(() => characters.value.length)
    }
}