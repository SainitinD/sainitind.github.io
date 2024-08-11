<template>
  <h1 class="secondary-color section-subtitle">
    {{ title }}<span style="color: #6e06f2">.</span>
  </h1>
</template>

<script setup lang="ts">
defineProps({
  title: String,
});
</script>

<style scoped>
h1 {
  font-size: 4rem;
  font-weight: 700;
}
</style>
