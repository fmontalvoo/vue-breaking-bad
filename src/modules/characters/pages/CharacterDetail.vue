<script setup lang="ts">
defineProps<{ id: string | number }>()
</script>

<template>
    <div>
        <h2>Character detail:{{ id }}</h2>
    </div>
</template>

<style scoped>

</style>