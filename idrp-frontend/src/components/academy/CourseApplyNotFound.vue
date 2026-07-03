<template>
  <div class="px-6 py-24 md:px-16">
    <div class="mx-auto max-w-3xl rounded-3xl border border-red-100 bg-red-50 p-8 text-center">
      <h1 class="text-2xl font-bold text-red-700">Application page not found</h1>

      <RouterLink
        to="/courses"
        class="mt-6 inline-flex rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-800"
      >
        Back to Courses
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
