<script setup lang="ts">
type Props = {
  eyebrow?: string
  title: string
}

withDefaults(defineProps<Props>(), {
  eyebrow: 'Government Initiatives',
})
</script>

<template>
  <section class="relative overflow-hidden bg-slate-950 text-white">
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
    <div class="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 md:px-10 md:py-16 lg:px-16">
      <div class="max-w-4xl">
        <!-- Eyebrow -->
        <p
          class="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-100 backdrop-blur-sm sm:text-sm"
        >
          {{ eyebrow }}
        </p>

        <!-- Title -->
        <h1
          class="text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {{ title }}
        </h1>
      </div>
    </div>
  </section>
</template>
