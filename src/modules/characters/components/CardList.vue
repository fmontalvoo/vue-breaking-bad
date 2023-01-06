<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

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
    <ul v-else>
        <li v-for="{ id, name } of characters" :key="id">{{ name }}</li>
    </ul>
</template>

<style scoped>

</style>