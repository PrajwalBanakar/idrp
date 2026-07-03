<template>
  <div class="about-view bg-white">
    <AboutHeroSection v-bind="aboutHero" />
    <AboutIntroSection v-bind="aboutIntro" />

    <AboutCampusGallerySection :section="campusGallerySection" :images="campusImages" />

    <AboutMissionVisionSection
      :section="missionVisionSection"
      :mission-vision="missionVision"
      :pillars="pillars"
    />

    <AboutOfferingsSection
      :section="offeringsSection"
      :offerings="offerings"
      :highlight="offeringsHighlight"
    />

    <AboutReasonsSection :section="reasonsSection" :reasons="reasons" />

    <AboutVisionSection :section="visionSection" :vision-cards="visionCards" />

    <AboutCTASection v-bind="aboutCTA" />
  </div>
</template>

<script setup lang="ts">
import AboutHeroSection from '@/components/about/AboutHeroSection.vue'
import AboutIntroSection from '@/components/about/AboutIntroSection.vue'
import AboutCampusGallerySection from '@/components/about/AboutCampusGallerySection.vue'
import AboutMissionVisionSection from '@/components/about/AboutMissionVisionSection.vue'
import AboutOfferingsSection from '@/components/about/AboutOfferingsSection.vue'
import AboutReasonsSection from '@/components/about/AboutReasonsSection.vue'
import AboutVisionSection from '@/components/about/AboutVisionSection.vue'
import AboutCTASection from '@/components/about/AboutCTASection.vue'

import {
  aboutCTA,
  aboutHero,
  aboutIntro,
  missionVisionSection,
  missionVision,
  pillars,
  offeringsSection,
  offerings,
  offeringsHighlight,
  reasonsSection,
  reasons,
  visionSection,
  visionCards,
  campusGallerySection,
  campusImages,
} from '@/data/about'
</script>
