<script setup lang="ts">
import type { Character } from '@/models/response.model';
import { useRouter } from 'vue-router';

defineProps<{
    character: Character
}>()


const router = useRouter()
</script>

<template>
    <div class="character-card" @click="router.push(`${character.id}`)">
        <img :src="character.image" :alt="character.name">
        <h5>{{ character.name }}</h5>
    </div>
</template>

<style scoped>
.character-card {
    display: flex;
    cursor: pointer;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 10px;
    align-items: center;
    flex-direction: column;
}

img {
    width: 150px;
    transition: all 0.5s;
    border-radius: 5px 5px 0 0;
    box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
}

img:hover {
    transition: all 0.5s;
    box-shadow: 0 2px 10px rgba(255, 255, 255, 0.5);
}
</style>