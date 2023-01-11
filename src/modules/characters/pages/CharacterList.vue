<script setup lang="ts">
import CardList from '@/modules/characters/components/CardList.vue'

import charactersStore from '@/store/characters.store';

import { useCharacters } from '../composables/useCharacters';

useCharacters()

</script>

<template>
    <div>
        <h2>Character list</h2>

        <span v-if="charactersStore.characters.isLoading">Loading...</span>
        <CardList v-else :characters="charactersStore.characters.list!" />
    </div>
</template>

<style scoped>

</style>