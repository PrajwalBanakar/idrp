<script setup lang="ts">
import ProgramHeroSection from '@/components/program/ProgramHeroSection.vue'
import ProgramIntroSection from '@/components/program/ProgramIntroSection.vue'
import ProgramValueSection from '@/components/program/ProgramValueSection.vue'
import ProgramCTASection from '@/components/program/ProgramCTASection.vue'

import FocusAreasSection from '@/components/common/FocusSection.vue'
import BeneficiariesSection from '@/components/common/BeneficiariesSection.vue'

import { cbdePage } from '@/data/cbde'

import { focusAreas, beneficiaryGroups } from '@/data/cbdeExtra'
</script>

<template>
  <div class="cbde-view">
    <ProgramHeroSection v-bind="cbdePage.hero" />
    <ProgramIntroSection v-bind="cbdePage.intro" />
    <ProgramValueSection v-bind="cbdePage.value" />

    <FocusAreasSection :areas="focusAreas" />
    <BeneficiariesSection :groups="beneficiaryGroups" />

    <ProgramCTASection v-bind="cbdePage.cta" />
  </div>
</template>
