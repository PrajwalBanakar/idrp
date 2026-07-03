<script setup lang="ts">
import { ref } from 'vue'
import type { ProgramValueItem } from '@/types/program'

type Props = {
  eyebrow?: string
  title: string
  items: ProgramValueItem[]
  image?: string
  imageAlt?: string
}

const props = withDefaults(defineProps<Props>(), {
  eyebrow: 'Why This Program',
  image: '',
  imageAlt: 'Program value image',
})

const showImage = ref(true)
</script>

<template>
  <section class="bg-slate-50 px-6 py-20 md:px-12 lg:px-16 lg:py-24">
    <div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
      <div>
        <span class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
          {{ props.eyebrow }}
        </span>

        <h2 class="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
          {{ props.title }}
        </h2>

        <div class="mt-8 space-y-5">
          <article
            v-for="item in props.items"
            :key="item.title"
            class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div class="mb-4 h-1.5 w-14 rounded-full bg-[var(--color-primary-soft)]0" />

            <h3 class="text-lg font-semibold text-slate-900">
              {{ item.title }}
            </h3>

            <p class="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              {{ item.description }}
            </p>
          </article>
        </div>
      </div>

      <div>
        <div
          class="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl"
          :class="{
            'bg-gradient-to-br from-teal-100 via-cyan-50 to-white': !showImage,
          }"
        >
          <div class="flex h-[420px] items-center justify-center lg:h-[460px]">
            <img
              v-if="showImage && props.image"
              :src="props.image"
              :alt="props.imageAlt"
              class="h-full w-full object-cover"
              @error="showImage = false"
            />
          </div>

          <div
            class="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/10 to-transparent"
          />
        </div>
      </div>
    </div>
  </section>
</template>
