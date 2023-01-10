import { reactive } from "vue"

import type { Character } from "@/models/response.model"

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
    startLoadingCharacters() {

    },
    loadCharactersSuccess(characters: Character[]) {

    },
    loadCharactersError(error: string) {

    },
})

export default charactersStore