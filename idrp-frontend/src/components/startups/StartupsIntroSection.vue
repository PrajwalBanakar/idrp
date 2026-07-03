<template>
  <section class="bg-white px-6 py-20 md:px-12 lg:px-16 lg:py-24">
    <div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
      <div>
        <span class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
          {{ eyebrow }}
        </span>

        <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {{ title }}
        </h2>

        <div class="mt-6 space-y-4 text-base leading-7 text-slate-600">
          <p v-for="paragraph in paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>

        <!-- <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 shadow-sm"
          >
            <p class="text-2xl font-bold tracking-tight text-[var(--color-primary)] sm:text-3xl">
              {{ stat.value }}
            </p>
            <p class="mt-2 text-sm leading-6 text-slate-500">
              {{ stat.label }}
            </p>
          </div>
        </div> -->
      </div>

      <div>
        <div
          class="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl"
          :class="
            !showImage ? 'bg-gradient-to-br from-teal-100 via-cyan-50 to-white' : 'bg-slate-100'
          "
        >
          <img
            v-if="showImage"
            :src="imageSrc"
            :alt="imageAlt"
            class="h-[320px] w-full object-cover sm:h-[380px] lg:h-[440px]"
            @error="handleImageError"
          />

          <div v-else class="flex h-[320px] items-center justify-center sm:h-[380px] lg:h-[440px]">
            <div class="text-center">
              <div
                class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/80 text-3xl shadow-sm"
              >
                🚀
              </div>
              <p class="mt-4 text-sm font-medium text-slate-600">Startup ecosystem image</p>
            </div>
          </div>

          <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/20" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { StartupStat } from '@/types/startups'

withDefaults(
  defineProps<{
    eyebrow?: string
    title?: string
    paragraphs?: string[]
    stats: StartupStat[]
    imageSrc?: string
    imageAlt?: string
  }>(),
  {
    eyebrow: 'Our Community',
    title: 'Meet the Innovators Driving Our Ecosystem',
    paragraphs: () => [
      'At IDRP, we support startups through incubation, mentoring, funding access, and ecosystem connections. This portfolio gives a quick but useful view of each venture.',
      'Open any card to see the startup brief, founders, LinkedIn profiles, website, investor one-pager, and contact details.',
    ],
    imageSrc: '/vision-innovation.jfif',
    imageAlt: 'IDRP Startups',
  },
)

const showImage = ref(true)

function handleImageError() {
  showImage.value = false
}
</script>
