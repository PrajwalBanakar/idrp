<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  title: string
  description: string
  buttonLabel: string
  buttonTo: string
}>()
</script>

<template>
  <section class="bg-white px-6 pb-24 md:px-16">
    <div class="mx-auto max-w-7xl">
      <div
        class="relative overflow-hidden rounded-[2rem] bg-slate-950 px-8 py-10 text-white shadow-2xl md:px-12 md:py-12"
      >
        <!-- Background -->
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-teal-950 to-cyan-900" />
          <div
            class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(45,212,191,0.18),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(34,211,238,0.12),_transparent_28%)]"
          />
        </div>

        <!-- Glow -->
        <div class="pointer-events-none absolute inset-0">
          <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
          <div class="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
        </div>

        <!-- Content -->
        <div
          class="relative z-10 flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left"
        >
          <!-- Left -->
          <div class="max-w-2xl">
            <h3 class="text-2xl font-bold tracking-tight text-white md:text-3xl">
              {{ title }}
            </h3>

            <p class="mt-3 text-sm leading-relaxed text-slate-200 md:text-base">
              {{ description }}
            </p>
          </div>

          <!-- Right -->
          <RouterLink
            :to="buttonTo"
            class="inline-flex min-w-[200px] items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-primary)]"
          >
            {{ buttonLabel }}
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
