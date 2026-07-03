<template>
  <section id="programs" class="bg-white px-6 py-20 md:px-12 lg:px-16 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
        <span class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
          Programs
        </span>
        <h2
          class="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl"
        >
          Supporting startups from idea to scale
        </h2>
        <p class="mt-4 text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg">
          Structured programs and initiatives designed to help founders validate, build, and grow
          impactful ventures.
        </p>
      </div>

      <div class="space-y-12 lg:space-y-14">
        <!-- Incubation Programs -->
        <div>
          <div class="mb-6">
            <h3 class="text-xl font-semibold text-[var(--color-text-primary)] sm:text-2xl">
              Incubation Programs
            </h3>
            <p class="mt-1 text-sm text-[var(--color-text-secondary)]/80 sm:text-base">
              From early validation to growth and scale.
            </p>
          </div>

          <div class="grid gap-6">
            <article
              v-for="program in programs"
              :key="program.title"
              class="group cursor-pointer rounded-2xl border border-[var(--color-border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/20 hover:shadow-lg sm:p-7"
              @click="goToProgram(program.detailsTo)"
            >
              <div class="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span
                    class="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]"
                  >
                    {{ program.duration }}
                  </span>

                  <h3
                    class="mt-3 text-xl font-semibold leading-snug text-[var(--color-text-primary)] sm:text-2xl"
                  >
                    {{ program.title }}
                  </h3>
                </div>

                <div class="flex flex-wrap gap-3 sm:pr-2">
                  <a
                    v-if="program.brochureTo"
                    :href="program.brochureTo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="relative z-10 inline-flex min-w-[140px] items-center justify-center rounded-xl border border-[var(--color-primary)]/20 bg-white px-6 py-3 text-sm font-semibold text-[var(--color-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary-soft)]"
                    @click.stop
                  >
                    {{ program.brochureLabel || 'View Brochure' }}
                  </a>

                  <RouterLink
                    :to="program.applyTo"
                    class="btn-brand relative z-10 inline-flex min-w-[120px] items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    @click.stop
                  >
                    Apply
                  </RouterLink>
                </div>
              </div>

              <p class="mb-5 text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
                {{ program.description }}
              </p>

              <ul class="grid gap-2.5 sm:grid-cols-2">
                <li
                  v-for="feature in program.features"
                  :key="feature"
                  class="flex items-center gap-2.5 text-sm leading-6 text-[var(--color-text-primary)]/85"
                >
                  <svg
                    class="h-4 w-4 shrink-0 text-[var(--color-primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {{ feature }}
                </li>
              </ul>
            </article>
          </div>
        </div>

        <!-- Comparison table -->
        <div
          class="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-6 sm:p-8 lg:p-10"
        >
          <div class="mx-auto max-w-3xl text-center">
            <span
              class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]"
            >
              Choose the right path
            </span>
            <h3
              class="mt-3 text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-3xl"
            >
              Which program is right for you?
            </h3>
            <p class="mt-4 text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg">
              Whether you are validating an idea or building on an MVP, compare the two core startup
              pathways at IDRP and choose the one that fits your current stage.
            </p>
          </div>

          <div
            class="mt-8 overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-white"
          >
            <table class="min-w-[720px] w-full border-collapse text-sm">
              <thead>
                <tr class="bg-[var(--color-primary-soft)]">
                  <th
                    scope="col"
                    class="px-4 py-4 text-left font-semibold text-[var(--color-text-primary)] sm:px-6"
                  >
                    Feature
                  </th>
                  <th
                    scope="col"
                    class="border-l border-[var(--color-border)] px-4 py-4 text-left font-semibold text-[var(--color-text-primary)] sm:px-6"
                  >
                    Yuva Udyami
                  </th>
                  <th
                    scope="col"
                    class="border-l border-[var(--color-border)] px-4 py-4 text-left font-semibold text-[var(--color-text-primary)] sm:px-6"
                  >
                    Udyami
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="row in comparisonRows"
                  :key="row.feature"
                  class="border-t border-[var(--color-border)]"
                >
                  <td class="px-4 py-4 font-semibold text-[var(--color-text-primary)] sm:px-6">
                    {{ row.feature }}
                  </td>
                  <td
                    class="border-l border-[var(--color-border)] px-4 py-4 text-[var(--color-text-secondary)] sm:px-6"
                  >
                    {{ row.yuvaUdyami }}
                  </td>
                  <td
                    class="border-l border-[var(--color-border)] px-4 py-4 text-[var(--color-text-secondary)] sm:px-6"
                  >
                    {{ row.udyami }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <RouterLink
              to="/pre-incubation"
              class="inline-flex items-center justify-center rounded-xl border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition-all duration-300 hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary-soft)] hover:text-[var(--color-primary)]"
            >
              Explore Yuva Udyami
            </RouterLink>

            <RouterLink
              to="/incubation"
              class="btn-brand inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold shadow-md transition-all duration-300 hover:shadow-lg"
            >
              Explore Udyami
            </RouterLink>
          </div>
        </div>

        <!-- Government Initiatives -->
        <div>
          <div class="mb-6">
            <h3 class="text-xl font-semibold text-[var(--color-text-primary)] sm:text-2xl">
              Government Initiatives
            </h3>
            <p class="mt-1 text-sm text-[var(--color-text-secondary)]/80 sm:text-base">
              Programs that strengthen infrastructure, research, and innovation.
            </p>
          </div>

          <div class="flex flex-wrap justify-center gap-6">
            <RouterLink
              v-for="item in governmentPrograms"
              :key="item.title"
              :to="item.route"
              class="group flex w-full max-w-[640px] flex-col rounded-2xl border border-[var(--color-border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/20 hover:shadow-lg sm:p-7 md:w-[calc(50%-12px)]"
            >
              <div
                class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-soft)] text-[var(--color-primary)] transition-all group-hover:bg-[var(--color-primary)] group-hover:text-white"
                aria-hidden="true"
              >
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    :d="iconPaths[item.icon] ?? iconPaths.default"
                  />
                </svg>
              </div>

              <h4
                class="text-lg font-semibold leading-snug text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-primary)] sm:text-xl"
              >
                {{ item.title }}
              </h4>

              <p class="mt-3 text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
                {{ item.description }}
              </p>

              <div
                class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-all group-hover:gap-3"
              >
                Explore
                <svg
                  class="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import type { GovernmentProgram, Program } from '@/data/home'

