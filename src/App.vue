<script setup lang="ts">
import Navbar from "@/shared/components/Navbar.vue";
import { routerLinks } from "./router/link-routes";
</script>

<template>
  <div class="wrapper">
    <Navbar title="Rick and Morty" :links="routerLinks" />

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>