<template>
  <div>
    <h1 class="title">
      {{ title }}<span style="color: #6e06f2">.</span>
    </h1>
    <h4 v-if="subtitle != null" class="subtitle">{{ subtitle }}</h4>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  subtitle: String,
});
</script>

<style scoped>
.title {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.2;
}

.subtitle {
  margin-left: 0.2rem;
}

@media screen and (max-width: 768px) {
  h1 {font-size: 2rem;}
}
</style>
