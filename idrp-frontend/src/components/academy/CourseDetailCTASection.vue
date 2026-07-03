<template>
  <section class="bg-gradient-to-r from-teal-700 to-cyan-600 px-6 py-16 md:px-16">
    <div class="mx-auto max-w-4xl text-center">
      <h3 class="text-3xl font-bold text-white">
        {{ title }}
      </h3>

      <p class="mt-3 text-teal-100">
        {{ description }}
      </p>

      <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
        <RouterLink
          :to="applyRoute"
          class="rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 shadow-lg transition hover:bg-[var(--color-primary-soft)]"
        >
          Apply Now
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  title: string
  description: string
  applyRoute: string
}>()
</script>
