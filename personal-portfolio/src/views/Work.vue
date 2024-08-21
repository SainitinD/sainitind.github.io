<template>
  <div class="section" id="work">
    <section-title title="Work Experience"/>
    <div class="work-body">
      <div class="job-history">
        <p
          class="company-name"
          :class="{ purple: workService.selectedWorkExperienceId == workExperience.id }"
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
      <button v-if="workService.selectedWorkExperienceId < Math.max(...workService.workExperiences.map(wE => wE.id))" class="prev-job secondary-btn" @click="workService.previousJobDetails()"> <- </button>
      <button v-if="workService.selectedWorkExperienceId > 0" class="next-job primary-btn" @click="workService.nextJobDetails()"> -> </button>
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
  color: #6e06f2;
}

.purple {
  color: #6e06f2;
  transition: 0.3s ease-in-out;
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
  background-color: #6E06F2;
  color: white;
  white-space: nowrap;
}

.work-action-btns {
  display: none;
}

.work-action-btns > button {
  border-radius: 100%;
  padding: 5px 8px;
}

@media screen and (min-width: 320px) and (max-width: 768px) {
  .job-history {display: none;}
  .work-body {height: 400px;}
  .job-title, .company {font-size: 1.1rem;}
  .year {font-size: 0.8rem;}
  .description {font-size: 1rem;}
  .skill {font-size: 14px; padding: 3px 9px;}
  .work-action-btns {display: flex; justify-content: flex-end;}
}
</style>
