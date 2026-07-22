<script setup lang="ts">
import ProgramHeroSection from '@/components/program/ProgramHeroSection.vue'
import ProgramIntroSection from '@/components/program/ProgramIntroSection.vue'
import ProgramValueSection from '@/components/program/ProgramValueSection.vue'
import ProgramCTASection from '@/components/program/ProgramCTASection.vue'

import FocusAreasSection from '@/components/common/FocusSection.vue'
import BeneficiariesSection from '@/components/common/BeneficiariesSection.vue'
import ImageGallerySection from '@/components/common/ImageGallerySection.vue'
import PerformanceMetricsSection from '@/components/common/PerformanceMetricsSection.vue'
import ProgramEventsSection from '@/components/program/ProgramEventsSection.vue'

import { cifPage } from '@/data/cif'
import { focusAreas, beneficiaryGroups, cifGalleryImages, cifMetrics } from '@/data/cifExtra'
</script>

<template>
  <div class="cif-view">
    <ProgramHeroSection v-bind="cifPage.hero" />
    <ProgramIntroSection v-bind="cifPage.intro" />

    <PerformanceMetricsSection
      eyebrow="Impact"
      title="CIF Performance Metrics"
      description="Outreach, lab access, and prototyping delivered through the Common Instrumentation Facility."
      :stats="cifMetrics"
    />

    <ProgramValueSection v-bind="cifPage.value" />

    <ImageGallerySection
      title="CIF Infrastructure & Facilities"
      description="A glimpse into the advanced labs, shared instrumentation, prototyping spaces, and research facilities supporting innovation at IDRP."
      :images="cifGalleryImages"
    />

    <FocusAreasSection :areas="focusAreas" />
    <BeneficiariesSection :groups="beneficiaryGroups" />

    <ProgramEventsSection
      initiative-key="CIF"
      title="Events Under CIF"
      description="Outreach sessions, lab visits, and prototyping events hosted through the Common Instrumentation Facility."
    />

    <ProgramCTASection v-bind="cifPage.cta" />
  </div>
</template>