<script setup lang="ts">
import { computed, ref } from 'vue'
import type { NAINInstitute, NAINProject } from '@/types/nain'
import NainProjectModal from '@/components/nain/NainProjectModal.vue'

type Props = {
  institute: NAINInstitute
  year: string
  expanded: boolean
}

const props = defineProps<Props>()

defineEmits<{
  (e: 'toggle', instituteId: string): void
}>()

const showInstituteLogo = ref(true)
const selectedProject = ref<NAINProject | null>(null)

const selectedYearBlock = computed(() =>
  props.institute.years.find((yearBlock) => yearBlock.year === props.year),
)

function getInstituteProjectCount(institute: NAINInstitute) {
  return institute.years.reduce((sum, year) => sum + year.projects.length, 0)
}

// Quick-glance numbers for this institute in this specific year — shown once
// the card is expanded, alongside the existing support-team and project info.
const instituteYearMetrics = computed(() => {
  const yearBlock = selectedYearBlock.value
  if (!yearBlock) return []

  const facultyGuides = new Set(
    yearBlock.projects.map((project) => project.facultyGuideName.trim().toLowerCase()),
  )

  const participants = new Set<string>()
  yearBlock.projects.forEach((project) => {
    participants.add(project.teamLeaderName.trim().toLowerCase())
    project.teamMembers.forEach((member) => participants.add(member.trim().toLowerCase()))
  })

  return [
    { label: 'Projects', value: yearBlock.projects.length },
    { label: 'Faculty Guides', value: facultyGuides.size },
    { label: 'Student Participants', value: participants.size },
  ]
})
</script>

<template>
  <article class="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
    <button
      type="button"
      class="flex w-full flex-col gap-5 px-6 py-6 text-left transition hover:bg-slate-50 md:flex-row md:items-center md:justify-between"
      @click="$emit('toggle', institute.id)"
    >
      <div class="flex items-start gap-4">
        <div
          class="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white"
        >
          <img
            v-if="institute.logo && showInstituteLogo"
            :src="institute.logo"
            :alt="institute.name"
            loading="lazy"
            class="h-full w-full object-contain p-2"
            @error="showInstituteLogo = false"
          />

          <div
            v-else
            class="flex h-full w-full items-center justify-center bg-gradient-to-br from-teal-50 to-cyan-50 text-lg font-bold text-[var(--color-primary)]"
          >
            {{ institute.name.charAt(0) }}
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-slate-900">
            {{ institute.name }}
          </h3>

          <p class="mt-1 text-sm font-medium text-slate-500">
            {{ institute.city }}, {{ institute.state }}
          </p>

          <p class="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            {{ institute.description }}
          </p>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <div class="text-right">
          <p class="text-xs font-semibold uppercase tracking-wider text-slate-400">Projects</p>
          <p class="text-lg font-bold text-slate-900">
            {{ getInstituteProjectCount(institute) }}
          </p>
        </div>

        <div
          class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600"
        >
          <span class="text-xl leading-none">
            {{ expanded ? '−' : '+' }}
          </span>
        </div>
      </div>
    </button>

    <div
      v-if="expanded && selectedYearBlock"
      class="border-t border-slate-200 bg-slate-50/70 px-6 py-6"
    >
      <div class="mb-5 grid gap-4 sm:grid-cols-3">
        <article
          v-for="metric in instituteYearMetrics"
          :key="metric.label"
          class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <p class="text-2xl font-bold tracking-tight text-slate-900">
            {{ metric.value }}
          </p>
          <p class="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
            {{ metric.label }}
          </p>
        </article>
      </div>

      <div class="rounded-2xl border border-teal-100 bg-[var(--color-primary-soft)] px-5 py-5">
        <h4 class="text-sm font-bold uppercase tracking-wider text-slate-900">
          Support Team Details
        </h4>

        <div class="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <p class="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
              PMU Tech Mentor
            </p>
            <p class="mt-1 text-sm font-medium text-slate-800">
              {{ selectedYearBlock.support.pmuTechMentor }}
            </p>
          </div>

          <div>
            <p class="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
              DIA
            </p>
            <p class="mt-1 text-sm font-medium text-slate-800">
              {{ selectedYearBlock.support.dia }}
            </p>
          </div>

          <div>
            <p class="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
              MIS Executive
            </p>
            <p class="mt-1 text-sm font-medium text-slate-800">
              {{ selectedYearBlock.support.misExecutives.join(', ') }}
            </p>
          </div>

          <div>
            <p class="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
              NAIN 2.0 Coordinator
            </p>
            <p class="mt-1 text-sm font-medium text-slate-800">
              {{ selectedYearBlock.support.nainCoordinator }}
            </p>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <h4 class="text-sm font-bold uppercase tracking-wider text-slate-900">Projects</h4>

        <div class="mt-3 grid gap-3 md:grid-cols-2">
          <button
            v-for="project in selectedYearBlock.projects"
            :key="project.id"
            type="button"
            class="group flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--color-primary)]/30 hover:shadow-md"
            @click="selectedProject = project"
          >
            <span
              class="text-base font-semibold text-slate-900 transition-colors group-hover:text-[var(--color-primary)]"
            >
              {{ project.title }}
            </span>

            <svg
              class="h-5 w-5 shrink-0 text-slate-400 transition group-hover:text-[var(--color-primary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <NainProjectModal :project="selectedProject" @close="selectedProject = null" />
  </article>
</template>
