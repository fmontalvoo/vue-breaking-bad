<script setup lang="ts">
import type { Character } from '@/models/response.model';

defineProps<{
    character: Character
}>()

</script>

<template>
    <div class="character-card">
        <img :src="character.image" :alt="character.name">
        <h5>{{ character.name }}</h5>
    </div>
</template>

<style scoped>
.character-card {
    display: flex;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 10px;
    align-items: center;
    flex-direction: column;
}

img {
    width: 150px;
    border-radius: 5px 5px 0 0;
    box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
}
</style>