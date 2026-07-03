<template>
  <div class="technical-education-academy-view">
    <ServiceHeroSection :hero="technicalEducationAcademyPage.hero" />
    <ServiceIntroSection :intro="technicalEducationAcademyPage.intro" />
    <ServiceHighlightsSection :items="technicalEducationAcademyPage.highlights ?? []" />
    <!-- <ServiceStatsSection :stats="technicalEducationAcademyPage.stats ?? []" /> -->

    <AcademyCategoriesSection :categories="technicalEducationAcademyPage.academyCategories" />

    <ServiceCTASection
      v-if="technicalEducationAcademyPage.cta"
      :cta="technicalEducationAcademyPage.cta"
    />
    <AcademyFormSection />
  </div>
</template>

<script setup lang="ts">
import { technicalEducationAcademyPage } from '@/data/technicalEducationAcademy'
import AcademyCategoriesSection from '@/components/academy/AcademyCategoriesSection.vue'
import AcademyFormSection from '@/components/academy/AcademyFormSection.vue'
import ServiceCTASection from '@/components/services/ServiceCTASection.vue'
import ServiceHeroSection from '@/components/services/ServiceHeroSection.vue'
import ServiceHighlightsSection from '@/components/services/ServiceHighlightsSection.vue'
import ServiceIntroSection from '@/components/services/ServiceIntroSection.vue'
import ServiceStatsSection from '@/components/services/ServiceStatsSection.vue'
</script>
