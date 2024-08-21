<template>
  <div id="home" class="section">
    <div class="section-body">
      <div class="home-details">
        <div class="name show">Hey, I'm {{ aboutService.firstname }} 👋🏻</div>
        <div class="current-job-title">
          <span>{{ aboutService.jobTitleEmphasis }}</span>
          {{ aboutService.jobTitleNonEmphasis }}
        </div>
        <div class="home-body">
          {{ aboutService.description }}
        </div>
        <div class="home-action-items">
          <button class="primary-btn" @click="scrollDownToContact()">Get in Touch</button>
          <button class="secondary-btn" @click="scrollDownToProjects()">
            Browse Projects
          </button>
        </div>
      </div>
      <div class="profile-pic show">
        <img
          src="@assets/images/profile-pic.png"
        />
      </div>
    </div>
    <!-- 
    // cool scroll component but doesn't fit in new design
    <div class="scroll-anim" @click="scrollDownToProjects()">
      <Scrolldown />
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { injectService } from "../services";
import { ServiceNames } from "../services/utils/service-names";

const aboutService = injectService(ServiceNames.AboutService);

const scrollDownToProjects = () => {
  window.location.href = "#projects";
};

const scrollDownToContact = () => {
  window.location.href = "#contact";
};
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 64vh;
}
.section-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 2.1rem;
}

.home-details {
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  gap: 1rem;
  width: 40vw;
}

.name {
  font-size: 1.7rem;
  letter-spacing: -2px;
  line-height: 1.2em;
  color: var(--secondary-color);
}

.current-job-title {
  font-size: 6.25rem;
  letter-spacing: -0.05em;
  font-weight: 700;
  line-height: 1em;
  margin-bottom: 1.25rem;
}

.current-job-title > span {
  color: var(--primary-color);
}

.home-body {
  font-size: 1.5rem;
  color: var(--secondary-color);
}

.home-action-items {
  display: flex;
  gap: 1rem;
}

.profile-pic {
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.profile-pic > img {
  height: 25rem;
  width: 25rem;
  border-radius: 100%;
  filter: grayscale(100%) sepia(6%) saturate(172%) hue-rotate(14deg) brightness(93%) contrast(96%);
}

.show {
  visibility: visible;
  animation-name: show;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
}

.scroll-anim {
  position: absolute;
  bottom: 2rem;
  left: 48vw;
  cursor: pointer;
  animation-name: showPronounciation;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
}

@media screen and (min-width: 769px) and (max-width: 1200px) {
  .current-job-title {font-size: 5.25rem;}
  .profile-pic > img {height: 20rem; width: 20rem;}
}

@media screen and (max-width: 591px) {
  .profile-pic {align-items: center;}
}

@media screen and (min-width: 320px) and (max-width: 768px) {
  #home {height: auto; margin-top: 4rem;}
  .home-details {width: 100%;}
  .name {font-size: 1.5rem;}
  .current-job-title {font-size: 4.25rem;}
  .home-body {font-size: 1.25rem;}
  .home-action-items {flex-direction: column;}
  .profile-pic > img {height: 15rem; width: 15rem;}
}

@media screen and (max-height: 768px) {
  #home {height: auto; margin-top: 4rem;}
  .home-details {width: 100%;}
  .name {font-size: 1.5rem;}
  .current-job-title {font-size: 4.25rem;}
  .home-body {font-size: 1.25rem;}
  .home-action-items {flex-direction: column;}
  .profile-pic > img {height: 15rem; width: 15rem;}
}
</style>
