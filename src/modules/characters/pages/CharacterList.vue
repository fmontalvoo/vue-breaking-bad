<script setup lang="ts">
import CardList from '@/modules/characters/components/CardList.vue'

import { useCharacters } from '../composables/useCharacters';

const {
    count,
    hasError,
    isLoading,
    characters,
    errorMessage,
} = useCharacters()

</script>

<template>
    <div>
        <h2>Character list: [{{ count }}]</h2>

        <div v-if="!hasError">
            <h3 v-if="isLoading">Loading...</h3>
            <CardList v-else :characters="characters!" />
        </div>
        <div v-else>
            <h3>¡Algo salio mal!</h3>
            <span><b>Error:</b> {{ errorMessage }}</span>
        </div>
    </div>
</template>

<style scoped>

</style>