<template>
  <section class="bg-white px-6 py-24 md:px-16">
    <div class="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
      <div class="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
        <h3 class="text-2xl font-bold text-gray-900">Who This Program Is For</h3>
        <ul class="mt-6 space-y-4">
          <li
            v-for="item in audience"
            :key="item"
            class="flex items-start gap-3 text-sm text-gray-700"
          >
            <span
              class="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal-600 text-xs font-bold text-white"
            >
              ✓
            </span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <div class="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
        <h3 class="text-2xl font-bold text-gray-900">What Participants Can Expect</h3>
        <ul class="mt-6 space-y-4">
          <li
            v-for="item in outcomes"
            :key="item"
            class="flex items-start gap-3 text-sm text-gray-700"
          >
            <span
              class="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-600 text-xs font-bold text-white"
            >
              ✓
            </span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  audience: string[]
  outcomes: string[]
}>()
</script>
