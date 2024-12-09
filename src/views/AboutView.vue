<script setup lang="ts">
import task from "@/assets/data/task.gif";


</script>

<template>
  <div class="about-wrapper">
    <h3># Objectives</h3>

    <img src='@/assets/data/task.gif' class="logo" alt="logo" />

    <br>Additional objectives:
    <br>-Scalability
    <br>-Performance
    <br>-Reliability
    <br>

    <h3># Realisation:</h3>
    Project architecture under
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
    <br>SCSS custom functions (rem, percent)
    <br>SCSS variables
    <br>SCSS classes structure
    <br>SCSS Directives
    <br>
    <br>BEM
    <br>flexbox
    <br>v-memo directive for good project performance
    <br>Resive the initial data from the external resource.
    <br>
    <br>End-to-end Tests (Cypress.io) (npm run test:e2e:dev)
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