<template>
    <div id="about" class="section">
        <div class="title">
            <div class="firstname">
                <p class="name  normal-bold-text primary-color" @mouseover="isPronounciationActive = true" @mouseleave="isPronounciationActive = false">Sainitin</p>
                <p class='pronounciation' :class="{show: isPronounciationActive, hide: !isPronounciationActive}">Pronounced Sigh-knee-tin 😄</p>
            </div>
            <div class="lastname">
                <p class="name italic-text primary-color">Daverpally</p>
            </div>
        </div>
        <div class="about-body">
            <div class="about-content">
                <p class="primary-color">I'm a computer science graduate from <strong>Georgia institute of Technology</strong> looking for software engineering. I have done three internships before and have experience in <strong>software development, data engineering, app development</strong>. <br><br>Check out my work or contact me!</p>
            </div>
            <div class="contact-me">
                <p class="contact-me-text primary-color">Let's Chat -></p>
                <a class="contact-me-email secondary-color" href="mailto:s.daverpally@gmail.com">s.daverpally@gmail.com</a>
            </div>
        </div>
        <div class="about-footer">
            <div class="time">
                <p class="primary-color italic-text">EST</p>
                <p class="primary-color normal-bold-text"> TIME: {{ time }}</p>
            </div>
            <div class="location">
                <p class="primary-color normal-bold-text">Atlanta, Georgia</p>
            </div>
        </div>
        <div class="scroll-anim">
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
</script>

<style scoped>
.name {
    box-sizing: border-box;
    font-size: 12rem;
    line-height: normal;
    border: 0;
}

#about {
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
    bottom: 1rem;
    left: 0.5rem;
    cursor: default;
}

.lastname > .name {
    position: relative;
    top: 3rem;
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
    /* margin: 8rem 0rem 0rem; top, right/left, bottom */
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
}

.scroll-anim {
    position: absolute;
    bottom: 0px;
    left: 48vw;
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