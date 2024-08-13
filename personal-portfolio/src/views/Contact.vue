<template>
  <div id="contact" class="section">
    <section-title
      title="Let's Connect"
      subtitle="Made with <3 by Sainitin Daverpally"
    />
    <div class="contact-links">
      <div class="social-media-links">
        <img
          src="../assets/images/github.png"
          alt="Sainitin Daverpally's Github"
          @click="goToGithub()"
        />
        <img
          src="../assets/images/linkedin.png"
          alt="Sainitin Daverpally's Linkedin"
          @click="goToLinkedin()"
        />
      </div>
      <p class="copyright">©{{ currentYear }} All Rights Reserved</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from "../components/general/SectionTitle.vue";

const goToGithub = () => window.open("https://github.com/SainitinD");
const goToLinkedin = () => window.open("https://linkedin.com/in/SainitinD");

const currentYear = new Date().getFullYear();
</script>

<style scoped>
#contact {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  /* padding-bottom: 1rem; */
}

.contact-links {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
  /* justify-content: center; */
}

.social-media-links {
  display: flex;
  gap: 1rem;
  justify-content: end;
  position: relative;
  top: 1rem;
}

img {
  cursor: pointer;
  height: 3rem;
  width: 3rem;
}
</style>
