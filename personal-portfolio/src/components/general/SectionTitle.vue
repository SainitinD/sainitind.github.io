<template>
    <div class="title">
        <p class="secondary-color section-subtitle">{{ subtitle }}</p>
        <p class="primary-color section-title normal-bold-text">{{ title }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps({
  subtitle: String,
  title: String,
});
</script>

<style>
.title {
    line-height: 1;
    text-align: center;
}

.section-subtitle {
    font-size: 2rem;
    margin-left: 0.5rem;
}

.section-title {
    font-size: 8rem;
}
</style>