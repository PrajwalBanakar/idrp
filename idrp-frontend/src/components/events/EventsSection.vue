<template>
  <section :class="sectionClass">
    <div class="mx-auto max-w-7xl">
      <div class="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div class="max-w-3xl">
          <span
            class="text-sm font-semibold uppercase tracking-[0.18em]"
            :class="variant === 'upcoming' ? 'text-[var(--color-primary)]' : 'text-slate-500'"
          >
            {{ eyebrow }}
          </span>

          <h2 class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {{ title }}
          </h2>

          <p class="mt-3 text-base leading-7 text-slate-600">
            {{ descriptionText }}
          </p>
        </div>

        <span
          class="w-fit rounded-full px-4 py-2 text-xs font-bold"
          :class="
            variant === 'upcoming'
              ? 'bg-[var(--color-primary-soft)] text-[var(--color-primary)]'
              : 'bg-slate-100 text-slate-600'
          "
        >
          {{ items.length }} Events
        </span>
      </div>

      <div v-if="visibleItems.length" class="flex flex-col gap-8">
        <EventCard
          v-for="event in visibleItems"
          :key="event.id"
          :event="event"
          :variant="variant"
        />
      </div>

      <div
        v-else
        class="rounded-3xl border border-dashed border-slate-200 bg-white py-16 text-center"
      >
        <p class="mb-4 text-4xl">{{ emptyIcon }}</p>
        <p class="font-semibold text-slate-500">{{ emptyText }}</p>
      </div>

      <div v-if="hasMore" class="mt-10 flex flex-col items-center gap-3">
        <p class="text-sm text-slate-500">
          Showing {{ visibleItems.length }} of {{ items.length }}
        </p>

        <button
          type="button"
          class="rounded-xl border px-6 py-3 text-sm font-semibold transition"
          :class="
            variant === 'upcoming'
              ? 'border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]'
              : 'border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-100'
          "
          @click="emit('load-more')"
        >
          Load More
        </button>

        <div ref="sentinelRef" class="h-1 w-full" aria-hidden="true" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watchEffect } from 'vue'
import EventCard from '@/components/events/EventCard.vue'
import type { EventItem } from '@/types/events'

type EventsSectionVariant = 'upcoming' | 'past'

const props = defineProps<{
  eyebrow: string
  title: string
  items: EventItem[]
  visibleItems: EventItem[]
  hasMore: boolean
  variant: EventsSectionVariant
}>()

const emit = defineEmits<{
  (e: 'load-more'): void
}>()

const sectionClass = computed(() =>
  props.variant === 'upcoming'
    ? 'bg-white px-6 py-16 md:px-12 lg:px-16 lg:py-20'
    : 'bg-slate-50 px-6 py-16 md:px-12 lg:px-16 lg:py-20',
)

const descriptionText = computed(() =>
  props.variant === 'upcoming'
    ? 'Join upcoming sessions, workshops, showcases, and startup-focused events hosted by IDRP.'
    : 'Explore previously hosted events, ecosystem engagements, and milestone programs from IDRP.',
)

const emptyIcon = computed(() => (props.variant === 'upcoming' ? '📅' : '🗂️'))

const emptyText = computed(() =>
  props.variant === 'upcoming'
    ? 'No upcoming events right now. Check back soon.'
    : 'No past events available yet.',
)

const sentinelRef = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) emit('load-more')
    },
    { rootMargin: '200px' },
  )

  watchEffect(() => {
    observer?.disconnect()
    if (sentinelRef.value) observer?.observe(sentinelRef.value)
  })
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>
