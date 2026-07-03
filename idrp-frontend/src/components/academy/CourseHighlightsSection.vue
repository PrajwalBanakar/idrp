<template>
  <section class="bg-gray-50 px-6 py-24 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div class="mb-14 text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
          Why This Program
        </span>
        <h2 class="mt-2 text-4xl font-bold text-gray-900">Key Highlights</h2>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="item in highlights"
          :key="item.title"
          class="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="mb-4 text-3xl">{{ item.icon }}</div>
          <h3 class="text-xl font-bold text-gray-900">
            {{ item.title }}
          </h3>
          <p class="mt-3 text-sm leading-relaxed text-gray-600">
            {{ item.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type HighlightItem = {
  icon: string
  title: string
  description: string
}

defineProps<{
  highlights: HighlightItem[]
}>()
</script>
