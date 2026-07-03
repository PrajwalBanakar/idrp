<script setup lang="ts">
import type { ProgramMeta } from '@/types/application'

defineProps<{ program: ProgramMeta }>()
defineEmits(['back'])
</script>

<template>
  <section
    class="relative overflow-hidden bg-slate-950 px-6 py-20 text-white md:px-12 lg:px-16 lg:py-24"
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

    <div class="relative z-10 mx-auto max-w-6xl">
      <!-- 🔥 Improved Back Button -->
      <button
        @click="$emit('back')"
        class="group mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-teal-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
      >
        <span class="transition-transform duration-300 group-hover:-translate-x-1"> ← </span>
        Back to {{ program.backLabel }}
      </button>

      <!-- Title -->
      <h1 class="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
        {{ program.title }}
      </h1>

      <!-- Description -->
      <p class="mt-5 max-w-2xl text-base leading-7 text-slate-200 md:text-lg md:leading-8">
        {{ program.description }}
      </p>

      <!-- Meta -->
      <p class="mt-4 text-sm font-medium text-teal-200">
        {{ program.meta }}
      </p>
    </div>
  </section>
</template>
