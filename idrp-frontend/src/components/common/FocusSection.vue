<script setup lang="ts">
type FocusArea = {
  title: string
  description: string
  points: string[]
}

defineProps<{
  areas: FocusArea[]
}>()
</script>

<template>
  <section class="bg-white px-6 py-24 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div class="mb-16 text-center">
        <h2 class="text-4xl font-bold text-gray-900">What the Initiative Supports</h2>
      </div>

      <div class="grid gap-8 md:grid-cols-2">
        <article
          v-for="area in areas"
          :key="area.title"
          class="rounded-3xl border border-gray-100 p-8 shadow-sm"
        >
          <h3 class="text-2xl font-bold text-gray-900">
            {{ area.title }}
          </h3>

          <p class="mt-4 text-gray-600">
            {{ area.description }}
          </p>

          <ul class="mt-6 space-y-2">
            <li v-for="p in area.points" :key="p">✓ {{ p }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
