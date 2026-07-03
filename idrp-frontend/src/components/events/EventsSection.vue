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

      <div v-if="items.length" class="flex flex-col gap-8">
        <EventCard
          v-for="event in paginatedItems"
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

      <div v-if="totalPages > 1" class="mt-10 flex flex-wrap justify-center gap-2">
        <button
          type="button"
          :disabled="currentPage === 1"
          class="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition disabled:cursor-not-allowed disabled:opacity-30"
          :class="
            variant === 'upcoming'
              ? 'hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
              : 'hover:border-slate-400 hover:text-slate-800'
          "
          @click="emit('update:currentPage', currentPage - 1)"
        >
          Previous
        </button>

        <button
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          type="button"
          class="h-10 w-10 rounded-xl border text-sm font-bold transition"
          :class="pageButtonClass(pageNumber)"
          @click="emit('update:currentPage', pageNumber)"
        >
          {{ pageNumber }}
        </button>

        <button
          type="button"
          :disabled="currentPage === totalPages"
          class="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition disabled:cursor-not-allowed disabled:opacity-30"
          :class="
            variant === 'upcoming'
              ? 'hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
              : 'hover:border-slate-400 hover:text-slate-800'
          "
          @click="emit('update:currentPage', currentPage + 1)"
        >
          Next
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import EventCard from '@/components/events/EventCard.vue'
import type { EventItem } from '@/types/events'

type EventsSectionVariant = 'upcoming' | 'past'

const props = defineProps<{
  eyebrow: string
  title: string
  items: EventItem[]
  paginatedItems: EventItem[]
  currentPage: number
  totalPages: number
  variant: EventsSectionVariant
}>()

const emit = defineEmits<{
  (e: 'update:currentPage', value: number): void
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

function pageButtonClass(pageNumber: number) {
  if (props.variant === 'upcoming') {
    return props.currentPage === pageNumber
      ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
      : 'border-slate-200 text-slate-600 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
  }

  return props.currentPage === pageNumber
    ? 'border-slate-700 bg-slate-700 text-white'
    : 'border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-800'
}
</script>
