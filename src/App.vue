<script setup lang="ts">
import Navbar from "@/modules/characters/components/Navbar.vue";
</script>

<template>
  <div class="wrapper">
    <header>
      <Navbar title="BreakingBad" />
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