<template>
  <article
    class="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-primary)]/20 hover:shadow-xl"
  >
    <div class="h-1.5 bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-400" />

    <div class="flex flex-1 flex-col p-8">
      <div class="mb-5 flex flex-wrap items-center gap-3">
        <span
          class="inline-flex items-center rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]"
        >
          {{ job.department }}
        </span>

        <span
          class="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600"
        >
          {{ job.employmentType }}
        </span>

        <span
          class="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]"
          :class="
            job.status === 'OPEN'
              ? 'bg-emerald-100 text-emerald-700'
              : 'bg-slate-200 text-slate-500'
          "
        >
          {{ job.status === 'OPEN' ? 'Open' : 'Closed' }}
        </span>
      </div>

      <div class="flex-1">
        <h3 class="text-xl font-bold tracking-tight text-slate-900">
          {{ job.title }}
        </h3>

        <p class="mt-2 text-sm font-medium text-slate-500">{{ job.location }}</p>

        <p class="mt-4 text-sm leading-6 text-slate-600">
          {{ job.description }}
        </p>
      </div>

      <div class="mt-6 flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
        <span class="text-xs font-medium text-slate-500">
          Apply by {{ formattedDeadline }}
        </span>

        <RouterLink
          :to="`/careers/${job.slug}`"
          class="inline-flex items-center justify-center rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-primary)]"
        >
          View Details
        </RouterLink>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { Job } from '@/types/careers'

const props = defineProps<{
  job: Job
}>()

const formattedDeadline = computed(() =>
  new Date(props.job.deadline).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }),
)
</script>
