<script setup lang="ts">
import ProgramCard from '@/components/program/ProgramCard.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
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
  <section class="bg-slate-50 px-6 py-16 md:px-16 md:py-20 lg:py-24">
    <div class="mx-auto max-w-6xl">
      <SectionHeading :eyebrow="eyebrow" :title="title" :description="description" class="mb-14" />

      <div class="space-y-8">
        <ProgramCard v-for="program in programs" :key="program.id" :program="program" />
      </div>
    </div>
  </section>
</template>
