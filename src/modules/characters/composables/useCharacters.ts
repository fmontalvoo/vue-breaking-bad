import { ref } from 'vue';

import { getAll } from '@/services'

import type { Character } from '@/models/response.model';

import Logger from '@/utils/logger';

const characters = ref<Character[]>([])
const isLoading = ref(true)

export const useCharacters = () => {

    getAll().then((response) => {
        Logger.log(response.info)

        isLoading.value = false
        characters.value = response.results
    })

    return {
        isLoading,
        characters,
    }
}