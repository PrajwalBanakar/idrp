<template>
  <div class="mx-auto mb-12 max-w-3xl text-center">
    <h1 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
      {{ title }}
    </h1>
    <p class="mt-3 text-base leading-7 text-slate-600">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>
