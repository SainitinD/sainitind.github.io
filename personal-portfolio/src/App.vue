<template>
  <NavBar />
  <RouterView />
  <Contact />
</template>

<script setup lang="ts">
import NavBar from "./views/NavBar.vue";
import Contact from "./views/Contact.vue";
</script>

<style>
#app {
  height: 100vh;
  padding: var(--app-horizontal-padding);
}

@media screen and (min-width: 320px) and (max-width: 768px) {
  #app {padding: 0 1.5rem;}
}
</style>
