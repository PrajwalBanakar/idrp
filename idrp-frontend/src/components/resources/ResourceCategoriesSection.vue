<template>
  <section class="bg-gray-50 px-6 py-8 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div class="mb-16 text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
          Collections
        </span>
        <h2 class="mt-2 text-4xl font-bold text-gray-900">Explore More Resources</h2>
      </div>

      <div v-for="category in categories" :key="category.key" class="mb-16 last:mb-4">
        <div class="mb-6 flex items-start gap-4">
          <div
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg text-white"
            :class="category.iconBgClass"
          >
            {{ category.icon }}
          </div>

          <div>
            <h3 class="text-2xl font-bold text-gray-900">{{ category.title }}</h3>
            <p class="mt-0.5 text-sm font-medium" :class="category.textClass">
              {{ category.subtitle }}
            </p>
            <p class="mt-2 max-w-2xl text-sm leading-relaxed text-gray-500">
              {{ category.description }}
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="item in category.items"
            :key="item.title"
            class="rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            :class="category.hoverBorderClass"
          >
            <div class="mb-3 flex items-center justify-between gap-3">
              <span
                class="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                :class="category.badgeClass"
              >
                {{ item.type }}
              </span>
              <span class="text-xs font-medium text-gray-400">
                {{ item.meta }}
              </span>
            </div>

            <h4 class="text-lg font-bold leading-snug text-gray-900">
              {{ item.title }}
            </h4>

            <p class="mt-2 text-sm leading-relaxed text-gray-600">
              {{ item.description }}
            </p>

            <div class="mt-4 flex items-center justify-between">
              <span class="text-xs font-medium text-gray-400">
                {{ item.tag }}
              </span>
              <button
                type="button"
                class="text-sm font-semibold text-[var(--color-primary)] transition-colors duration-200 hover:text-teal-800"
              >
                View Resource →
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ResourceCategory } from '@/types/resources'

defineProps<{
  categories: ResourceCategory[]
}>()
</script>
