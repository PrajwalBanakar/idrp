<template>
  <div class="rounded-2xl border border-gray-100 bg-white p-10 text-center shadow-sm">
    <div class="mb-4 text-4xl">✅</div>

    <h2 class="text-2xl font-bold text-gray-900">Registration Successful!</h2>

    <p class="mt-3 text-gray-500">
      Thank you for registering for
      <span class="font-semibold text-gray-700">{{ eventTitle }}</span
      >. We’ll share further details with you soon.
    </p>

    <RouterLink
      to="/events"
      class="mt-6 inline-block rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-800"
    >
      Back to Events
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  eventTitle: string
}>()
</script>
