<template>
  <section class="relative overflow-hidden bg-slate-950 text-white min-h-[360px]">
    <!-- Background -->
    <div class="absolute inset-0">
      <div
        class="absolute inset-0 bg-[linear-gradient(135deg,#031527_0%,#073863_45%,#0a4c85_100%)]"
      />
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(10,76,133,0.30),_transparent_32%)]"
      />
      <div class="absolute inset-0 bg-black/10" />
    </div>

    <!-- Bottom fade -->
    <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

    <!-- Content -->
    <div
      class="relative z-10 mx-auto flex min-h-[52vh] max-w-7xl items-end px-6 py-16 sm:px-8 md:px-10 lg:px-16"
    >
      <div class="max-w-3xl">
        <!-- Eyebrow -->
        <p
          v-if="hero.eyebrow"
          class="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-100 backdrop-blur-sm sm:text-sm"
        >
          {{ hero.eyebrow }}
        </p>

        <!-- Title -->
        <h1
          class="mt-5 mb-4 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {{ hero.title }}
        </h1>

        <!-- Description -->
        <p
          v-if="hero.description"
          class="max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8"
        >
          {{ hero.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ServiceHero } from '@/types/service'

defineProps<{
  hero: ServiceHero
}>()
</script>
