<script setup lang="ts">
import type { AboutSectionIntro, MissionVisionItem, Pillar } from '@/types/about'

defineProps<{
  section: AboutSectionIntro
  missionVision: MissionVisionItem[]
  pillars: Pillar[]
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

      <div class="grid gap-6 md:grid-cols-2">
        <article
          v-for="item in missionVision"
          :key="item.title"
          class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div
            class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary-soft)] text-2xl"
          >
            {{ item.icon }}
          </div>

          <h3 class="text-2xl font-bold tracking-tight text-slate-900">
            {{ item.title }}
          </h3>

          <p class="mt-4 text-base leading-8 text-slate-600">
            {{ item.description }}
          </p>
        </article>
      </div>

      <div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="pillar in pillars"
          :key="pillar.title"
          class="rounded-3xl border border-teal-100 bg-white p-6 shadow-sm"
        >
          <div class="mb-4 h-1.5 w-14 rounded-full bg-[var(--color-primary-soft)]0" />
          <h4 class="text-lg font-bold tracking-tight text-slate-900">
            {{ pillar.title }}
          </h4>
          <p class="mt-3 text-sm leading-7 text-slate-600">
            {{ pillar.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
