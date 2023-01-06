<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { RouteLink } from '@/router/link-routes'

interface Props {
    title?: string
    links?: RouteLink[]
}

defineProps<Props>()
</script>

<template>
    <header>
        <nav>
            <img src="@/assets/logo.svg" alt="Logo" width="25" height="25">
            <span>{{ title }}</span>

            <div v-if="links">
                <router-link v-for="{ name, path, title } of links" :key="name" :to="path">{{ title }}</router-link>
            </div>
        </nav>
    </header>
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