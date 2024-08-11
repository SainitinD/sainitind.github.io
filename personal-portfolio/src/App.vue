<template>
  <NavBar />
  <Home />
  <Projects />
  <Work />
</template>

<script setup lang="ts">
import NavBar from './components/views/NavBar.vue';
import Home from './components/views/Home.vue';
import Projects from './components/views/Projects.vue';
import Work from './components/views/Work.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", "Poppins Placeholder", sans-serif;
}

html {
  scroll-behavior: smooth;
}

#app {
  width: 100vw;
  height: 100vh;
  padding: 0 2.5rem;
  /* margin: 0px;
  padding: 0rem;
  box-sizing: border-box */
}

.section {
  /* padding-top: 4vh; */
  height: 100vh;
  width:100%;
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
