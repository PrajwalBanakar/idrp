<template>
  <ProgramHeroSection v-bind="preIncubationPage.hero" />
  <ProgramIntroSection v-bind="preIncubationPage.intro" />
  <ProgramValueSection v-bind="preIncubationPage.value" />

  <ProgramTracksSection
    v-if="preIncubationPage.tracks"
    v-bind="preIncubationPage.tracks"
    :programs="preIncubationPage.programs"
  />

  <ProgramCTASection v-bind="preIncubationPage.cta" />
</template>

<script setup lang="ts">
import ProgramTracksSection from '@/components/program/ProgramTracksSection.vue'
import ProgramHeroSection from '@/components/program/ProgramHeroSection.vue'
import ProgramIntroSection from '@/components/program/ProgramIntroSection.vue'
import ProgramValueSection from '@/components/program/ProgramValueSection.vue'
import ProgramCTASection from '@/components/program/ProgramCTASection.vue'
import { preIncubationPage } from '@/data/preIncubation'
</script>
