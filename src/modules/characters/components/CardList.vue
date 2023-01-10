<script setup lang="ts">
import CharacterCard from './CharacterCard.vue'

import type { Character } from '@/models/response.model';

defineProps<{ characters: Character[] }>()
</script>

<template>
    <div class="card-list">
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