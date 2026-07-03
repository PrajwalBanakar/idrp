<script setup lang="ts">
import ProgramHeroSection from '@/components/program/ProgramHeroSection.vue'
import ProgramIntroSection from '@/components/program/ProgramIntroSection.vue'
import ProgramValueSection from '@/components/program/ProgramValueSection.vue'
import ProgramCTASection from '@/components/program/ProgramCTASection.vue'

import FocusAreasSection from '@/components/common/FocusSection.vue'
import BeneficiariesSection from '@/components/common/BeneficiariesSection.vue'
import ImageGallerySection from '@/components/common/ImageGallerySection.vue'

import { cifPage } from '@/data/cif'
import { focusAreas, beneficiaryGroups, cifGalleryImages } from '@/data/cifExtra'
</script>

<template>
  <div class="cif-view">
    <ProgramHeroSection v-bind="cifPage.hero" />
    <ProgramIntroSection v-bind="cifPage.intro" />
    <ProgramValueSection v-bind="cifPage.value" />

    <ImageGallerySection
      title="CIF Infrastructure & Facilities"
      description="A glimpse into the advanced labs, shared instrumentation, prototyping spaces, and research facilities supporting innovation at IDRP."
      :images="cifGalleryImages"
    />

    <FocusAreasSection :areas="focusAreas" />
    <BeneficiariesSection :groups="beneficiaryGroups" />

    <ProgramCTASection v-bind="cifPage.cta" />
  </div>
</template>