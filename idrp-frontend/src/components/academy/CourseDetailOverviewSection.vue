<template>
  <section class="bg-white px-6 py-24 md:px-16">
    <div class="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
          Overview
        </span>
        <h2 class="mt-2 text-4xl font-bold text-gray-900">
          {{ overviewTitle }}
        </h2>

        <div class="mt-6 space-y-4 text-gray-600">
          <p v-for="paragraph in overviewParagraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
      </div>

      <div class="rounded-3xl bg-gray-50 p-8 shadow-sm">
        <h3 class="text-2xl font-bold text-gray-900">
          {{ snapshotTitle }}
        </h3>

        <div class="mt-6 space-y-4 text-sm text-gray-700">
          <p v-for="item in snapshotItems" :key="item.label">
            <strong class="text-gray-900">{{ item.label }}:</strong>
            {{ item.value }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type SnapshotItem = {
  label: string
  value: string
}

defineProps<{
  overviewTitle: string
  overviewParagraphs: string[]
  snapshotTitle: string
  snapshotItems: SnapshotItem[]
}>()
</script>
