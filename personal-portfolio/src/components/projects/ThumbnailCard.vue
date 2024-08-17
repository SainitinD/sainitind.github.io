<template>
  <div class="margin-overlay">
    <div class="card" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
      <img class="thumbnail" :src="imgSrc" />
      <Transition>
        <div class="thumbnail-body" :class="{extend: isHovered, shrink: !isHovered}">
          <div class="info">
            <p class="title">{{ title }}</p>
            <p class="category">{{ category }}</p>
          </div>
          <p class="description">A Web application that allows people to visualize different path finding algorithms. Currently, the algorithms supported are: Dijkstra's, BFS and DFS.</p>
          <div class="tech-stacks">
            <p class="tech-stack-item">Typescript</p>
          </div>
        </div>
      </Transition>
    </div>
    <!-- <div v-if="flipCard" class="card flipped" @mouseleave="flipCard = false">
      <div class="info">
        <p class="title">{{ title }}</p>
        <p class="category">{{ category }}</p>
      </div>
      <p class="description">A Web application that allows people to visualize different path finding algorithms. Currently, the algorithms supported are: Dijkstra's, BFS and DFS.</p>
      <div class="tech-stacks">
        <p class="tech-stack-item">Typescript</p>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  imgSrc: String,
  title: String,
  category: String,
});

const isHovered = ref<boolean>(false);
</script>

<style scoped>
.card {
  background-color: #6e05f2;
  border-radius: 5%;
  padding: 0;
  overflow: hidden;
  height: 28.75rem;
  width: 32vw;
  /* margin-bottom: 10vh; */
  border: 3px solid;
  border-color: black;
  cursor: pointer;
  /* animation-name: zoomOut;
  animation-duration: 0.75s;
  animation-timing-function: ease-in-out; */
}

.thumbnail-body {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #6e05f2;
  border-top: 3px solid black;
  /* background-color: #270155; */
  /* display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: none; */
}

.extend {
  position: relative;
  bottom: 10rem;
  animation: extendAnim 0.3s;
}

@keyframes extendAnim{
    from {bottom: 0rem;} 
    to{bottom:10rem;} 
}

.shrink {
  position: relative;
  bottom: 0rem;
  animation: shrinkAnim 0.3s;
}

@keyframes shrinkAnim{
    from {bottom: 10rem;} 
    to{bottom:0rem;} 
}

.thumbnail {
  height: 21.6rem;
  width: inherit;
  object-fit: cover;
  display: block;
}

.info {
  text-align: start;
  margin: 1rem 0rem 0rem;
}

.title {
  font-size: 1.5rem;
}
.category {
  font-size: 0.8rem;
}

.info, .description, .tech-stacks {
  padding-left: 1rem;
}

.info, .description {
  color: white;
}

.tech-stacks {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.tech-stack-item {
  border-radius: 20px;
  padding: 5px 15px;
  font-size: 14px;
  margin-bottom: 6px;
  background-color: white;
  color: #6E06F2;
  font-weight: 500;
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