defineProps<{
  programs: Program[]
  governmentPrograms: GovernmentProgram[]
}>()

const router = useRouter()

function goToProgram(path: string) {
  router.push(path)
}

// Icon path map — replaces the v-if/v-else-if chain in the template
const iconPaths: Record<string, string> = {
  atom: 'M12 3c2.5 0 4.5 4 4.5 9s-2 9-4.5 9-4.5-4-4.5-9 2-9 4.5-9Zm0 0c4.5 0 8 2 8 4.5S16.5 12 12 12 4 10 4 7.5 7.5 3 12 3Zm0 9c-4.5 0-8 2-8 4.5S7.5 21 12 21s8-2 8-4.5S16.5 12 12 12Z',
  lightbulb:
    'M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.75c.6.45 1 1.08 1 1.83V17h6v-.42c0-.75.4-1.38 1-1.83A7 7 0 0 0 12 2Z',
  beaker: 'M10 3v5.5L4.8 18.2A2 2 0 0 0 6.6 21h10.8a2 2 0 0 0 1.8-2.8L14 8.5V3M9 3h6M8 14h8',
  'pencil-ruler': 'M14 3l7 7M5 21l6-1 10-10-5-5L6 15l-1 6ZM13 6l5 5M3 3l6 6M4 8l4-4',
  default:
    'M3 10h18M5 10V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3M6 10v8m12-8v8M9 14h.01M15 14h.01M8 21h8',
}

// Comparison table data — extracted from hardcoded markup
const comparisonRows = [
  { feature: 'Stage', yuvaUdyami: 'Idea / Early validation', udyami: 'MVP / Early traction' },
  { feature: 'Focus', yuvaUdyami: 'MVP and Product-Market-Fit', udyami: 'Growth and scaling' },
  { feature: 'Funding', yuvaUdyami: 'Yes', udyami: 'Yes' },
  { feature: 'Duration', yuvaUdyami: '18 months', udyami: '18 months' },
]
</script>
