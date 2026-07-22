<template>
  <article
    class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    :class="variant === 'past' ? 'opacity-95' : ''"
  >
    <div class="grid gap-0 lg:grid-cols-[360px_1fr]">
      <div class="bg-slate-100 p-4 sm:p-5">
        <a :href="event.image" target="_blank" rel="noopener noreferrer" class="block w-full">
          <div
            class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md"
            :class="event.imageFit === 'contain' ? '' : 'h-[220px]'"
          >
            <img
              :src="event.image"
              :alt="event.title"
              loading="lazy"
              class="w-full transition duration-500 hover:scale-[1.03]"
              :class="
                event.imageFit === 'contain'
                  ? 'h-auto object-contain bg-white'
                  : 'h-full object-cover object-center'
              "
            />
          </div>
        </a>
      </div>

      <div class="flex flex-col justify-between p-6 sm:p-8">
        <div>
          <div class="mb-5 flex items-center gap-3">
            <span
              class="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
              :class="
                variant === 'upcoming'
                  ? 'bg-[var(--color-primary-soft)] text-[var(--color-primary)]'
                  : 'bg-slate-100 text-slate-500'
              "
            >
              {{ badgeText }}
            </span>

            <span
              class="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600"
            >
              {{ event.category }}
            </span>
          </div>

          <h3 class="line-clamp-2 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
            {{ event.title }}
          </h3>

          <p class="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            {{ event.description }}
          </p>

          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <div
              v-for="item in metaItems"
              :key="item.label"
              class="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
            >
              <div
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg shadow-sm ring-1 ring-slate-200"
              >
                {{ item.icon }}
              </div>

              <div>
                <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {{ item.label }}
                </p>
                <p class="mt-1 text-sm font-semibold text-slate-800">
                  {{ item.value }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 flex flex-wrap gap-3">
          <a
            v-if="variant === 'upcoming' && event.registerUrl"
            :href="event.registerUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold !text-white transition hover:opacity-90"
          >
            {{ primaryActionLabel }}
          </a>

          <RouterLink
            v-else-if="variant === 'upcoming'"
            :to="`/community/events/${event.id}/register`"
            class="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold !text-white transition hover:opacity-90"
          >
            Register Now
          </RouterLink>
          <button
            v-if="variant === 'past' && hasGallery"
            type="button"
            class="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            @click="isGalleryOpen = true"
          >
            View Gallery
          </button>
        </div>
      </div>
    </div>

    <EventGalleryModal
      v-if="hasGallery"
      :open="isGalleryOpen"
      :images="event.gallery ?? []"
      :alt-prefix="event.title"
      @close="isGalleryOpen = false"
    />
  </article>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import EventGalleryModal from '@/components/events/EventGalleryModal.vue'
import type { EventItem } from '@/types/events'

type EventCardVariant = 'upcoming' | 'past'

type MetaItem = {
  label: string
  value: string
  icon: string
}

const props = defineProps<{
  event: EventItem
  variant: EventCardVariant
}>()

const isGalleryOpen = ref(false)

const badgeText = computed(() => (props.variant === 'upcoming' ? 'Upcoming' : 'Past'))

const hasGallery = computed(
  () => Array.isArray(props.event.gallery) && props.event.gallery.length > 0,
)

const primaryActionLabel = computed(() =>
  props.event.mode === 'Online' ? 'Join Session' : 'Register Now',
)

const metaItems = computed<MetaItem[]>(() => {
  const items: MetaItem[] = [
    {
      label: 'Date',
      value: props.event.displayDate,
      icon: '📅',
    },
  ]

  if (props.event.time) {
    items.push({
      label: 'Time',
      value: props.event.time,
      icon: '🕐',
    })
  }

  if (props.event.location) {
    items.push({
      label: 'Location',
      value: props.event.location,
      icon: '📍',
    })
  }

  if (props.event.mode) {
    items.push({
      label: 'Mode',
      value: props.event.mode,
      icon: '🖥️',
    })
  }

  return items
})
</script>
