<template>
  <div class="margin-overlay">
    <div class="card" @mouseenter="isHovered = isHoveredState.HOVERING" @mouseleave="isHovered = isHoveredState.NOTHOVERING">
      <img class="thumbnail" :src="imgSrc" />
      <Transition>
        <div class="thumbnail-body" :class="{extend: isHovered == isHoveredState.HOVERING, shrink: isHovered == isHoveredState.NOTHOVERING}">
          <div class="info">
            <p class="title">{{ title }}</p>
            <p class="category">{{ category }}</p>
          </div>
          <p class="description">{{ description }}</p>
          <div class="tech-stack">
            <p class="tech-stack-item" v-for="techStackItem, index in techStack" :key="index">{{ techStackItem }}</p>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  imgSrc: String,
  title: String,
  category: String,
  description: String,
  techStack: Array<String>,
});

const isHoveredState = {
  NOTLOADED: 0,
  HOVERING: 1,
  NOTHOVERING: 2
}

const isHovered = ref<number>(isHoveredState.NOTLOADED);
</script>

<style scoped>
.card {
  background-color: #6e05f2;
  border-radius: 5%;
  padding: 0;
  overflow: hidden;
  height: 28.75rem;
  width: 38.4rem;
  border: 3px solid;
  border-color: black;
  cursor: pointer;
}

.thumbnail {
  height: 21.6rem;
  width: inherit;
  object-fit: cover;
  display: block;
}

.thumbnail-body {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #6e05f2;
  border-top: 3px solid black;
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

.info {
  text-align: start;
  margin: 1rem 0rem 0rem;
}

.title {
  font-size: 1.5rem;
}
.category {
  font-size: 0.8rem;
  opacity: 80%;
}

.info, .description, .tech-stack {
  padding-left: 1rem;
}

.description {
  padding-right: 1rem;
}

.info, .description {
  color: white;
}

.tech-stack {
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

@media screen and (min-width: 320px) and (max-width: 768px) {
  .card{ width: 19.5rem; height: 16.5rem;}
  .thumbnail { height: 10.94rem;}
  .extend {bottom: 11rem;}
  @keyframes extendAnim{
    from {bottom: 0rem;} 
    to{bottom:11rem;} 
  }
  @keyframes shrinkAnim{
    from {bottom: 11rem;} 
    to{bottom:0rem;}
  }
  .title {font-size: 1.1rem;}
  .category {font-size: 0.75rem;}
  .description {font-size: 0.85rem;}
  .tech-stack {overflow-x: scroll;scrollbar-width: none;}
  .tech-stack-item {padding: 3px 9px; font-size: 10px; white-space: nowrap;}
}
</style>
