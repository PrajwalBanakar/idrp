<script setup lang="ts">
import type { AboutSectionIntro, TimelineItem } from '@/types/about'

type Props = {
  section: AboutSectionIntro
  timeline: TimelineItem[]
}

defineProps<Props>()
</script>

<template>
  <section class="bg-white px-6 py-24 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto mb-16 max-w-3xl text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
          {{ section.eyebrow }}
        </span>

        <h2 class="mt-3 text-4xl font-bold text-gray-900">
          {{ section.title }}
        </h2>

        <p class="mt-4 leading-relaxed text-gray-600">
          {{ section.description }}
        </p>
      </div>

      <div class="relative mx-auto max-w-5xl">
        <div
          class="absolute left-4 top-0 h-full w-0.5 bg-teal-100 md:left-1/2 md:-translate-x-1/2"
        />

        <div class="space-y-10 md:space-y-12">
          <article
            v-for="(item, index) in timeline"
            :key="`${item.year}-${item.title}`"
            class="relative md:grid md:grid-cols-2 md:gap-10"
          >
            <div
              class="absolute left-4 top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-[var(--color-primary-soft)]0 shadow md:left-1/2"
            />

            <div
              class="pl-12 md:pl-0"
              :class="index % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12'"
            >
              <div
                class="rounded-3xl border border-gray-100 p-8 shadow-sm transition-transform duration-200 hover:-translate-y-1"
                :class="index % 2 === 0 ? 'bg-gray-50' : 'bg-white'"
              >
                <p
                  class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]"
                >
                  {{ item.year }}
                </p>

                <h3 class="mt-3 text-2xl font-bold text-gray-900">
                  {{ item.title }}
                </h3>

                <p class="mt-4 leading-relaxed text-gray-600">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
