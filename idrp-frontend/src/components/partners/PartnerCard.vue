<template>
  <component
    :is="partner.websiteUrl ? 'a' : 'article'"
    :href="partner.websiteUrl || undefined"
    :target="partner.websiteUrl ? '_blank' : undefined"
    :rel="partner.websiteUrl ? 'noopener noreferrer' : undefined"
    class="group flex min-h-[132px] flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    :class="[hoverBorderClass, partner.websiteUrl ? 'cursor-pointer' : '']"
  >
    <div
      class="flex h-16 w-full items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-white px-3 shadow-sm"
    >
      <img
        v-if="partner.logo"
        :src="partner.logo"
        :alt="`${partner.name} logo`"
        class="max-h-10 w-auto object-contain"
      />
      <div
        v-else
        class="flex h-full w-full items-center justify-center rounded-lg text-sm font-bold text-white"
        :style="{ background: partner.color }"
      >
        {{ partner.abbr }}
      </div>
    </div>

    <p class="text-center text-sm font-semibold leading-snug text-slate-700">
      {{ partner.name }}
    </p>
  </component>
</template>

<script setup lang="ts">
import type { Partner } from '@/types/partners'

defineProps<{
  partner: Partner
  hoverBorderClass?: string
}>()
</script>
