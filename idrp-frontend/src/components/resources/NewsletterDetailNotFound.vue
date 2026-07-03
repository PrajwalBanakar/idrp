<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50 px-6">
    <div class="max-w-md text-center">
      <h1 class="text-3xl font-bold text-slate-900">Newsletter not found</h1>
      <p class="mt-3 text-slate-600">
        The newsletter you are looking for does not exist or has not been published yet.
      </p>
      <RouterLink
        to="/resources"
        class="mt-6 inline-flex rounded-xl bg-teal-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-primary)]"
      >
        Back to Resources
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
