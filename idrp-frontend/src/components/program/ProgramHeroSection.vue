<script setup lang="ts">
import BaseHeroSection from '@/components/common/BaseHeroSection.vue'

type Props = {
  eyebrow?: string
  title: string
  subtitle: string
  minHeightClass?: string
  brochureTo?: string
  brochureLabel?: string
}

withDefaults(defineProps<Props>(), {
  eyebrow: 'Program',
  minHeightClass: 'min-h-[360px]',
  brochureTo: '',
  brochureLabel: 'View Brochure',
})
</script>

<template>
  <BaseHeroSection
    :eyebrow="eyebrow"
    :title="title"
    :subtitle="subtitle"
    :min-height-class="minHeightClass"
    container-class="px-6 py-14 sm:px-8 md:px-10 md:py-16 lg:px-16 lg:py-20 min-h-[55vh]"
  >
    <template v-if="brochureTo" #actions>
      <a
        :href="brochureTo"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white hover:text-[var(--color-primary)] sm:text-base"
      >
        {{ brochureLabel }}
      </a>
    </template>
  </BaseHeroSection>
</template>
