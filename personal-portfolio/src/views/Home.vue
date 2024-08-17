<template>
  <div id="home" class="section">
    <div class="section-body">
      <div class="home-details">
        <div class="name show">Hey, I'm {{ aboutService.firstname }} 👋🏻</div>
        <div class="current-job-title">
          <span class="purple">{{ aboutService.jobTitleEmphasis }}</span>
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
      <div class="profile-pic">
        <img
          src="https://framerusercontent.com/images/0x51HAEDvfyvtBcuM28afgPiKcU.webp?scale-down-to=512"
        />
      </div>
    </div>
    <!-- <div class="scroll-anim" @click="scrollDownToProjects()">
      <Scrolldown />
    </div> -->
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import Scrolldown from "../components/utilities/Scrolldown.vue";
import { injectService } from "../services";
import { ServiceNames } from "../services/utils/service-names";

// const isPronounciationActive = ref<boolean>(false);

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
  /* margin-top: 10rem; */
  height: 64vh;
}
.section-body {
  /* padding: 3.125rem 0rem; */
  display: flex;
  justify-content: space-around;
}

.home-details {
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  gap: 1rem;
  width: 40vw;
  /* padding: 5rem 0rem; */
}

.name {
  font-size: 1.7rem;
  letter-spacing: -2px;
  line-height: 1.2em;
  color: #4e525a;
}

.current-job-title {
  font-size: 6.25rem;
  letter-spacing: -0.05em;
  font-weight: 700;
  line-height: 1em;
  margin-bottom: 1.25rem;
}

.purple {
  color: #6e06f2;
}

.home-body {
  font-size: 1.5rem;
  color: #4e525a;
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
}

.show {
  visibility: visible;
  animation-name: showPronounciation;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
}

.hide {
  animation-name: hidePronounciation;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
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

@keyframes showPronounciation {
  0% {
    opacity: 0%;
    transform: translateY(-1.5rem);
  }

  100% {
    opacity: 100%;
    transform: translateY(0rem);
  }
}

@keyframes hidePronounciation {
  0% {
    opacity: 100%;
    transform: translateY(0rem);
  }

  100% {
    opacity: 0%;
    transform: translateY(-1.5rem);
    visibility: hidden;
  }
}
</style>
