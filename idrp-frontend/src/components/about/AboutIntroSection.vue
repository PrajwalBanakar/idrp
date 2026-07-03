<script setup lang="ts">
type Props = {
  eyebrow?: string
  title: string
  paragraphs: string[]
}

const props = withDefaults(defineProps<Props>(), {
  eyebrow: 'Our Story',
})
</script>

<template>
  <section class="bg-white px-6 py-16 md:px-12 lg:px-16 lg:py-20">
    <div class="mx-auto max-w-5xl">
      <div class="text-center">
        <span class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
          {{ props.eyebrow }}
        </span>

        <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          {{ props.title }}
        </h2>
      </div>

      <div
        class="mx-auto mt-8 max-w-3xl space-y-5 text-center text-base leading-8 text-slate-600 sm:text-lg"
      >
        <p v-for="paragraph in props.paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>
