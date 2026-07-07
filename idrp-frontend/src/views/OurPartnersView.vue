<template>
  <div class="our-partners-view">
    <PartnersHeroSection :show-hero-image="showHeroImage" @image-error="showHeroImage = false" />
    <PartnersIntroSection />
    <PartnersGridSection :partner-categories="partnerCategories" />
    <PartnerFormSection />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { partnerCategories } from '@/data/partners'
import PartnersGridSection from '@/components/partners/PartnersGridSection.vue'
import PartnerFormSection from '@/components/partners/PartnerFormSection.vue'
import PartnersHeroSection from '@/components/partners/PartnersHeroSection.vue'
import PartnersIntroSection from '@/components/partners/PartnersIntroSection.vue'

const showHeroImage = ref(true)
</script>
