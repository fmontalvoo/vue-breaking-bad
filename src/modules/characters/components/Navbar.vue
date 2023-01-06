<script setup lang="ts">
// defineProps({
//     title: {
//         type: String,
//         required: true,
//         default: 'Breaking Bad'
//     }
// })

defineProps<{
    title?: string,
}>()
</script>

<template>
    <nav>
        <img src="@/assets/logo.svg" alt="Logo" width="25" height="25">
        <span>{{ title }}</span>

        <router-link to="/characters">Characters</router-link>
    </nav>
</template>

<style scoped>
nav {
    width: 100%;
    display: flex;
    font-size: 12px;
    margin-top: 10px;
    text-align: center;
    align-items: flex-start;
}

span {
    margin-left: 10px;
    margin-right: 10px;
}

img {
    margin-right: 5px;
}

a {
    margin-right: 10px;
}
</style>