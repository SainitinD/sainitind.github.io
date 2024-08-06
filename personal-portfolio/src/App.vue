<template>
  <NavBar />
  <About />
  <Projects />
</template>

<script setup lang="ts">
import NavBar from './components/views/NavBar.vue';
import About from './components/views/About.vue';
import Projects from './components/views/Projects.vue';
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300..700;1,300..700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  width: 100vw;
  height: 100vh;
  /* margin: 0px;
  padding: 0rem;
  box-sizing: border-box */
}

.section {
  /* padding-top: 4vh; */
  height: 100vh;
  width:100%;
  padding: 0vh 24px 2vh; /* top, right/left, bottom */
}

.light-section {
  background-color: #32343e;
}

.normal-bold-text {
    font-family: "PP Neue Montreal Medium", "PP Neue Montreal Medium Placeholder", sans-serif;
    font-weight: bold;
    text-transform: uppercase;
}

.italic-text {
    font-family: "Cormorant", "Cormorant Placeholder", serif;
    font-style: italic;
    font-size: 1.2rem;
}

.primary-color {
  color: #174727;
}

.secondary-color {
  color: #6400b5;
}

p {
  margin: 0;
}
</style>
