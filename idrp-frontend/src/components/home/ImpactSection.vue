<template>
  <PerformanceMetricsSection
    eyebrow="Our Impact"
    title="By the numbers"
    description="A snapshot of the scale, reach, and momentum of the ecosystem being built."
    :stats="stats"
  />
</template>

<script setup lang="ts">
import type { Stat } from '@/data/home'
import PerformanceMetricsSection from '@/components/common/PerformanceMetricsSection.vue'

const { stats } = defineProps<{
  stats: Stat[]
}>()
</script>
