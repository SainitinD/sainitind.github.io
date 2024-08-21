<template>
  <div class="section" id="work">
    <section-title title="Work"/>
    <div class="work-body">
      <div class="job-history">
        <p
          class="company-name"
          :class="{ selected: workService.selectedWorkExperienceId == workExperience.id }"
          v-for="workExperience in workService.workExperiences"
          :key="workExperience.id"
          @click="workService.selectedWorkExperienceId = workExperience.id"
        >
          {{ workExperience.company }}
        </p>
      </div>
      <div class="job-details">
        <div class="title">
          <p class="job-title">
            {{ workExperience.role }}
            <span class="company">@ {{ workExperience.company }}</span>
          </p>
          <p class="year"> {{ workService.getSelectedJobTimeline()}} </p>
        </div>
        <div class="description">
          <p class="description-detail">
            {{ workExperience.jobDescription }}
          </p>
        </div>
        <p class="skills">
          <p class="skill" v-for="skill, index in workExperience.skills" :key="index">{{ skill }}</p>
        </p>
      </div>
    </div>
    <div class="work-action-btns">
      <button v-if="workService.selectedWorkExperienceId < Math.max(...workService.workExperiences.map(wE => wE.id))"
        class="prev-job secondary-btn"
        @click="workService.previousJobDetails()">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>
      <button v-if="workService.selectedWorkExperienceId > 0"
        class="next-job primary-btn"
        @click="workService.nextJobDetails()">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import SectionTitle from "../components/general/SectionTitle.vue";
import { injectService } from "../services";
import { ServiceNames } from "../services/utils/service-names";

const workService = injectService(ServiceNames.WorkService);
const workExperience = computed(() => workService.getSelectedWorkExperience());
</script>

<style>
#work {
  display: flex;
  flex-direction: column;
}

.work-body {
  margin-top: 1rem;
  display: flex;
}

.job-history {
  display: flex;
  flex-direction: column;
  flex: 0.5 0 0;
}

.job-details {
  flex: 1.5 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.company-name {
  font-size: 1.375rem;
  border-left: 0.2rem solid;
  padding: 1rem 3rem 1rem;
  cursor: pointer;
}

.job-title {
  font-size: 1.375rem;
}

.year {
  font-size: 0.85rem;
}

.company {
  color: var(--primary-color);
}

.selected {
  color: var(--primary-color);
  transition: var(--animation-timing);
}

.description {
  font-size: 1.125rem;
}

.skills {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
}

.skill {
  border-radius: 20px;
  padding: 5px 15px;
  font-size: 14px;
  margin-bottom: 6px;
  background-color: var(--primary-color);
  color: white;
  white-space: nowrap;
}

.work-action-btns {
  display: none;
}

.work-action-btns > button {
  display: flex;
  border-radius: 100%;
  padding: 5px;
}

@media screen and (max-width: 768px) {
  .job-history {display: none;}
  .work-body {height: 400px;}
  .job-title, .company {font-size: 1.1rem;}
  .year {font-size: 0.8rem;}
  .description {font-size: 1rem;}
  .skill {font-size: 14px; padding: 3px 9px;}
  .work-action-btns {display: flex; justify-content: flex-end;}
}
</style>
