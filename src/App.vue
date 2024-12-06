<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'




</script>

<template>
  <div class="app-wrapper">
  <nav>
    <RouterLink to="/">Home</RouterLink>
    |
    <RouterLink to="/about">About</RouterLink>
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
}

</style>
