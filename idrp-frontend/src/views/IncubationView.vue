<script setup lang="ts">
import ProgramCTASection from '@/components/program/ProgramCTASection.vue'
import ProgramHeroSection from '@/components/program/ProgramHeroSection.vue'
import ProgramIntroSection from '@/components/program/ProgramIntroSection.vue'
import ProgramTracksSection from '@/components/program/ProgramTracksSection.vue'
import ProgramValueSection from '@/components/program/ProgramValueSection.vue'
import PerformanceMetricsSection from '@/components/common/PerformanceMetricsSection.vue'

import { incubationPage, incubationMetrics } from '@/data/incubation'
</script>

<template>
  <div class="incubation-view">
    <ProgramHeroSection v-bind="incubationPage.hero" />
    <ProgramIntroSection v-bind="incubationPage.intro" />

    <PerformanceMetricsSection
      eyebrow="Impact"
      title="Incubation Performance Metrics"
      description="Sessions, workshops, and hackathons delivered through the Udyami Incubation Program."
      :stats="incubationMetrics"
    />

    <ProgramValueSection v-bind="incubationPage.value" />
    <ProgramTracksSection
      v-if="incubationPage.tracks"
      v-bind="incubationPage.tracks"
      :programs="incubationPage.programs"
    />
    <ProgramCTASection v-bind="incubationPage.cta" />
  </div>
</template>
