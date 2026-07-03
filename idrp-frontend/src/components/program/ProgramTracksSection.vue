<script setup lang="ts">
import ProgramCard from '@/components/program/ProgramCard.vue'
import type { ProgramCardData } from '@/types/program'

type Props = {
  eyebrow?: string
  title: string
  description: string
  programs?: ProgramCardData[]
}

withDefaults(defineProps<Props>(), {
  eyebrow: 'Programs',
  programs: () => [],
})
</script>

<template>
  <section class="bg-gray-50 px-6 py-24 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto mb-14 max-w-3xl text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
          {{ eyebrow }}
        </span>

        <h2 class="mt-3 text-4xl font-bold text-gray-900">
          {{ title }}
        </h2>

        <p class="mt-4 leading-relaxed text-gray-600">
          {{ description }}
        </p>
      </div>

      <div class="space-y-8">
        <ProgramCard v-for="program in programs" :key="program.id" :program="program" />
      </div>
    </div>
  </section>
</template>
