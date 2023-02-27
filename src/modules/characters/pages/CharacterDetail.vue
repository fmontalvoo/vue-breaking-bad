<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

import { getById } from '@/services';
import charactersStore from '@/store/characters.store'

const props = defineProps<{ id: number }>()

const getCharacterById = async (characterId: number) => {
    try {
        if (charactersStore.checkCharacter(characterId))
            return charactersStore.charactersDetail.list[characterId]
        return await getById(characterId)
    } catch (error) {
        throw error
    }
}

const { data: character } = useQuery(
    ['character', props.id],
    () => getCharacterById(props.id),
    {
        onSuccess: (character) => charactersStore.loadCharacterSuccess(character),
        onError: (error: Error) => charactersStore.loadCharacterError(error)
    }
)

</script>

<template>
    <div>
        <router-link :to="{ name: 'characters-list' }">
            <small>Atras</small>
        </router-link>

        <h3 v-if="charactersStore.charactersDetail.isLoading && !character">Loading...</h3>

        <div v-else-if="charactersStore.charactersDetail.hasError">
            <h3>¡Algo salio mal!</h3>
            <span><b>Error:</b> {{ charactersStore.charactersDetail.errorMessage }}</span>
        </div>

        <div v-else class="character">
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
                <li>
                    <b>Estado:</b> {{ character?.status === 'Alive' ? 'Vivo' : 'Muerto' }}
                </li>
            </ul>
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