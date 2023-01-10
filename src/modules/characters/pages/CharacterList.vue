<script setup lang="ts">
import CardList from '@/modules/characters/components/CardList.vue'

import { useCharacters } from '../composables/useCharacters';

const {
    isLoading,
    characters
} = useCharacters()
</script>

<template>
    <div>
        <h2>Character list</h2>

        <span v-if="isLoading">Loading...</span>
        <CardList v-else :characters="characters!" />
    </div>
</template>

<style scoped>

</style>