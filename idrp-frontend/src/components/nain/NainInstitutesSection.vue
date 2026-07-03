<template>
  <section id="institutes" class="mx-auto max-w-7xl px-6 py-16 md:px-12">
    <div class="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h2 class="text-3xl font-bold text-slate-900 md:text-4xl">
          {{ section.title }}
        </h2>
      </div>

      <NainFilters
        :search-query="searchQuery"
        @update:search-query="$emit('update:searchQuery', $event)"
      />
    </div>

    <div class="space-y-6">
      <article
        v-for="year in years"
        :key="year"
        class="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"
      >
        <button
          type="button"
          class="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-slate-50"
          @click="$emit('toggleYear', year)"
        >
          <div>
            <h3 class="text-2xl font-bold text-slate-900">
              {{ year }}
            </h3>
            <p class="mt-1 text-sm text-slate-500">
              {{ getInstituteCountByYear(year) }} institute{{
                getInstituteCountByYear(year) > 1 ? 's' : ''
              }}
            </p>
          </div>

          <div
            class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600"
          >
            <span class="text-xl leading-none">
              {{ expandedYear === year ? '−' : '+' }}
            </span>
          </div>
        </button>

        <div
          v-if="expandedYear === year"
          class="border-t border-slate-200 bg-slate-50/70 px-6 py-6"
        >
          <div class="space-y-5">
            <NainInstituteCard
              v-for="institute in getInstitutesByYear(year)"
              :key="`${year}-${institute.id}`"
              :institute="institute"
              :year="year"
              :expanded="expandedInstituteId === institute.id"
              @toggle="$emit('toggleInstitute', $event)"
            />
          </div>
        </div>
      </article>

      <div
        v-if="years.length === 0"
        class="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center"
      >
        <h3 class="text-xl font-bold text-slate-900">No matching institutes found</h3>
        <p class="mt-2 text-sm text-slate-600">Try changing the search text.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import NainFilters from '@/components/nain/NainFilters.vue'
import NainInstituteCard from '@/components/nain/NainInstituteCard.vue'

import type { NAINInstitute, NAINSectionIntro } from '@/types/nain'

const props = defineProps<{
  section: NAINSectionIntro
  institutes: NAINInstitute[]
  searchQuery: string
  expandedYear: string | null
  expandedInstituteId: string | null
}>()

defineEmits<{
  (e: 'update:searchQuery', value: string): void
  (e: 'toggleYear', year: string): void
  (e: 'toggleInstitute', id: string): void
}>()

const years = computed(() => {
  const set = new Set<string>()

  props.institutes.forEach((institute) => {
    institute.years.forEach((yearGroup) => {
      set.add(yearGroup.year)
    })
  })

  return Array.from(set).sort().reverse()
})

function getInstitutesByYear(year: string) {
  return props.institutes
    .filter((institute) => institute.years.some((yearGroup) => yearGroup.year === year))
    .map((institute) => ({
      ...institute,
      years: institute.years.filter((yearGroup) => yearGroup.year === year),
    }))
}

function getInstituteCountByYear(year: string) {
  return getInstitutesByYear(year).length
}
</script>
