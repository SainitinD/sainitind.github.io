<template>
  <div>
    <h1 class="secondary-color section-subtitle">
      {{ title }}<span style="color: #6e06f2">.</span>
    </h1>
    <h4 v-if="subtitle != null">{{ subtitle }}</h4>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  subtitle: String,
});
</script>

<style scoped>
h1 {
  font-size: 4rem;
  font-weight: 700;
}

h4 {
  margin-left: 0.2rem;
}

@media screen and (min-width: 320px) and (max-width: 768px) {
  h1 {font-size: 3rem;}
}
</style>
