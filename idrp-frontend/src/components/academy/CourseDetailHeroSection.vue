<template>
  <section
    class="relative overflow-hidden bg-slate-950 px-6 py-20 text-white md:px-12 lg:px-16 lg:py-24"
  >
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-teal-950 to-cyan-900" />
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(45,212,191,0.18),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(34,211,238,0.12),_transparent_28%)]"
      />
    </div>

    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
      <div class="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
    </div>

    <div class="relative z-10 mx-auto max-w-6xl">
      <div class="max-w-4xl">
        <span
          class="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-100 backdrop-blur-sm sm:text-xs"
        >
          {{ eyebrow }}
        </span>

        <h1 class="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {{ title }}
        </h1>

        <p class="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
          {{ description }}
        </p>

        <div class="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap">
          <RouterLink
            :to="applyRoute"
            class="inline-flex min-w-[200px] items-center justify-center rounded-full bg-teal-600 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-primary)] sm:text-base"
          >
            Apply Now
          </RouterLink>

          <RouterLink
            :to="enquireRoute"
            class="inline-flex min-w-[200px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-600 hover:text-slate-950 sm:text-base"
          >
            Enquire Now
          </RouterLink>

          <a
            v-if="brochureUrl"
            :href="brochureUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex min-w-[200px] items-center justify-center rounded-full border border-teal-300/30 bg-teal-400/10 px-8 py-3.5 text-sm font-semibold text-teal-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-primary-soft)]0 hover:text-slate-950 sm:text-base"
          >
            View Brochure
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  eyebrow: string
  title: string
  description: string
  applyRoute: string
  enquireRoute: string
  brochureUrl?: string
}>()
</script>
