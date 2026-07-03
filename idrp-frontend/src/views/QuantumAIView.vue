<script setup lang="ts">
import ProgramHeroSection from '@/components/program/ProgramHeroSection.vue'
import ProgramIntroSection from '@/components/program/ProgramIntroSection.vue'
import ProgramValueSection from '@/components/program/ProgramValueSection.vue'
import ProgramCTASection from '@/components/program/ProgramCTASection.vue'

import FocusAreasSection from '@/components/common/FocusSection.vue'
import BeneficiariesSection from '@/components/common/BeneficiariesSection.vue'

import { quantumAIPage } from '@/data/quantumAI'
import { focusAreas, beneficiaryGroups } from '@/data/quantumAIExtra'
</script>

<template>
  <div class="quantum-ai-view">
    <ProgramHeroSection v-bind="quantumAIPage.hero" />
    <ProgramIntroSection v-bind="quantumAIPage.intro" />
    <ProgramValueSection v-bind="quantumAIPage.value" />

    <FocusAreasSection :areas="focusAreas" />
    <BeneficiariesSection :groups="beneficiaryGroups" />

    <ProgramCTASection v-bind="quantumAIPage.cta" />
  </div>
</template>
