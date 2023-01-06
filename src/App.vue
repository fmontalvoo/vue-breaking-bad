<script setup lang="ts">
import Navbar from "@/modules/characters/components/Navbar.vue";
import { routerLinks } from "./router/link-routes";
</script>

<template>
  <div class="wrapper">
    <header>
      <Navbar title="BreakingBad" :links="routerLinks" />
    </header>

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