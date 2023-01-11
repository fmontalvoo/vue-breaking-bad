<script setup lang="ts">
import CardList from '@/modules/characters/components/CardList.vue'

import charactersStore from '@/store/characters.store';

import { useCharacters } from '../composables/useCharacters';

useCharacters()

</script>

<template>
    <div>
        <h2>Character list</h2>

        <div v-if="!charactersStore.characters.hasError">
            <h3 v-if="charactersStore.characters.isLoading">Loading...</h3>
            <CardList v-else :characters="charactersStore.characters.list!" />
        </div>
        <div v-else>
            <h3>¡Algo salio mal!</h3>
            <span><b>Error:</b> {{ charactersStore.characters.errorMessage }}</span>
        </div>
    </div>
</template>

<style scoped>

</style>