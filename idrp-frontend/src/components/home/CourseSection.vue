<template>
  <section class="bg-[var(--color-bg-soft)] px-6 py-20 md:px-12 lg:px-16 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
        <span class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
          Learning & Capacity Building
        </span>
        <h2
          class="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl"
        >
          Certification Courses & Workshops
        </h2>
        <p
          class="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg"
        >
          Explore structured learning tracks through certification courses and workshops offered by
          the Technical Education Academy.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <RouterLink
          v-for="item in courses"
          :key="item.title"
          :to="item.route"
          class="group block rounded-2xl border border-[var(--color-border)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/20 hover:shadow-lg sm:p-7"
        >
          <div class="flex items-start justify-between gap-4">
            <span
              class="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]"
            >
              {{ item.badge }}
            </span>

            <span
              class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all duration-300 group-hover:bg-[var(--color-primary-soft)] group-hover:text-[var(--color-primary)]"
            >
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>

          <h3
            class="mt-5 text-xl font-semibold text-[var(--color-text-primary)] transition-colors duration-300 group-hover:text-[var(--color-primary)] sm:text-2xl"
          >
            {{ item.title }}
          </h3>

          <p class="mt-3 text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
            {{ item.description }}
          </p>

          <ul class="mt-5 space-y-2">
            <li
              v-for="entry in item.items"
              :key="entry"
              class="flex items-start gap-2 text-sm text-slate-700"
            >
              <span class="mt-1 text-[var(--color-primary)]">•</span>
              <span>{{ entry }}</span>
            </li>
          </ul>

          <div
            class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-all duration-300 group-hover:gap-3"
          >
            {{ item.ctaLabel }}
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { AcademyCategory } from '@/types/academy'

defineProps<{
  courses: AcademyCategory[]
}>()
</script>
