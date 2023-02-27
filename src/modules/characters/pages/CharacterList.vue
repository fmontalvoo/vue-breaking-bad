<script setup lang="ts">
import { getAll } from '@/services'
import { useQuery } from '@tanstack/vue-query'

import charactersStore from '@/store/characters.store'

import CardList from '@/modules/characters/components/CardList.vue'

const getCharacters = async () => {
    try {
        if (charactersStore.characters.count > 0)
            return charactersStore.characters.list
        return (await getAll()).results
    } catch (error) {
        throw error
    }
}

useQuery(
    ['characters'],
    getCharacters,
    {
        onSuccess: (data) => charactersStore.loadCharactersSuccess(data),
        onError: (error: Error) => charactersStore.loadCharactersError(error)
    }
)

</script>

<template>
    <div>
        <h2>Character list: [{{ charactersStore.characters.count }}]</h2>

        <div v-if="!charactersStore.characters.hasError">
            <h3 v-if="charactersStore.characters.isLoading">Loading...</h3>
            <CardList v-else :characters="charactersStore.characters.list" />
        </div>
        <div v-else>
            <h3>¡Algo salio mal!</h3>
            <span><b>Error:</b> {{ charactersStore.characters.errorMessage }}</span>
        </div>
    </div>
</template>

<style scoped></style>