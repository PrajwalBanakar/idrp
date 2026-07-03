<template>
  <section class="relative h-[42vh] min-h-[300px] overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-teal-950 via-teal-800 to-cyan-700" />

    <div class="relative z-10 mx-auto flex h-full max-w-4xl flex-col justify-center px-6 md:px-16">
      <span class="text-sm font-semibold uppercase tracking-widest text-teal-200">
        {{ eyebrow }}
      </span>

      <h1 class="mt-3 text-4xl font-extrabold text-white md:text-5xl">
        {{ title }}
      </h1>

      <p class="mt-4 max-w-2xl text-base leading-relaxed text-teal-100">
        {{ description }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description: string
}>()
</script>
