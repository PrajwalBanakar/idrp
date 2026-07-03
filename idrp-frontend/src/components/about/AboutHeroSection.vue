<script setup lang="ts">
import BaseHeroSection from '@/components/common/BaseHeroSection.vue'

type Props = {
  eyebrow?: string
  title: string
  subtitle: string
  minHeightClass?: string
}

withDefaults(defineProps<Props>(), {
  eyebrow: 'Who We Are',
  minHeightClass: 'min-h-[300px]',
})
</script>

<template>
  <BaseHeroSection
    :eyebrow="eyebrow"
    :title="title"
    :subtitle="subtitle"
    :min-height-class="minHeightClass"
    container-class="px-6 py-14 sm:px-8 md:px-10 md:py-16 lg:px-16 lg:py-20 min-h-[42vh]"
  />
</template>
