<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

type Props = {
  eyebrow?: string
  title: string
  description: string
  primaryActionLabel: string
  primaryActionTo: RouteLocationRaw
  secondaryActionLabel?: string
  secondaryActionTo?: RouteLocationRaw
}

withDefaults(defineProps<Props>(), {
  eyebrow: 'Join the Ecosystem',
  secondaryActionLabel: '',
  secondaryActionTo: undefined,
})
</script>

<template>
  <section class="bg-white px-6 pb-16 md:px-12 lg:px-16 lg:pb-20">
    <div class="mx-auto max-w-7xl">
      <div
        class="relative overflow-hidden rounded-[2rem] bg-slate-950 px-8 py-14 text-white shadow-2xl md:px-12 md:py-16 lg:px-16 lg:py-20"
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

        <div class="relative z-10 mx-auto max-w-4xl text-center">
          <span
            class="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-100 backdrop-blur-sm sm:text-xs"
          >
            {{ eyebrow }}
          </span>

          <h2 class="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {{ title }}
          </h2>

          <p
            class="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8"
          >
            {{ description }}
          </p>

          <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <RouterLink
              :to="primaryActionTo"
              class="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[var(--color-primary)] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-primary-dark)] sm:text-base"
            >
              {{ primaryActionLabel }}
            </RouterLink>

            <RouterLink
              v-if="secondaryActionLabel && secondaryActionTo"
              :to="secondaryActionTo"
              class="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-[rgba(255,255,255,0.14)] sm:text-base"
            >
              {{ secondaryActionLabel }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
