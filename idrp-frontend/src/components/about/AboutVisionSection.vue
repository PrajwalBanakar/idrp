<script setup lang="ts">
import { ref } from 'vue'
import type { AboutSectionIntro, VisionCard } from '@/types/about'

defineProps<{
  section: AboutSectionIntro
  visionCards: VisionCard[]
}>()

const imageVisibility = ref<Record<string, boolean>>({})

function isImageVisible(card: VisionCard) {
  return imageVisibility.value[card.title] ?? true
}

function hideImage(card: VisionCard) {
  imageVisibility.value[card.title] = false
}
</script>

<template>
  <section class="bg-white px-6 py-16 md:px-12 lg:px-16 lg:py-20">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto mb-12 max-w-3xl text-center">
        <span class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
          {{ section.eyebrow }}
        </span>

        <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {{ section.title }}
        </h2>

        <p class="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
          {{ section.description }}
        </p>
      </div>

      <div class="grid items-stretch gap-6 md:grid-cols-3">
        <article
          v-for="card in visionCards"
          :key="card.title"
          class="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="relative h-56 overflow-hidden">
            <img
              v-if="isImageVisible(card) && card.image"
              :src="card.image"
              :alt="card.imageAlt"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              @error="hideImage(card)"
            />

            <div
              v-else
              class="h-full w-full bg-gradient-to-br from-teal-100 via-cyan-50 to-white"
            />

            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-slate-950/10 to-transparent"
            />
          </div>

          <div class="flex flex-1 flex-col p-6">
            <h3 class="text-xl font-bold tracking-tight text-slate-900">
              {{ card.title }}
            </h3>

            <p class="mt-3 text-sm leading-7 text-slate-600">
              {{ card.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
