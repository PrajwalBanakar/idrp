<template>
  <section class="bg-white px-6 py-24 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div class="mb-14 text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
          Programs Offered
        </span>
        <h2 class="mt-2 text-4xl font-bold text-slate-900">Certification Courses & Workshops</h2>
        <p class="mx-auto mt-3 max-w-3xl text-slate-600">
          Explore the two learning tracks offered through the Technical Education Academy. Choose
          between structured certification courses and focused workshops designed for practical,
          industry-relevant learning.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <RouterLink
          v-for="category in categories"
          :key="category.id"
          :to="category.route"
          class="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-primary)]/20 hover:shadow-xl"
        >
          <div class="flex items-start justify-between gap-4">
            <span
              class="inline-flex items-center rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]"
            >
              {{ category.badge }}
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

          <div class="mt-5 flex-1">
            <h3
              class="text-2xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-[var(--color-primary)]"
            >
              {{ category.title }}
            </h3>

            <p class="mt-4 text-sm leading-7 text-slate-600">
              {{ category.description }}
            </p>

            <ul class="mt-6 space-y-3">
              <li v-for="item in category.items" :key="item" class="flex items-start gap-3">
                <span
                  class="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-[var(--color-primary)]"
                >
                  ✓
                </span>
                <span class="text-sm leading-6 text-slate-700">
                  {{ item }}
                </span>
              </li>
            </ul>
          </div>

          <div
            class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-all duration-300 group-hover:gap-3"
          >
            {{ category.ctaLabel }}
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
  categories: AcademyCategory[]
}>()
</script>
