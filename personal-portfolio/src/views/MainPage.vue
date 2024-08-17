<template>
    <div class="center-content" id="mainpage">
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
</script>

<style>
#mainpage {
    gap: 8rem;
    margin-bottom: 8rem;
}
</style>