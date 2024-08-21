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
:root {
 --primary-color: #6e06f2;
 --secondary-color: #4e525a;
 --app-horizontal-padding: 0 2.5rem;
 --animation-timing: 300ms ease-in-out;
 --long-animation-timing: 500ms ease-in-out;
 --font-family: "Poppins", "Poppins Placeholder", sans-serif;

 --primary-btn-background: var(--primary-color);
 --primary-btn-hover-color: #8c3df6;
 --primary-btn-text-color: white;
 --secondary-btn-background: white;
 --secondary-btn-text-color: black;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--font-family);
}

html {
  scroll-behavior: smooth;
}

#app {
  height: 100vh;
  padding: var(--app-horizontal-padding);
}

.center-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section {
  height: max-content;
  width: 100%;
  max-width: 1300px;
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
  background-color: var(--primary-btn-background);
  transition: background-color var(--animation-timing);
  color: var(--primary-btn-text-color);;
}

.primary-btn:hover {
  background-color: var(--primary-btn-hover-color);
  transition: var(--animation-timing);
}

.secondary-btn {
  border-color: var(--secondary-btn-text-color);
  background-color: var(--secondary-btn-background);
  transition: background-color var(--animation-timing);
  color: var(--secondary-btn-text-color);;
}

.secondary-btn:hover {
  --secondary-btn-background: black;
  --secondary-btn-text-color: white;

  background-color: var(--secondary-btn-background);
  color: var(--secondary-btn-text-color);
  transition: var(--animation-timing);
} 

.primary-color {
  color: var(--primary-color);
}

@media screen and (min-width: 320px) and (max-width: 768px) {
  #app {padding: 0 1.5rem;}
}
</style>
