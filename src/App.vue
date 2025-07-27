<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

const VITE_DATA = ref(import.meta.env.VITE_DATA)


</script>

<template>
  <div class="w-[100%] max-w-180 mx-auto">
    <nav class="flex py-4">
      <RouterLink to="/" class="text-purple-900 visited:text-purple-600 hover:text-purple-400 transition-colors duration-200">Home</RouterLink>
      <span class="mx-3">|</span>
      <RouterLink to="/about" class="visited:text-purple-600 hover:text-purple-400 transition-colors duration-200">About</RouterLink>

      <span class="ml-auto">VITE_DATA = {{ VITE_DATA }}</span>
    </nav>

    <hr />

    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>

<style scoped>
</style>


