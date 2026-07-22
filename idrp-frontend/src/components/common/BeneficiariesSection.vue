<script setup lang="ts">
import SectionHeading from '@/components/common/SectionHeading.vue'

type Group = {
  title: string
  description: string
}

defineProps<{
  groups: Group[]
}>()
</script>

<template>
  <section class="bg-slate-50 px-6 py-16 md:px-16 md:py-20 lg:py-24">
    <div class="mx-auto max-w-6xl">
      <SectionHeading title="Who Can Benefit" class="mb-16" />

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="g in groups"
          :key="g.title"
          class="rounded-3xl border border-slate-200 p-6 text-center shadow-sm"
        >
          <h3 class="text-xl font-bold text-slate-900">{{ g.title }}</h3>
          <p class="mt-3 text-sm text-slate-600">{{ g.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
