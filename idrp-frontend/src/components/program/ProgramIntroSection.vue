<script setup lang="ts">
import { ref } from 'vue'

type DetailItem = {
  label: string
  value: string
}

type Props = {
  eyebrow?: string
  title: string
  paragraphs: string[]
  image?: string
  imageAlt?: string
  details?: DetailItem[]
}

const props = withDefaults(defineProps<Props>(), {
  eyebrow: 'Overview',
  image: '',
  imageAlt: 'Program intro image',
  details: () => [],
})

const showImage = ref(true)
</script>

<template>
  <section class="bg-white px-6 py-24 md:px-16">
    <div class="mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row">
      <div class="lg:w-1/2">
        <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
          {{ props.eyebrow }}
        </span>

        <h2 class="mt-3 mb-6 text-4xl font-bold leading-tight text-gray-900">
          {{ props.title }}
        </h2>

        <div class="space-y-4 leading-relaxed text-gray-600">
          <p v-for="paragraph in props.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>

        <div
          v-if="props.details.length"
          class="mt-8 rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-sm"
        >
          <div class="grid gap-4 md:grid-cols-2">
            <div v-for="detail in props.details" :key="detail.label">
              <p class="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                {{ detail.label }}
              </p>
              <p class="mt-1 text-sm font-medium leading-6 text-slate-800">
                {{ detail.value }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:w-1/2">
        <div
          class="relative flex h-[420px] items-center justify-center overflow-hidden rounded-3xl bg-slate-50 shadow-2xl"
          :class="{
            'bg-gradient-to-br from-teal-100 via-cyan-50 to-white': !showImage,
          }"
        >
          <img
            v-if="showImage && props.image"
            :src="props.image"
            :alt="props.imageAlt"
            class="h-full w-full object-contain"
            @error="showImage = false"
          />
        </div>
      </div>
    </div>
  </section>
</template>
