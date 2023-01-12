<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

import { useCharacters } from '../composables/useCharacters'
import charactersStore from '@/store/characters.store';

import Logger from '@/utils/logger';

const props = defineProps<{ id: number }>()

const { getCharacterById } = useCharacters()

const {
    data: character
} = useQuery(
    ['character', props.id],
    () => getCharacterById(props.id),
    {
        onSuccess: (data) => {
            Logger.info('CharacterDetail', 'onSuccess', data)
            charactersStore.loadCharacterSuccess(data)
        },
        onError: (error) => {
            Logger.error('CharacterDetail', 'onError', error)
            charactersStore.loadCharacterError(error as Error)
        },
    }
)

</script>

<template>
    <div>
        <router-link :to="{ name: 'characters-list' }">
            <small>Atras</small>
        </router-link>

        <div v-if="!charactersStore.charactersDetail.hasError">
            <h3 v-if="charactersStore.charactersDetail.isLoading">Loading...</h3>
            <div v-else>
                <div class="character">
                    <img :src="character?.image" :alt="character?.name" />
                    <ul>
                        <li>
                            <b>Nombre:</b> {{ character?.name }}
                        </li>
                        <li>
                            <b>Especie:</b> {{ character?.species }}
                        </li>
                        <li>
                            <b>Genero:</b> {{ character?.gender.charAt(0).toUpperCase() }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div v-else>
            <h3>¡Algo salio mal!</h3>
            <span><b>Error:</b> {{ charactersStore.charactersDetail.errorMessage }}</span>
        </div>
    </div>

</template>

<style scoped>
.character {
    display: flex;
    flex-direction: rows;
}

img {
    width: 300px;
    height: 300px;
    border-radius: 10%;
}
</style>