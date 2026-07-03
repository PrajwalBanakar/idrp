<script setup lang="ts">
import type { NAINOverviewContent, NAINPMUDetails } from '@/types/nain'

type OverviewStatItem = {
  id: string
  label: string
  value: number | string
  tone?: 'teal' | 'cyan' | 'slate'
}

type Props = {
  overview: NAINOverviewContent
  stats: OverviewStatItem[]
  pmu: NAINPMUDetails
}

defineProps<Props>()

function getCardClasses(tone?: 'teal' | 'cyan' | 'slate') {
  switch (tone) {
    case 'cyan':
      return 'border-cyan-100 bg-cyan-50'
    case 'slate':
      return 'border-slate-200 bg-slate-50'
    case 'teal':
    default:
      return 'border-teal-100 bg-[var(--color-primary-soft)]'
  }
}

function getLabelClasses(tone?: 'teal' | 'cyan' | 'slate') {
  switch (tone) {
    case 'cyan':
      return 'text-cyan-700'
    case 'slate':
      return 'text-slate-700'
    case 'teal':
    default:
      return 'text-[var(--color-primary)]'
  }
}
</script>

<template>
  <section class="mx-auto max-w-7xl px-6 py-14 md:px-12 lg:py-16">
    <div class="grid items-start gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-10">
      <div>
        <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
          {{ overview.eyebrow }}
        </span>

        <h2 class="mt-3 max-w-4xl text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
          {{ overview.title }}
        </h2>

        <div class="mt-5 space-y-4 text-[15px] leading-7 text-slate-600">
          <p v-for="paragraph in overview.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>

        <div class="mt-8 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
          <div class="grid gap-4 md:grid-cols-3 md:gap-6">
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                Project Monitoring Unit (PMU)
              </p>
              <p class="mt-1 text-sm font-medium leading-6 text-slate-800">
                {{ pmu.name }}
              </p>
            </div>

            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                Principal Investigator
              </p>
              <p class="mt-1 text-sm font-medium leading-6 text-slate-800">
                {{ pmu.principalInvestigator }}
              </p>
            </div>

            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                Co Principal Investigator
              </p>
              <p class="mt-1 text-sm font-medium leading-6 text-slate-800">
                {{ pmu.coPrincipalInvestigator }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="grid content-start gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <div
          v-for="stat in stats"
          :key="stat.id"
          :class="[
            'flex min-h-[160px] flex-col justify-between rounded-3xl border p-5',
            getCardClasses(stat.tone),
          ]"
        >
          <p
            :class="[
              'text-sm font-semibold uppercase tracking-[0.18em]',
              getLabelClasses(stat.tone),
            ]"
          >
            {{ stat.label }}
          </p>

          <p class="mt-4 text-4xl font-extrabold leading-none text-slate-900">
            {{ stat.value }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
