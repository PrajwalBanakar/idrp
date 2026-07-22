<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    description?: string
    align?: 'center' | 'left'
    titleTag?: 'h1' | 'h2' | 'h3'
  }>(),
  {
    eyebrow: '',
    description: '',
    align: 'center',
    titleTag: 'h2',
  },
)
</script>

<template>
  <div :class="align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left'">
    <span
      v-if="eyebrow"
      class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]"
    >
      {{ eyebrow }}
    </span>

    <component
      :is="titleTag"
      class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
    >
      {{ title }}
    </component>

    <p
      v-if="description"
      :class="[
        'mt-4 text-base leading-7 text-slate-600 sm:text-lg',
        align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl',
      ]"
    >
      {{ description }}
    </p>
  </div>
</template>
