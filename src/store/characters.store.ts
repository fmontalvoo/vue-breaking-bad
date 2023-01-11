import { reactive } from 'vue'

import type { Character } from '@/models/response.model'

import { getAll } from '@/services'

import Logger from '@/utils/logger'

interface Store {
    characters: {
        list: Character[]
        count: number
        isLoading: boolean
        hasError: boolean
        errorMessage: string
    },
    startLoadingCharacters: () => void,
    loadCharactersSuccess: (characters: Character[]) => void,
    loadCharactersError: (error: string) => void,
}

const charactersStore = reactive<Store>({
    characters: {
        list: [],
        count: 0,
        isLoading: true,
        hasError: false,
        errorMessage: '',
    },
    async startLoadingCharacters() {
        this.loadCharactersSuccess((await getAll()).results)
    },
    loadCharactersSuccess(characters: Character[]) {
        Logger.log('loadCharactersSuccess', characters)
        this.characters = {
            hasError: false,
            isLoading: false,
            list: characters,
            errorMessage: '',
            count: characters.length,
        }
    },
    loadCharactersError(error: string) {

    },
})

charactersStore.startLoadingCharacters()

export default charactersStore