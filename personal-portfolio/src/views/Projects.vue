<template>
  <div id="projects" class="section">
    <section-title title="Projects" />
    <div class="projects-body">
      <div class="filter">
        <p class="secondary-color filter-by">Filter By:&emsp;</p>
        <filter-icon
          v-for="category in projectService.getUniqueCategories()"
          :key="category.id"
          :filter-title="category.title"
          :filter-count="projectService.getCategoryCount(category.id)"
          :id="category.id"
        />
      </div>
      <div class="cards">
        <transition-group>
          <thumbnail-card
            v-for="(project) in projectService.filteredProjects()"
            :key="projectService.selectedCategory.id"
            :img-src="imgSrcUrl(project.imgSrc)"
            :title="project.title"
            :category="project.category.title"
            :description="project.description"
            :tech-stack="project.techStack"
          />
        </transition-group>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { injectService } from "../services";
import { ServiceNames } from "../services/utils/service-names";
import FilterIcon from "../components/projects/FilterIcon.vue";
import ThumbnailCard from "../components/projects/ThumbnailCard.vue";
import SectionTitle from "../components/general/SectionTitle.vue";
import { imgSrcUrl } from "../services/utils/helper";

const projectService = injectService(ServiceNames.ProjectService);

onMounted(() => init());

function init(): void {
  if (projectService.projects.length == 0) {
    projectService.getProjects();
  }
}
</script>

<style scoped>
#projects {
  height: max-content;
}

.filter {
  margin: 1.5rem 0rem;
  cursor: default;
}

.filter > .filter-by {
  display: inline-block;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 3rem;
}

.v-enter-from {
  opacity: 25%;
  transform: scale(0.7);
}

.v-enter-active {
  transition: var(--animation-timing);
}

.v-enter-to {
  opacity: 100%;
  transform: scale(1);
}
</style>
