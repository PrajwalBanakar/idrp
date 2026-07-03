<script setup lang="ts">
import { computed, ref } from 'vue'
import type { NAINInstitute } from '@/types/nain'

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

const selectedYearBlock = computed(() =>
  props.institute.years.find((yearBlock) => yearBlock.year === props.year),
)

function getInstituteProjectCount(institute: NAINInstitute) {
  return institute.years.reduce((sum, year) => sum + year.projects.length, 0)
}
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
              NAIN Coordinator
            </p>
            <p class="mt-1 text-sm font-medium text-slate-800">
              {{ selectedYearBlock.support.nainCoordinator }}
            </p>
          </div>
        </div>
      </div>

      <div class="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-2">
        <article
          v-for="project in selectedYearBlock.projects"
          :key="project.id"
          class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
        >
          <div class="flex items-start justify-between gap-3">
            <h4 class="text-xl font-bold leading-7 text-slate-900">
              {{ project.title }}
            </h4>

            <a
              v-if="project.projectLink"
              :href="project.projectLink"
              target="_blank"
              rel="noopener noreferrer"
              class="shrink-0 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)] transition hover:bg-teal-100"
            >
              View
            </a>
          </div>

          <div class="mt-5 space-y-4 text-sm">
            <div>
              <p class="font-semibold text-slate-900">Faculty Guide Name</p>
              <p class="mt-1 text-slate-600">{{ project.facultyGuideName }}</p>
            </div>

            <div>
              <p class="font-semibold text-slate-900">Team Leader Name</p>
              <p class="mt-1 text-slate-600">{{ project.teamLeaderName }}</p>
            </div>

            <div>
              <p class="font-semibold text-slate-900">Team Members Name</p>
              <p class="mt-1 text-slate-600">
                {{ project.teamMembers.join(', ') }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </article>
</template>
