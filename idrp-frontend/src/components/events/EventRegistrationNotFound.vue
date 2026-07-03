<template>
  <div class="rounded-2xl border border-gray-100 bg-white p-10 text-center shadow-sm">
    <div class="mb-4 text-4xl">📅</div>

    <h2 class="text-2xl font-bold text-gray-900">Event not found</h2>

    <p class="mt-3 text-gray-500">
      The event you are trying to register for does not exist or may have been removed.
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
</script>
