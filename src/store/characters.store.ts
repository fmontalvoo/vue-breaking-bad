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
    loadCharactersError: (error: Error) => void,
}

const charactersStore = reactive<Store>({
    characters: {
        list: [],
        count: 0,
        isLoading: true,
        hasError: false,
        errorMessage: '',
    },
    startLoadingCharacters() {
        getAll()
            .then(response => this.loadCharactersSuccess(response.results))
            .catch(error => this.loadCharactersError(error))
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
    loadCharactersError(error: Error) {
        Logger.error('loadCharactersError', error)
        this.characters = {
            hasError: true,
            isLoading: false,
            list: [],
            errorMessage: error.message,
            count: 0,
        }
    },
})

charactersStore.startLoadingCharacters()

export default charactersStore