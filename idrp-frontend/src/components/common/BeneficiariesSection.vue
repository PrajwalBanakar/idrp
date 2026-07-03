<script setup lang="ts">
type Group = {
  title: string
  description: string
}

defineProps<{
  groups: Group[]
}>()
</script>

<template>
  <section class="bg-gray-50 px-6 py-24 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div class="mb-16 text-center">
        <h2 class="text-4xl font-bold text-gray-900">Who Can Benefit</h2>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="g in groups"
          :key="g.title"
          class="rounded-3xl border p-6 text-center shadow-sm"
        >
          <h3 class="text-xl font-bold">{{ g.title }}</h3>
          <p class="mt-3 text-sm text-gray-600">{{ g.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
