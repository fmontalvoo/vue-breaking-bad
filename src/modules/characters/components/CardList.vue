<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

import CharacterCard from './CharacterCard.vue'

import { getAll } from '@/services'

// import { useCharacters } from '../composables/useCharacters';

// const {
//     isLoading,
//     characters
// } = useCharacters()

// TanStack Query

const getCharacters = async () => {
    return (await getAll()).results
}

const {
    isLoading,
    data: characters
} = useQuery(
    ['characters'],
    getCharacters,
    {
        cacheTime: 1000 * 60,
        refetchOnReconnect: 'always'
    }
)

</script>

<template>
    <span v-if="isLoading">Loading...</span>
    <div class="card-list" v-else>
        <CharacterCard v-for="character of characters" :key="character.id" :character="character"></CharacterCard>
    </div>
</template>

<style scoped>
.card-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
</style>