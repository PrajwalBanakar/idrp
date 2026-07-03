<!-- <template>
  <div class="startups-view">
    <StartupsHeroSection
      :image-src="startupsHero.imageSrc"
      :image-alt="startupsHero.imageAlt"
      :eyebrow="startupsHero.eyebrow"
      :title="startupsHero.title"
      :description="startupsHero.description"
    />

    <StartupsIntroSection
      :stats="startupStats"
      :eyebrow="startupsIntro.eyebrow"
      :title="startupsIntro.title"
      :paragraphs="startupsIntro.paragraphs"
      :image-src="startupsIntro.imageSrc"
      :image-alt="startupsIntro.imageAlt"
    />

    <section v-if="loading" class="bg-white px-6 py-16 md:px-12 lg:px-16">
      <div class="mx-auto max-w-7xl rounded-3xl bg-slate-50 p-8 text-center text-slate-600">
        Loading startups...
      </div>
    </section>

    <section v-else-if="errorMessage" class="bg-white px-6 py-16 md:px-12 lg:px-16">
      <div
        class="mx-auto max-w-7xl rounded-3xl border border-red-200 bg-red-50 p-8 text-center text-red-700"
      >
        {{ errorMessage }}
      </div>
    </section>

    <StartupsPortfolioSection v-else :startups="startups" />

    <StartupsCTASection />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { startupStats, startupsHero, startupsIntro } from '@/data/startups'
import { startupService } from '@/services/startupService'
import type { Startup } from '@/types/startups'

import StartupsPortfolioSection from '@/components/startups/StartupsPortfolioSection.vue'
import StartupsHeroSection from '@/components/startups/StartupsHeroSection.vue'
import StartupsIntroSection from '@/components/startups/StartupsIntroSection.vue'
import StartupsCTASection from '@/components/startups/StartupsCTASection.vue'

const startups = ref<Startup[]>([])
const loading = ref(false)
const errorMessage = ref('')

const fetchStartups = async () => {
  loading.value = true
  errorMessage.value = ''

  try {
    startups.value = await startupService.getAll()
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Failed to load startups'
  } finally {
    loading.value = false
  }
}

onMounted(fetchStartups)
</script> -->

<!-- ========================================================= -->
<!-- 🔒 OLD STATIC VERSION (FALLBACK / REFERENCE)              -->
<!-- ========================================================= -->

<template>
  <div class="startups-view">
    <StartupsHeroSection
      :image-src="startupsHero.imageSrc"
      :image-alt="startupsHero.imageAlt"
      :eyebrow="startupsHero.eyebrow"
      :title="startupsHero.title"
      :description="startupsHero.description"
    />

    <StartupsIntroSection
      :stats="startupStats"
      :eyebrow="startupsIntro.eyebrow"
      :title="startupsIntro.title"
      :paragraphs="startupsIntro.paragraphs"
      :image-src="startupsIntro.imageSrc"
      :image-alt="startupsIntro.imageAlt"
    />

    <StartupsPortfolioSection :startups="startups" />

    <StartupsCTASection />
  </div>
</template>

<script setup lang="ts">
import { startupStats, startups, startupsHero, startupsIntro } from '@/data/startups'

import StartupsPortfolioSection from '@/components/startups/StartupsPortfolioSection.vue'
import StartupsHeroSection from '@/components/startups/StartupsHeroSection.vue'
import StartupsIntroSection from '@/components/startups/StartupsIntroSection.vue'
import StartupsCTASection from '@/components/startups/StartupsCTASection.vue'
</script>