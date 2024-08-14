<template>
    <NavBar />
    <div id="mainpage">
        <Home />
        <Projects />
        <Work />
        <Skills />
        <Contact />
    </div>

</template>


<script setup lang="ts">
import NavBar from "./NavBar.vue";
import Home from "./Home.vue";
import Projects from "./Projects.vue";
import Work from "./Work.vue";
import Skills from "./Skills.vue";
import Contact from "./Contact.vue";
</script>

<style>
#mainpage {
    display: flex;
    flex-direction: column;
    gap: 8rem;
    align-items: center;
}
</style>