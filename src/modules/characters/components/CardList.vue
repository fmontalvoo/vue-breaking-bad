<script setup lang="ts">
import { useCharacters } from '../composables/useCharacters';

const {
    isLoading,
    characters
} = useCharacters()

</script>

<template>
    <span v-if="isLoading">Loading...</span>
    <ul v-else>
        <li v-for="{ id, name } of characters" :key="id">{{ name }}</li>
    </ul>
</template>

<style scoped>

</style>