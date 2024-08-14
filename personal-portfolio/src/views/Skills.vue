<template>
  <div class="section" id="skills">
    <section-title title="Skills & Technologies"/>
    <div class="section-body">
      <div class="skills-section" v-for="personalSkill, idx in aboutService.personalSkills" :key="idx">
        <p class="skill-heading">{{personalSkill.skillName}}</p>
        <PersonalSkill :skill="skill" v-for="skill in personalSkill.skills" :key="skill"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SectionTitle from "../components/general/SectionTitle.vue";
import { injectService } from "../services";
import { ServiceNames } from "../services/utils/service-names";
import PersonalSkill from "../components/skills/PersonalSkill.vue";

const aboutService = injectService(ServiceNames.AboutService);
</script>

<style scoped>
#skills {
  max-width: 1300px;
}
.section-body {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 3rem;
}

.skills-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-heading {
  font-size: 1rem;
  font-weight: bold;
}
</style>
