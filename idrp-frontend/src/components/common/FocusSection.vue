<script setup lang="ts">
import SectionHeading from '@/components/common/SectionHeading.vue'

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
  <section class="bg-white px-6 py-16 md:px-16 md:py-20 lg:py-24">
    <div class="mx-auto max-w-6xl">
      <SectionHeading title="What the Initiative Supports" class="mb-16" />

      <div class="grid gap-8 md:grid-cols-2">
        <article
          v-for="area in areas"
          :key="area.title"
          class="rounded-3xl border border-slate-200 p-8 shadow-sm"
        >
          <h3 class="text-2xl font-bold text-slate-900">
            {{ area.title }}
          </h3>

          <p class="mt-4 text-slate-600">
            {{ area.description }}
          </p>

          <ul class="mt-6 space-y-2.5">
            <li v-for="p in area.points" :key="p" class="flex items-start gap-2.5 text-slate-700">
              <svg
                class="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
              </svg>
              <span>{{ p }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
