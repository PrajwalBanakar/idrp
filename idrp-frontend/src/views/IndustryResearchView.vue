<template>
  <div class="industry-research-view">
    <ServiceHeroSection :hero="industryResearchPage.hero" />
    <ServiceIntroSection :intro="industryResearchPage.intro" />
    <ServiceHighlightsSection :items="industryResearchPage.highlights ?? []" />
    <!-- <ServiceStatsSection :stats="industryResearchPage.stats ?? []" /> -->
    <ServiceCTASection v-if="industryResearchPage.cta" :cta="industryResearchPage.cta" />
    <ServiceFormSection
      v-if="industryResearchPage.formOptions"
      :title="industryResearchPage.cta?.title ?? 'Connect With Us'"
      :description="industryResearchPage.cta?.description ?? ''"
      :options="industryResearchPage.formOptions"
    />
  </div>
</template>

<script setup lang="ts">
import { industryResearchPage } from '@/data/industryResearch'
import ServiceCTASection from '@/components/services/ServiceCTASection.vue'
import ServiceFormSection from '@/components/services/ServiceFormSection.vue'
import ServiceHeroSection from '@/components/services/ServiceHeroSection.vue'
import ServiceHighlightsSection from '@/components/services/ServiceHighlightsSection.vue'
import ServiceIntroSection from '@/components/services/ServiceIntroSection.vue'
import ServiceStatsSection from '@/components/services/ServiceStatsSection.vue'
</script>
