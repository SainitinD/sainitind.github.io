<template>
    <div id="home" class="section">
        <div class="section-body">
            <div class="home-details">
                <div class="name">Hey, I'm Sainitin 👋🏻</div>
                <div class="current-job-title"><span class="purple">ML & AI</span> Engineer</div>
                <div class="home-body">I'm a machine learning engineer based in Atlanta. I love working with data to figure out new directions for business</div>
                <div class="home-action-items">
                    <button class="contact">Get in Touch</button>
                    <button class="projects">Browse Projects</button>
                </div>
            </div>
            <div class="profile-pic">
                <img src="https://sainitind.github.io/assets/profile-pic.png" alt="">
            </div>
        </div>
        <div class="scroll-anim" @click="scrollDownToProjects()">
            <Scrolldown />
        </div>
    </div>
</template>

<script setup lang="ts">
import moment from 'moment-timezone';
import { ref } from 'vue';
import Scrolldown from '../utilities/Scrolldown.vue';

const isPronounciationActive = ref<boolean>(false);

const today = Date.now();
const estTimeZone = "America/New_York";
const timeFormat= "hh:mm A";
const time = moment(today).tz(estTimeZone).format(timeFormat);

const scrollDownToProjects = () => {
    window.location.href = '#projects';
}
</script>

<style scoped>
.section-body {
    padding: 3.125rem 0rem;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
}

.home-details {
    display: flex;
    flex-direction: column;
    flex: 1 0 0;
    /* gap: 1rem; */
    width: 40vw;
}

.name {
    font-size: 1.5rem;
    letter-spacing: -2px;
}

.current-job-title {
    font-size: 5.5rem;
    letter-spacing: -0.05em;
    font-weight: 600;
}

.purple {
    color: #6e06f2;
}

.home-body {
    font-size: 1.5rem;
}

.profile-pic {
    flex: 1 0 0;
}

.profile-pic > img {
    width: 35rem;
}


/* OLD VALS */
/* 
#home {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.title {
    display: flex;
    justify-content: space-between;
}

.firstname {
    position: relative;
}

.firstname > .name {
    text-transform: uppercase;
    cursor: pointer;
    margin: 0;
    padding: 0;
}

.firstname > .pronounciation {
    position: absolute;
    bottom: 4rem;
    left: 0.5rem;
    cursor: default;
}

.lastname > .name {
    position: relative;
    top: 2rem;
    font-size: 15rem;
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

.about-body {
    display: flex;
    justify-content: space-between;
}

.about-content {
    width: 50%;
    font-size: 1.5rem;
    line-height: 1.1;
}

.time > p{
    display: inline;
}

.contact-me {
    margin-top: 2rem;
    text-align: end;
    font-weight:500;
    text-transform: uppercase;
}

.contact-me-email:hover {
    text-decoration: underline;
    color: #dc7d00;
    transition: 0.3s ease-in-out;
    cursor: pointer;
}

.about-footer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
} */

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