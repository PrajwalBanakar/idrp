<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import StartupCard from '@/components/startups/StartupCard.vue'
import { startupTabs } from '@/data/startups'
import type { Startup, TabKey } from '@/types/startups'

type SortOption = 'name-asc' | 'name-desc' | 'category'

const props = defineProps<{
  startups: Startup[]
}>()

const activeTab = ref<TabKey>('all')
const expandedStartupId = ref<number | null>(null)
const searchQuery = ref('')
const sortBy = ref<SortOption>('name-asc')

const filteredStartups = computed(() => {
  const base =
    activeTab.value === 'all'
      ? props.startups
      : props.startups.filter((startup) => startup.category === activeTab.value)

  const query = searchQuery.value.toLowerCase()

  if (!query) return base

  return base.filter((startup) => {
    const founderText = (startup.founders ?? [])
      .map((founder) =>
        [founder.name, founder.role ?? '', founder.email ?? '', founder.linkedin ?? ''].join(' '),
      )
      .join(' ')
      .toLowerCase()

    const mentorText = (startup.techFacultyMentors ?? [])
      .map((mentor) =>
        [mentor.name, mentor.role ?? '', mentor.email ?? '', mentor.linkedin ?? ''].join(' '),
      )
      .join(' ')
      .toLowerCase()

    const teamText = (startup.teamMembers ?? [])
      .map((member) =>
        [member.name, member.role ?? '', member.email ?? '', member.linkedin ?? ''].join(' '),
      )
      .join(' ')
      .toLowerCase()

    return (
      startup.name.toLowerCase().includes(query) ||
      (startup.sector ?? '').toLowerCase().includes(query) ||
      (startup.brief ?? '').toLowerCase().includes(query) ||
      (startup.contactEmail ?? '').toLowerCase().includes(query) ||
      founderText.includes(query) ||
      mentorText.includes(query) ||
      teamText.includes(query)
    )
  })
})

const visibleStartups = computed(() => {
  const sorted = [...filteredStartups.value]

  if (sortBy.value === 'name-asc') {
    return sorted.sort((a, b) => a.name.localeCompare(b.name))
  }

  if (sortBy.value === 'name-desc') {
    return sorted.sort((a, b) => b.name.localeCompare(a.name))
  }

  return sorted.sort((a, b) => {
    if (a.category === b.category) {
      return a.name.localeCompare(b.name)
    }

    return a.category.localeCompare(b.category)
  })
})

const hasActiveFilters = computed(
  () => !!searchQuery.value || activeTab.value !== 'all' || sortBy.value !== 'name-asc',
)

function toggleStartup(id: number) {
  expandedStartupId.value = expandedStartupId.value === id ? null : id
}

function getTabCount(key: TabKey) {
  if (key === 'all') return props.startups.length

  return props.startups.filter((startup) => startup.category === key).length
}

function resetFilters() {
  activeTab.value = 'all'
  searchQuery.value = ''
  sortBy.value = 'name-asc'
  expandedStartupId.value = null
}

watch([activeTab, searchQuery, sortBy], () => {
  expandedStartupId.value = null
})
</script>

<template>
  <section class="bg-slate-50 px-6 py-16 md:px-12 lg:px-16 lg:py-20">
    <div class="mx-auto max-w-7xl">
      <div class="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-2xl">
          <span
            class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]"
          >
            Portfolio Directory
          </span>

          <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Explore Our Startup Portfolio
          </h2>

          <p class="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Discover startups across incubation stages, explore founding teams, mentors, and connect
            with ventures from the IDRP ecosystem.
          </p>
        </div>

        <div class="rounded-3xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
          <p class="text-xs font-semibold uppercase tracking-wide text-slate-400">Results</p>

          <p class="mt-1 text-3xl font-bold text-slate-900">
            {{ visibleStartups.length }}
          </p>

          <p class="text-sm text-slate-500">
            startup{{ visibleStartups.length !== 1 ? 's' : '' }}
          </p>
        </div>
      </div>

      <div class="mb-6 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div class="flex flex-wrap gap-3">
            <button
              v-for="tab in startupTabs"
              :key="tab.key"
              type="button"
              class="rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200"
              :class="
                activeTab === tab.key
                  ? 'bg-[var(--color-primary)] text-white shadow-md'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-[var(--color-primary)]/30 hover:text-[var(--color-primary)]'
              "
              @click="activeTab = tab.key"
            >
              {{ tab.label }}

              <span class="ml-1.5 text-xs font-bold opacity-75">
                ({{ getTabCount(tab.key) }})
              </span>
            </button>
          </div>

          <div class="flex w-full flex-col gap-3 sm:flex-row xl:w-auto">
            <input
              v-model.trim="searchQuery"
              type="text"
              placeholder="Search by startup, founder, co-founder, mentor, sector..."
              class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[var(--color-primary)]/40 focus:ring-2 focus:ring-[var(--color-primary-soft)] sm:w-80"
            />

            <select
              v-model="sortBy"
              class="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[var(--color-primary)]/40 focus:ring-2 focus:ring-[var(--color-primary-soft)] sm:min-w-[180px]"
            >
              <option value="name-asc">Sort: A–Z</option>
              <option value="name-desc">Sort: Z–A</option>
              <option value="category">Sort: Category</option>
            </select>
          </div>
        </div>
      </div>

      <div class="mb-8 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
        <p>
          Showing
          <span class="font-semibold text-slate-800">
            {{ visibleStartups.length }}
          </span>
          of
          <span class="font-semibold text-slate-800">
            {{ startups.length }}
          </span>
          startups
        </p>

        <p v-if="hasActiveFilters">Filters applied</p>
      </div>

      <div v-if="visibleStartups.length > 0" class="space-y-6">
        <StartupCard
          v-for="startup in visibleStartups"
          :key="startup.id"
          :startup="startup"
          :expanded="expandedStartupId === startup.id"
          @toggle="toggleStartup"
        />
      </div>

      <div
        v-else
        class="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm"
      >
        <div
          class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-3xl"
        >
          🚀
        </div>

        <h3 class="mt-5 text-xl font-semibold text-slate-900">{{ startups.length === 0 ? 'No startups available yet' : 'No startups match your filters' }}</h3>

        <p class="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
          Try adjusting your search, switching categories, or resetting filters to discover more
          startups.
        </p>

        <button
          type="button"
          class="mt-6 inline-flex rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
          @click="resetFilters"
        >
          Reset Filters
        </button>
      </div>
    </div>
  </section>
</template>