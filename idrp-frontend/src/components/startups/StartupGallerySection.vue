<template>
  <section class="bg-slate-50 px-6 py-20 md:px-12 lg:px-16 lg:py-24">
    <div class="mx-auto max-w-6xl">
      <div class="max-w-3xl">
        <span class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
          {{ eyebrow }}
        </span>

        <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {{ title }}
        </h2>

        <p class="mt-5 text-base leading-7 text-slate-600">
          {{ description }}
        </p>
      </div>

      <div
        class="mt-10 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <article
          v-for="item in items"
          :key="item.id"
          class="group min-w-[260px] max-w-[260px] shrink-0 snap-start overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-w-[300px] sm:max-w-[300px]"
        >
          <div class="relative overflow-hidden bg-slate-100">
            <img
              :src="item.imageSrc"
              :alt="item.imageAlt"
              class="h-56 w-full object-contain bg-white p-6 transition duration-500 group-hover:scale-[1.03] sm:h-64"
              loading="lazy"
            />
            <div
              class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-900/8 to-transparent"
            />
          </div>

          <div class="p-5">
            <div class="flex items-center justify-between gap-3">
              <h3 class="text-lg font-semibold tracking-tight text-slate-900">
                {{ item.name }}
              </h3>
              <span
                class="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600"
              >
                {{ item.categoryLabel }}
              </span>
            </div>

            <p
              class="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-[var(--color-primary)]"
            >
              {{ item.sector }}
            </p>

            <p v-if="item.caption" class="mt-3 text-sm leading-6 text-slate-600">
              {{ item.caption }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type StartupGalleryItem = {
  id: string
  name: string
  sector: string
  categoryLabel: string
  imageSrc: string
  imageAlt: string
  caption?: string
}

withDefaults(
  defineProps<{
    eyebrow?: string
    title?: string
    description?: string
    items?: StartupGalleryItem[]
  }>(),
  {
    eyebrow: 'Startup Showcase',
    title: 'Ideas Taking Shape Across the Ecosystem',
    description:
      'A quick visual glimpse of startups being nurtured through pre-incubation, incubation, mentoring, and ecosystem support at IDRP.',
    items: () => [],
  },
)
</script>
