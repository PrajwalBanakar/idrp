<template>
  <section class="px-6 py-24 md:px-16">
    <div class="mx-auto max-w-4xl text-center">
      <span
        v-if="intro.eyebrow"
        class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]"
      >
        {{ intro.eyebrow }}
      </span>

      <h2 class="mt-3 mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
        {{ intro.title }}
      </h2>

      <div class="space-y-4 text-base leading-relaxed text-gray-600 md:text-lg">
        <p v-for="paragraph in intro.paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>

      <div class="mx-auto mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ServiceIntro } from '@/types/service'

defineProps<{
  intro: ServiceIntro
}>()
</script>
