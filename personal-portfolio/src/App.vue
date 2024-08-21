<template>
  <NavBar />
  <RouterView />
  <Contact />
</template>

<script setup lang="ts">
import NavBar from "./views/NavBar.vue";
import Contact from "./views/Contact.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

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
  /* width: 100vw; */
  height: 100vh;
  padding: 0 2.5rem;
}

.center-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section {
  /* padding-top: 4vh; */
  /* height: 94vh; */
  height: max-content;
  width: 100%;
  max-width: 1300px;
  /* padding-bottom: 2rem; */
}

button {
  width: max-content;
  font-size: 0.875rem;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
}

.primary-btn {
  background-color: #6e06f2;
  color: white;
}

.primary-btn:hover {
  border-color: #8c3df6;
  background-color: #8c3df6;
  transition: 0.3s ease-in-out;
}

.secondary-btn {
  border-color: black;
  background-color: white;
  color: black;
}

.secondary-btn:hover {
  border-color: black;
  background-color: black;
  color: white;
  transition: 0.3s ease-in-out;
}

.primary-color {
  color: #6e06f2;
}
</style>
