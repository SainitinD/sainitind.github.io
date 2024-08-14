<template>
  <div class="margin-overlay">
    <div class="card">
      <img class="thumbnail" :src="imgSrc" />
      <div class="info">
        <p class="title">{{ title }}</p>
        <p class="category">{{ category }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  imgSrc: String,
  title: String,
  category: String,
});
</script>

<style scoped>
.card {
  background-color: #6e05f2;
  border-radius: 5%;
  padding: 0;
  overflow: hidden;
  height: max-content;
  width: min-content;
  /* margin-bottom: 10vh; */
  border: 3px solid;
  border-color: black;
  cursor: pointer;
  /* animation-name: zoomOut;
  animation-duration: 0.75s;
  animation-timing-function: ease-in-out; */
}

.thumbnail {
  width: 32vw;
}

.info {
  text-align: start;
  color: white;
  padding-left: 1rem;
  margin: 1rem 0rem 2rem;
}

.title {
  font-size: 1.5rem;
}
.category {
  font-size: 0.8rem;
}

@keyframes zoomOut {
  0% {
    opacity: 0%;
    transform: scale(0.1);
  }

  100% {
    opacity: 100%;
    transform: scale(1);
  }
}
</style>
