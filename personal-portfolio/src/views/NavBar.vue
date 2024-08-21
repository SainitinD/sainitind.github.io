<template>
  <div class="center-content" id="nav-styling">
    <div id="desktop-nav">
      <div class="main-nav-header">
        <div class="logo" @click="goToHome()">SainitinD<span class="purple">.</span></div>
        <div class="nav-links">
          <RouterLink :to="{ path: '/'}" >Home</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#projects'}">Projects</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#work'}">Work</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#skills'}">Skills</RouterLink>
          <RouterLink :to="{ path: '/resume'}">Resume</RouterLink>
        </div>
        <div class="chat">
          <RouterLink :to="{ path: '/', hash: '#contact'}">Contact</RouterLink>
        </div>
      </div>
    </div>
    <div id="hamburger-nav">
      <div class="main-nav-header">
        <div class="logo" @click="goToHome()">SainitinD<span class="purple">.</span></div>
        <label class="hamburger-icon">
            <input type="checkbox" v-model="isHamburgerMenuChecked">
        </label>
      </div>
      <div class="hamburger-links">
          <RouterLink :to="{ path: '/'}" >Home</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#projects'}">Projects</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#work'}">Work</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#skills'}">Skills</RouterLink>
          <RouterLink :to="{ path: '/resume'}">Resume</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#contact'}">Contact</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const goToHome = () => window.location.href = "./"

const isHamburgerMenuChecked = ref<boolean>(false);
</script>

<style scoped>
*,
*::after,
*::before {
  box-sizing: border-box;
}

#nav-styling {
  --bar-width: 30px;
  --bar-height: 5px;
  --hamburger-gap: 3px;
  --foreground: #333;
  --background: white;
  --hamburger-margin: 5px;
  --animation-timing: 200ms ease-in-out;
  --long-animation-timing: 500ms ease-in-out;
  --hamburger-height: calc(var(--bar-height) * 3 + var(--hamburger-gap) * 2);

  display: flex;
  flex-direction: column;
}

#desktop-nav, #hamburger-nav {
  width: 100%;
  max-width: 1300px;
}

#hamburger-nav {
  display: flex;
  flex-direction: column;
}

.main-nav-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 0rem;
  font-size: 1.125rem;
}

.hamburger-icon {
  --square-root-of-two: 1.41421356237;
  --x-width: calc(var(--hamburger-height) * var(--square-root-of-two));

  display: flex;
  flex-direction: column;
  gap: var(--hamburger-gap);
  width: max-content;
  position: relative;
  top: var(--hamburger-margin);
  left: var(--hamburger-margin);
  z-index: 2;
  cursor: pointer;
}

.hamburger-icon::before,
.hamburger-icon::after,
.hamburger-icon > input {
  content: "";
  width: var(--bar-width);
  height: var(--bar-height);
  background-color: var(--foreground);
  border-radius: 9999px;
  transform-origin: left center;
  transition: opacity var(--animation-timing),
    width var(--animation-timing),
    rotate var(--animation-timing),
    translate var(--animation-timing),
    background-color var(--animation-timing)
}

.hamburger-icon > input {
  appearance: none;
  padding: 0;
  margin: 0;
  outline: none;
  pointer-events: none;
}

.hamburger-icon:has(input:checked)::before {
  rotate: 45deg;
  width: var(--x-width);
  translate: 0 calc(var(--bar-height) / -2)
}

.hamburger-icon:has(input:checked)::after {
  rotate: -45deg;
  width: var(--x-width);
  translate: 0 calc(var(--bar-height) / 2);
}

.hamburger-icon > input:checked {
  width: 0;
  opacity: 0;
}

.hamburger-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--background);
  font-size: 1.375rem;
  max-height: 0;
  padding: 0rem;
  transition: max-height var(--long-animation-timing), padding var(--long-animation-timing);
  overflow: hidden;
}

.main-nav-header:has(input:checked) + .hamburger-links {
  padding-top: 1rem;
  padding-bottom: 2.5rem;
  max-height: 500px;
  transition: max-height var(--long-animation-timing), padding var(--long-animation-timing);
}

.logo {
  font-weight: bold;
  cursor: pointer;
}

.logo > span {
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  flex-direction: row;
  gap: 1rem;

}

a {
  transition: all 300ms ease;
  font-weight: 500;
  color: #4e525a;
  text-decoration: inherit;
}

a:hover {
  color: #6e06f2;
}

.chat {
  font-weight: 400;
}

router-link-active {
  color: #6e06f2;
}

@media screen and (min-width: 769px){
  #hamburger-nav{display: none;}
}

@media screen and (min-width: 320px) and (max-width: 768px) {
  #desktop-nav {display: none;}
  #hamburger-nav{display: flex;}
}
</style>
