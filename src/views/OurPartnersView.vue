<!-- <template>
  <div class="our-partners-view">
    <PartnersHeroSection :show-hero-image="showHeroImage" @image-error="showHeroImage = false" />
    <PartnersIntroSection />

    <section v-if="loading" class="bg-white px-6 py-16 md:px-12 lg:px-16">
      <div class="mx-auto max-w-7xl rounded-3xl bg-slate-50 p-8 text-center text-slate-600">
        Loading partners...
      </div>
    </section>

    <section v-else-if="errorMessage" class="bg-white px-6 py-16 md:px-12 lg:px-16">
      <div
        class="mx-auto max-w-7xl rounded-3xl border border-red-200 bg-red-50 p-8 text-center text-red-700"
      >
        {{ errorMessage }}
      </div>
    </section>

    <PartnersGridSection v-else :partner-categories="partners" />

    <PartnerFormSection />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { partnerService } from '@/services/partnerService'
import type { PartnerCategory } from '@/types/partners'

import PartnersGridSection from '@/components/partners/PartnersGridSection.vue'
import PartnerFormSection from '@/components/partners/PartnerFormSection.vue'
import PartnersHeroSection from '@/components/partners/PartnersHeroSection.vue'
import PartnersIntroSection from '@/components/partners/PartnersIntroSection.vue'

const showHeroImage = ref(true)

const partners = ref<PartnerCategory[]>([])
const loading = ref(false)
const errorMessage = ref('')

const fetchPartners = async () => {
  loading.value = true
  errorMessage.value = ''

  try {
    partners.value = await partnerService.getAll()
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Failed to load partners'
  } finally {
    loading.value = false
  }
}

onMounted(fetchPartners)
</script> -->

<!-- ========================================================= -->
<!-- 🔒 OLD STATIC VERSION (FALLBACK / REFERENCE)              -->
<!-- ========================================================= -->


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
