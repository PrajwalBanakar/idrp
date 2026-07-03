<script setup lang="ts">
import BaseHeroSection from '@/components/common/BaseHeroSection.vue'

type Props = {
  eyebrow?: string
  title: string
  minHeightClass?: string
}

withDefaults(defineProps<Props>(), {
  eyebrow: 'Our Team',
  minHeightClass: 'min-h-[280px]',
})
</script>

<template>
  <BaseHeroSection
    :eyebrow="eyebrow"
    :title="title"
    :min-height-class="minHeightClass"
    container-class="px-6 py-12 sm:px-8 md:px-10 md:py-14 lg:px-16 lg:py-16 min-h-[38vh]"
  />
</template>
