<script setup lang="ts">
defineProps<{ id: number }>()
</script>

<template>
    <div>
        <router-link :to="{ name: 'characters-list' }">
            <small>Atras</small>
        </router-link>
        <h2>Character detail:{{ id }}</h2>
    </div>
</template>

<style scoped>

</style>