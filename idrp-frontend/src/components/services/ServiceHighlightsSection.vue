<template>
  <section v-if="items.length" class="bg-gray-50 px-6 py-24 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div class="mb-14 text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
          Service Highlights
        </span>

        <h2 class="mt-2 text-4xl font-bold text-gray-900">What This Service Covers</h2>

        <p class="mx-auto mt-3 max-w-2xl text-gray-500">
          Explore the core focus areas, support capabilities, and value delivered through this
          service.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="item in items"
          :key="item.id"
          :class="cardClasses(item.tone)"
          class="group flex h-full flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div
            v-if="item.image || item.icon"
            :class="mediaClasses(item.tone)"
            class="relative flex h-44 items-center justify-center overflow-hidden"
          >
            <img
              v-if="item.image && !hiddenImages[item.id]"
              :src="item.image"
              :alt="item.title"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              @error="hideImage(item.id)"
            />

            <div
              v-if="item.icon"
              class="absolute inset-0 flex items-center justify-center"
              :class="{ 'bg-white/20 backdrop-blur-[1px]': item.image && !hiddenImages[item.id] }"
            >
              <span class="text-4xl">{{ item.icon }}</span>
            </div>
          </div>

          <div class="flex flex-1 flex-col p-6 text-center">
            <h3 class="text-lg font-bold leading-snug text-gray-900">
              {{ item.title }}
            </h3>

            <p v-if="item.description" class="mt-3 text-sm leading-relaxed text-gray-600">
              {{ item.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { ServiceHighlight } from '@/types/service'

defineProps<{
  items: ServiceHighlight[]
}>()

const hiddenImages = reactive<Record<string, boolean>>({})

function hideImage(id: string) {
  hiddenImages[id] = true
}

function cardClasses(tone?: ServiceHighlight['tone']) {
  switch (tone) {
    case 'teal':
      return 'border-teal-100 hover:border-[var(--color-primary)]/20'
    case 'cyan':
      return 'border-cyan-100 hover:border-cyan-200'
    case 'amber':
      return 'border-amber-100 hover:border-amber-200'
    case 'indigo':
      return 'border-indigo-100 hover:border-indigo-200'
    case 'slate':
    default:
      return 'border-gray-100 hover:border-slate-200'
  }
}

function mediaClasses(tone?: ServiceHighlight['tone']) {
  switch (tone) {
    case 'teal':
      return 'bg-[var(--color-primary-soft)]'
    case 'cyan':
      return 'bg-cyan-50'
    case 'amber':
      return 'bg-amber-50'
    case 'indigo':
      return 'bg-indigo-50'
    case 'slate':
    default:
      return 'bg-slate-50'
  }
}
</script>
