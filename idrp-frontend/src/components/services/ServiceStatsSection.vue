<template>
  <section
    v-if="stats.length"
    class="bg-gradient-to-br from-teal-800 to-cyan-600 px-6 py-24 md:px-16"
  >
    <div class="mx-auto max-w-5xl">
      <div class="mb-14 text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-teal-100">
          Impact Snapshot
        </span>

        <h2 class="mt-2 text-3xl font-bold text-white md:text-4xl">Service Impact at a Glance</h2>

        <p class="mt-3 text-teal-100">
          Key numbers that reflect the reach, focus, and value created through this service.
        </p>
      </div>

      <div class="grid gap-8" :class="gridClasses">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <p class="text-4xl font-extrabold text-white md:text-5xl">
            {{ stat.value }}
          </p>

          <p class="mt-2 text-sm leading-snug text-teal-100 md:text-base">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ServiceStat } from '@/types/service'

const props = defineProps<{
  stats: ServiceStat[]
}>()

const gridClasses = computed(() => {
  const count = props.stats.length

  if (count === 1) return 'grid-cols-1'
  if (count === 2) return 'grid-cols-1 sm:grid-cols-2'
  if (count === 3) return 'grid-cols-1 sm:grid-cols-3'
  return 'grid-cols-2 md:grid-cols-4'
})
</script>
