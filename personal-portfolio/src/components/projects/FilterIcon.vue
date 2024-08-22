<template>
  <div class="filter-icon">
    <div
      class="filter-content"
      @mouseover="isHover = true"
      @mouseleave="isHover = false"
      @click="onClick"
    >
      <p class="filter-text" :style="{ color: filterColor() }">
        {{ filterTitle }}
      </p>
      <p class="filter-count" :style="{ color: filterColor() }">
        {{ filterCount }}
      </p>
    </div>
    <p class="filter-divider">&ensp;&ensp;&ensp;/&ensp;</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// import { computed, ref } from 'vue';
import { injectService } from "../../services";
import { ServiceNames } from "../../services/utils/service-names";

const props = defineProps({
  filterTitle: String,
  filterCount: Number,
  id: Number,
});

const isHover = ref<boolean>(false);
const projectService = injectService(ServiceNames.ProjectService);

const onClick = () => {
  if (projectService.selectedCategory.id == props.id) return;
  projectService.selectedCategory =
    projectService.categories.find((pc) => pc.id == props.id) ??
    projectService.selectedCategory;
};

const filterColor = () => {
  if (projectService.selectedCategory.id == props.id || isHover.value == true) {
    return "#6e06f2";
  }
  return "#4e525a";
};

// TODO: make the last filter '/' disappear
// const lastIndex = computed(() => projectService.projects.length - 1);
</script>

<style scoped>
.selected-category {
  transition: 0.2s ease-in-out;
  color: orange;
  cursor: pointer;
}

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

.filter-count {
  position: absolute;
  bottom: 0.3rem;
  right: 2.25rem;
  font-size: 0.9rem;
}

p {
  display: inline;
}
</style>
