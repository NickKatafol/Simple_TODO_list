<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { ref } from 'vue'

const VITE_DATA = ref(import.meta.env.VITE_DATA)


</script>

<template>
  <div class="app-wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink> 
      <span>|</span>
      <RouterLink to="/about">About</RouterLink>

      <span>VITE_DATA = {{ VITE_DATA }}</span>
    </nav>

    <hr>

    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>

<style scoped lang="scss">
.app-wrapper {
  width: 100%;
  max-width: rem(600);
  margin: 0 auto;

  nav {
    display: flex;

    & :nth-child(2) {
      margin: 0 rem(4);
    }

    span {
      margin-left: auto;
    }
  }

}
</style>
