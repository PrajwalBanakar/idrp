<script setup lang="ts">
type Props = {
  eyebrow?: string
  title: string
  description: string
}

withDefaults(defineProps<Props>(), {
  eyebrow: 'The People Behind IDRP',
})
</script>

<template>
  <section class="bg-white px-6 py-14 md:px-12 lg:px-16 lg:py-16">
    <div class="mx-auto max-w-4xl text-center">
      <span class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
        {{ eyebrow }}
      </span>

      <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {{ title }}
      </h2>

      <p class="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
        {{ description }}
      </p>

      <div class="mx-auto mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />
    </div>
  </section>
</template>
