<template>
  <div class="careers-view">
    <section class="bg-white px-6 py-20 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-14 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            Join Our Team
          </span>
          <h1 class="mt-2 text-4xl font-bold text-slate-900">Careers at IDRP</h1>
          <p class="mx-auto mt-3 max-w-3xl text-slate-600">
            Explore open roles across the IDRP ecosystem and help build the innovation and
            incubation community at IIIT Dharwad.
          </p>
        </div>

        <div class="mb-8 flex flex-wrap items-center justify-center gap-3">
          <button
            v-for="option in filterOptions"
            :key="option.value"
            type="button"
            class="rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-200"
            :class="
              activeFilter === option.value
                ? 'bg-teal-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            "
            @click="activeFilter = option.value"
          >
            {{ option.label }}
          </button>
        </div>

        <div
          v-if="filteredJobs.length > 0"
          class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <JobCard v-for="job in filteredJobs" :key="job.id" :job="job" />
        </div>

        <div
          v-else
          class="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center text-slate-500"
        >
          No openings match this filter right now. Please check back soon.
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import JobCard from '@/components/careers/JobCard.vue'
import { jobs } from '@/data/careers'
import type { JobStatus } from '@/types/careers'

type FilterValue = 'ALL' | JobStatus

const filterOptions: { value: FilterValue; label: string }[] = [
  { value: 'ALL', label: 'All Roles' },
  { value: 'OPEN', label: 'Open' },
  { value: 'CLOSED', label: 'Closed' },
]

const activeFilter = ref<FilterValue>('OPEN')

const filteredJobs = computed(() =>
  activeFilter.value === 'ALL' ? jobs : jobs.filter((job) => job.status === activeFilter.value),
)
</script>
