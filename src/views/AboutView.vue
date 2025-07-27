<script setup lang="ts">
import markdown from 'markdown-it'
import README from '../../README.md?raw'

const md = markdown({html: false})
const mdText = md.render(README)


</script>

<template>
  <div class="about-wrapper"
       v-html="mdText"
  >
  </div>
</template>


<style scoped>
</style>

