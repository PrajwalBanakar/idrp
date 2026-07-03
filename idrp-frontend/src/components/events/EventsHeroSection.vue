<template>
  <section class="relative overflow-hidden bg-slate-950 text-white min-h-[300px]">
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
    <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />

    <!-- Content -->
    <div
      class="relative z-10 mx-auto flex min-h-[45vh] max-w-7xl items-center px-6 py-12 sm:px-8 md:px-10 lg:px-16"
    >
      <div class="max-w-2xl">
        <!-- Eyebrow -->
        <p
          class="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-100 backdrop-blur-sm sm:text-sm"
        >
          {{ hero.eyebrow }}
        </p>

        <!-- Title -->
        <h1
          class="text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {{ hero.title }}
        </h1>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  hero: {
    eyebrow: string
    title: string
    image?: string
    imageAlt?: string
  }
}>()
</script>
