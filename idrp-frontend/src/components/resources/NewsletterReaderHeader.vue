<template>
  <div class="mb-8">
    <!-- Back -->
    <RouterLink
      to="/resources"
      class="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-primary)]/20 hover:bg-[var(--color-primary-soft)] hover:text-[var(--color-primary)]"
    >
      <span class="transition-transform duration-300 group-hover:-translate-x-1"> ← </span>
      Back to Resources
    </RouterLink>

    <!-- Title + Meta Row -->
    <div class="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 class="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          {{ title }}
        </h1>

        <p class="mt-2 text-sm text-slate-500">{{ issue }} · {{ date }}</p>
      </div>

      <div
        class="inline-flex w-fit items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600"
      >
        {{ spreadLabel }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  title: string
  issue: string
  date: string
  spreadLabel: string
}>()
</script>
