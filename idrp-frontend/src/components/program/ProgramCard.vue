<script setup lang="ts">
import { ref } from 'vue'
import type { ProgramCardData } from '@/types/program'

type Props = {
  program: ProgramCardData
  defaultOpenSection?: string | null
}

const props = withDefaults(defineProps<Props>(), {
  defaultOpenSection: null,
})

const openSectionTitle = ref<string | null>(props.defaultOpenSection)

function toggleSection(title: string) {
  openSectionTitle.value = openSectionTitle.value === title ? null : title
}

function isSectionOpen(title: string) {
  return openSectionTitle.value === title
}
</script>

<template>
  <article class="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm md:p-8">
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div class="max-w-3xl">
          <div class="flex flex-wrap items-center gap-3">
            <h3 class="text-2xl font-bold text-gray-900">
              {{ program.title }}
            </h3>

            <span
              v-if="program.duration"
              class="inline-flex items-center rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]"
            >
              {{ program.duration }}
            </span>

            <span
              v-if="program.mode"
              class="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700"
            >
              {{ program.mode }}
            </span>
          </div>

          <p v-if="program.subtitle" class="mt-2 text-sm font-medium text-[var(--color-primary)]">
            {{ program.subtitle }}
          </p>

          <p class="mt-4 leading-relaxed text-gray-600">
            {{ program.description }}
          </p>
        </div>

        <RouterLink
          v-if="program.applyTo"
          :to="program.applyTo"
          class="inline-flex items-center justify-center rounded-full bg-teal-600 px-5 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[var(--color-primary)]"
        >
          Apply Now
        </RouterLink>
      </div>

      <div v-if="program.sections.length" class="space-y-4 border-t border-gray-100 pt-2">
        <div
          v-for="section in program.sections"
          :key="section.title"
          class="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50"
        >
          <button
            type="button"
            class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200 hover:bg-gray-100"
            @click="toggleSection(section.title)"
          >
            <span class="text-sm font-bold text-gray-900 md:text-base">
              {{ section.title }}
            </span>

            <span
              class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg font-semibold text-[var(--color-primary)] shadow-sm"
            >
              {{ isSectionOpen(section.title) ? '−' : '+' }}
            </span>
          </button>

          <div
            v-if="isSectionOpen(section.title)"
            class="border-t border-gray-100 bg-white px-5 py-4"
          >
            <ul class="space-y-3">
              <li
                v-for="item in section.items"
                :key="item"
                class="flex items-start gap-3 text-sm leading-relaxed text-gray-600"
              >
                <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary-soft)]0" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
