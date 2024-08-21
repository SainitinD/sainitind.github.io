<template>
    <div class="center-content" id="mainpage">
        <Transition>
            <button class="scroll-up  primary-btn" v-if="appear" @click="scrollToTop()">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up">
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
            </button>
         </Transition>
        <Home />
        <Projects />
        <Work />
        <Skills />
    </div>
</template>


<script setup lang="ts">
import Home from "./Home.vue";
import Projects from "./Projects.vue";
import Work from "./Work.vue";
import Skills from "./Skills.vue";
import { ref } from "vue";

const appear = ref<boolean>(false);

window.addEventListener('scroll', () => {
    const viewPortHeight = window.innerHeight;
    if (window.scrollY >= 0.2 * viewPortHeight) {
        if (!appear.value) appear.value = true;
    } else {
        if (appear.value) appear.value = false;
    }
});

const scrollToTop = () => {
    window.scrollTo(0,0);
}
</script>

<style>
#mainpage {
    gap: 8rem;
    margin-bottom: 8rem;
}

.scroll-up {
    padding: 0.8rem 0.9501rem;
    position: fixed;
    bottom: 1.75rem;
    right: 2.5rem;
}

.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
}

.v-enter-from {
    opacity: 0;
    transform: translateY(-1rem);
}

.v-enter-to {
    opacity: 1;
    transform: translateY(0rem);
}

.v-leave-from {
    opacity: 1;
    transform: translateY(0rem);
}

.v-leave-to {
  opacity: 0;
  transform: translateY(-1rem);
}
</style>