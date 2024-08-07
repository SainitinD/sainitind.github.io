<template>
    <div class="margin-overlay">
        <div class="card">
            <img class="thumbnail" :src="imgSrc" />
            <div class="info">
                <p class="title">{{ title }}</p>
                <p class="category">{{ category }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
  imgSrc: String,
  title: String,
  category: String,
});
</script>

<style scoped>
.card {
    background-color: #8E6FFB;
    border-radius: 5%;
    padding: 0;
    overflow: hidden;
    height: max-content;
    width: min-content;
    margin-bottom: 10vh;
    /* flex: 35%; */
    /* margin-right: 2rem; */
}

.thumbnail {
    width: 39vw;
}

.info {
    text-align: start;
    color: white;
    padding-left: 1rem;
    margin: 1rem 0rem 2rem;
}

.title {
    font-size: 1.5rem;
    
}
.category {
    font-size: 0.8rem;
}
</style>