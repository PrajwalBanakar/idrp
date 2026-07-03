<template>
  <section
    v-if="images?.length"
    class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 md:p-8"
  >
    <div class="mb-6 flex items-center gap-3">
      <div class="h-8 w-1 rounded-full bg-[var(--color-primary-soft)]0" />
      <div>
        <p
          v-if="eyebrow"
          class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]"
        >
          {{ eyebrow }}
        </p>
        <h2 class="text-2xl font-bold text-gray-900">
          {{ title }}
        </h2>
      </div>
    </div>

    <div class="grid gap-4 sm:grid-cols-2">
      <div
        v-for="(image, index) in images"
        :key="`${image}-${index}`"
        class="group overflow-hidden rounded-2xl bg-slate-100"
      >
        <img
          :src="image"
          :alt="`${altPrefix} ${index + 1}`"
          class="h-64 w-full object-cover transition duration-300 group-hover:scale-[1.03] md:h-72"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Props = {
  images?: string[]
  title?: string
  eyebrow?: string
  altPrefix?: string
}

withDefaults(defineProps<Props>(), {
  images: () => [],
  title: 'Event Gallery',
  eyebrow: 'Moments',
  altPrefix: 'Event gallery image',
})
</script>
