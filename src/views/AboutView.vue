<script setup lang="ts">


</script>

<template>
  <div class="about-wrapper">
    ABOUT

    <div class="my-text">
      <br>Project architecture under
      <br>-Object Oriented Programming rules
      <br>-SOLID Principals
      <br>
      <br>TypeScript
      <br>
      <br>JS Class
      <br>All of the manipulation with the Task goes VIA CLASS METHODS.
      <br>Delete item itself(!) via the class instance method. It's unnecessary for a simple project but critical helpful
      for a real big project with complex JS logic.
      <br>
      <br>Holding the click Event from several targets by only the one EventListeners. (itemHolderForDelete)
      <br>Pick up the TaskInstanse and hold them WITHOUT using eny of an iteration circle.
      <br>
      <br>Pinia
      <br>
      <br>SCSS functions (rem, percent)
      <br>SCSS variables
      <br>SCSS classes structure
      <br>SCSS @extend
      <br>
      <br>BEM
      <br>flexbox
      <br>v-memo directive for good project performance
      <br>Resive the initial data from the external resource.
      <br>
      <br>End-to-end Tests (Cypress.io) (npm run test:e2e:dev)
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-wrapper {
  padding: rem(6) 0;

  .my-text {
    white-space: pre-line;
    margin-top: rem(40);
  }
}
</style>