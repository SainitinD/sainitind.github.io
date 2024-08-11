<template>
    <div id="projects" class="section">
        <section-title title="Projects" subtitle="Check out my"/>
        <div class="projects-body">
            <div class="filter">
                <p class="secondary-color filter-by">Filter By:&emsp;</p>
                <filter-icon v-for="category in projectService.getUniqueCategories()"
                             :key="category.id"
                             :filter-title="category.title"
                             :filter-count="projectService.getCategoryCount(category.id)"
                             :id = "category.id"
                             />
            </div>
            <div class="cards">
                <thumbnail-card v-for="project, index in projectService.filteredProjects()"
                                :key="index"
                                :img-src="imgSrcUrl(project.imgSrc)"
                                :title="project.title"
                                :category="project.category.title"/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { injectService } from '../../services';
import { ServiceNames } from '../../services/utils/service-names';
import FilterIcon from '../projects/FilterIcon.vue';
import ThumbnailCard from '../projects/ThumbnailCard.vue';
import SectionTitle from "../general/SectionTitle.vue";
import { imgSrcUrl } from '../../services/utils/helper';

const projectService = injectService(ServiceNames.ProjectService);

onMounted(() => init());

function init() : void{
    if (projectService.projects.length == 0) {
        projectService.getProjects();
    }
}
</script>

<style scoped>
#projects {
    background-color: #F7F9FA;
    height: max-content;
    padding: 0rem 9rem;
    padding-top: 4vh;
}

.filter {
    margin: 4rem 0rem;
    cursor: default;
}

.filter > .filter-by {
    display: inline-block;
}

.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
/* 
.cards>* {
    flex: 1 1 800px;
} */

.projects-body {
    padding-left: 0.75rem;
}
</style>