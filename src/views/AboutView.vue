<script setup lang="ts">
import markdown from 'markdown-it'
import README from '../../README.md?raw'

const md = markdown({html: false, assetsInclude: true})
const mdText = md.render(README)


</script>

<template>
  <div class="about-wrapper"
       v-html="mdText"
  >
  </div>
</template>

<style lang="scss" scoped>
.about-wrapper {
  padding: rem(6) 0;
}

.logo {
  width: rem(600);
  height: rem(300);
  pointer-events: none;
}
</style>