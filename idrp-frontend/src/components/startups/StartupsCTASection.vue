<template>
  <section class="bg-white px-6 pb-24 md:px-12 lg:px-16">
    <div class="mx-auto max-w-6xl">
      <div
        class="relative overflow-hidden rounded-[2rem] bg-slate-950 px-8 py-12 text-white shadow-2xl md:px-12 md:py-14"
      >
        <div class="absolute inset-0">
          <div
            class="absolute inset-0 bg-[linear-gradient(135deg,#031527_0%,#073863_45%,#0a4c85_100%)]"
          />
          <div
            class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.10),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(10,76,133,0.20),_transparent_28%)]"
          />
        </div>

        <div class="pointer-events-none absolute inset-0">
          <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
          <div class="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
        </div>

        <div
          class="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 text-center md:flex-row md:items-center md:text-left"
        >
          <div class="max-w-2xl">
            <span
              v-if="eyebrow"
              class="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-100 backdrop-blur-sm sm:text-xs"
            >
              {{ eyebrow }}
            </span>

            <h3 class="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
              {{ title }}
            </h3>

            <p class="mt-4 text-sm leading-7 text-slate-200 md:text-base">
              {{ description }}
            </p>
          </div>

          <div class="flex w-full shrink-0 flex-col gap-4 sm:w-auto sm:flex-row">
            <RouterLink
              :to="primaryTo"
              class="inline-flex min-w-[200px] items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-primary-dark)]"
            >
              {{ primaryLabel }}
            </RouterLink>

            <RouterLink
              :to="secondaryTo"
              class="inline-flex min-w-[200px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-[rgba(255,255,255,0.14)]"
            >
              {{ secondaryLabel }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

withDefaults(
  defineProps<{
    eyebrow?: string
    title?: string
    description?: string
    primaryLabel?: string
    primaryTo?: string
    secondaryLabel?: string
    secondaryTo?: string
  }>(),
  {
    eyebrow: 'Join the Ecosystem',
    title: 'Ready to join this community?',
    description: 'Apply to one of our programs and become part of the IDRP story.',
    primaryLabel: 'Apply Now',
    primaryTo: '/apply/incubation',
    secondaryLabel: 'Contact Us',
    secondaryTo: '/contact',
  },
)
</script>
