<template>
    <div class="my-skill">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-green-400 w-6 h-6 flex-shrink-0 mr-4"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        <p>{{ skill }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps({
  skill: String,
});
</script>

<style scoped>
.my-skill {
  display: flex;
  width: 15rem;
  background-color: #6E06F2;
  color: white;
  align-items: center;
  border-radius: 10px;
  gap: 0.75rem;
  padding: 0.5rem;
  cursor: default;
}

.my-skill:hover {
    transform: scale(1.05);
    transition: 0.3s ease-in-out;
    background: linear-gradient(-45deg, #6E06F2 40%, #9341ff 50%, #6E06F2 60%);
    background-size: 300%;
    background-position-x: 100%;
    animation-delay: 3s;
    animation: shimmer 1s linear
}

.my-skill > svg {
  width: 1.75rem;
}

.my-skill > p {
  flex: 0.9 0 0;
  font-size: 1.1rem;
}

@keyframes shimmer {
   to {
      background-position-x: 0%
   }
}

@media screen and (min-width: 320px) and (max-width: 768px) {
  .my-skill {width: 12rem; padding: 0.3rem;}
  .my-skill > svg {width: 1.3rem;}
  .my-skill > p {font-size: 0.95rem;}
}
</style>