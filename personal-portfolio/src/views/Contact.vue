<template>
  <div class="center-content">
    <div id="contact" class="section">
      <section-title
        title="Let's Connect"
        subtitle="Made with <3 by Sainitin Daverpally"
      />
      <div class="contact-links">
        <div class="social-media-links">
          <img
            src="../assets/images/email.png"
            alt="Sainitin Daverpally's Email"
            @click="goToEmail()"
          />
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
  </div>
</template>

<script setup lang="ts">
import SectionTitle from "../components/general/SectionTitle.vue";

const goToEmail = () => window.open("mailto:s.daverpally@gmail.com");
const goToGithub = () => window.open("https://github.com/SainitinD");
const goToLinkedin = () => window.open("https://linkedin.com/in/SainitinD");

const currentYear = new Date().getFullYear();
</script>

<style scoped>
#contact {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 1rem;
}

.contact-links {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
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

img:hover {
  animation: wiggle;
  animation-duration: 0.3s;
}

@media screen and (max-width: 727px) {
  .contact-links{row-gap: 2rem; align-items: flex-start;}
}
</style>
