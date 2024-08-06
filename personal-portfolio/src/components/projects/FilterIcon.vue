<template>
    <div class="filter-icon">
        <div class="filter-content" @mouseover="isHover = true" @mouseleave="isHover = false">
            <p class="filter-text" :class="{'primary-color': !isHover}">{{ filterTitle }}</p>
            <p class="filter-count" :class="{'secondary-color': !isHover}">{{ filterCount }}</p>
        </div>
        <p class="filter-divider">&ensp;&ensp;&ensp;/&ensp;</p>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { injectService } from '../../services';
import { ServiceNames } from '../../services/service-names';

defineProps({
  filterTitle: String,
  filterCount: Number,
  index: Number
});

 const isHover = ref<boolean>(false);

const projectService = injectService(ServiceNames.ProjectService);

const lastIndex = computed(() => projectService.projects.length - 1);
</script> 

<style scoped>
.filter-icon {
    position: relative;
    width: max-content;
    padding-right: 0.5rem;
    display: inline-block;
}

.filter-content {
    display: inline;
    cursor: pointer;
}

.filter-content:hover {
    transition: 0.2s ease-in-out;
    color: orange;
    cursor: pointer;
}

.filter-count {
    position: absolute;
    bottom: 0.3rem;
    right: 2.25rem;
    font-size: 0.9rem;
    
}

p {
    display: inline;
    cursor: pointer;
}
/* 
p:hover {
    color:inherit;
} */
</style>