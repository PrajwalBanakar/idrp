<script setup lang="ts">
import type { AboutSectionIntro, Reason } from '@/types/about'

defineProps<{
  section: AboutSectionIntro
  reasons: Reason[]
}>()
</script>

<template>
  <section class="bg-slate-50 px-6 py-16 md:px-12 lg:px-16 lg:py-20">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto mb-12 max-w-3xl text-center">
        <span class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
          {{ section.eyebrow }}
        </span>

        <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {{ section.title }}
        </h2>

        <p class="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
          {{ section.description }}
        </p>
      </div>

      <div class="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="reason in reasons"
          :key="reason.title"
          class="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/20 hover:shadow-md"
        >
          <div
            class="mb-5 h-1.5 w-14 rounded-full bg-[var(--color-primary-soft)]0 transition-all duration-300 group-hover:w-20"
          />
          <h3 class="text-lg font-bold tracking-tight text-slate-900">
            {{ reason.title }}
          </h3>
          <p class="mt-3 text-sm leading-7 text-slate-600">
            {{ reason.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
