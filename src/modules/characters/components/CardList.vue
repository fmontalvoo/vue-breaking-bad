<script setup lang="ts">
import { getAll } from '@/services'

getAll().then((data) => {
    console.log(data)
})
</script>

<template>
    <div>

    </div>
</template>

<style scoped>

</style>