<template>
  <div class="section" id="work">
    <section-title title="Work Experience" subtitle="Explore my" />
    <div class="work-body">
      <div class="job-history">
        <p
          class="company-name"
          :class="{ purple: workService.selectedWorkExperienceId == index }"
          v-for="(company, index) in workService.getCompanies()"
          :key="index"
          @click="workService.selectedWorkExperienceId = index"
        >
          {{ company }}
        </p>
      </div>
      <div class="job-details">
        <div class="title">
          <p class="job-title">
            {{ workExperience.role }}
            <span class="company">@ {{ workExperience.company }}</span>
          </p>
          <p class="year">
            May {{ workExperience.startYear }} -
            {{
              workExperience.isCurrentJob
                ? "PRESENT"
                : "May " + workExperience.endYear
            }}
          </p>
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
  gap: 10px;
}

.skill {
  border-radius: 20px;
  padding: 5px 15px;
  font-size: 14px;
  margin-bottom: 6px;
  background-color: #2c3599;
  color: white;
}
</style>
