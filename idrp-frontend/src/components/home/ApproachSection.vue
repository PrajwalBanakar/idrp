<template>
  <section class="bg-white px-6 py-20 md:px-12 lg:px-16 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
        <span class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
          How We Work
        </span>
        <h2
          class="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl"
        >
          Our Approach
        </h2>
        <p
          class="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg"
        >
          A founder-focused and ecosystem-driven approach designed to support innovation with the
          right guidance, collaboration, and momentum.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <article
          v-for="approach in approaches"
          :key="approach.title"
          class="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/20 hover:bg-white hover:shadow-lg sm:p-7"
        >
          <div
            class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-primary-soft)] text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white"
          >
            <span v-html="approach.icon" class="h-6 w-6" />
          </div>

          <h3
            class="text-xl font-semibold text-[var(--color-text-primary)] transition-colors duration-300 group-hover:text-[var(--color-primary)]"
          >
            {{ approach.title }}
          </h3>

          <p class="mt-3 text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
            {{ approach.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IconCard } from '@/data/home'

defineProps<{
  approaches: IconCard[]
}>()
</script>
