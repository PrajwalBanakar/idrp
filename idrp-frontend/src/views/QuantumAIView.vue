<script setup lang="ts">
import ProgramHeroSection from '@/components/program/ProgramHeroSection.vue'
import ProgramIntroSection from '@/components/program/ProgramIntroSection.vue'
import ProgramValueSection from '@/components/program/ProgramValueSection.vue'
import ProgramCTASection from '@/components/program/ProgramCTASection.vue'

import FocusAreasSection from '@/components/common/FocusSection.vue'
import BeneficiariesSection from '@/components/common/BeneficiariesSection.vue'
import PerformanceMetricsSection from '@/components/common/PerformanceMetricsSection.vue'
import ProgramEventsSection from '@/components/program/ProgramEventsSection.vue'

import { quantumAIPage } from '@/data/quantumAI'
import { focusAreas, beneficiaryGroups, qaicMetrics } from '@/data/quantumAIExtra'
</script>

<template>
  <div class="quantum-ai-view">
    <ProgramHeroSection v-bind="quantumAIPage.hero" />
    <ProgramIntroSection v-bind="quantumAIPage.intro" />

    <PerformanceMetricsSection
      eyebrow="Impact"
      title="QAIC Performance Metrics"
      description="Early milestones from the Centre of Excellence in Quantum AI and Computing."
      :stats="qaicMetrics"
    />

    <ProgramValueSection v-bind="quantumAIPage.value" />

    <FocusAreasSection :areas="focusAreas" />
    <BeneficiariesSection :groups="beneficiaryGroups" />

    <ProgramEventsSection
      initiative-key="QAIC"
      title="Events Under QAIC"
      description="Sessions and milestones hosted under the Centre of Excellence in Quantum AI and Computing."
    />

    <ProgramCTASection v-bind="quantumAIPage.cta" />
  </div>
</template>
