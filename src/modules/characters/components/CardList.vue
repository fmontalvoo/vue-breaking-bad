<script setup lang="ts">
import { ref } from 'vue';

import { getAll } from '@/services'

import type { Character } from '@/models/response.model';

const response = await getAll();
const characters = ref<Character[]>(response.results);

</script>

<template>
    <ul>
        <li v-for="{ id, name } of characters" :key="id">{{ name }}</li>
    </ul>
</template>

<style scoped>

</style>