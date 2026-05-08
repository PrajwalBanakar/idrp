<!-- <template>
  <div class="events-view bg-white">
    <EventsHeroSection :hero="eventsHero" />

    <EventsSection
      :eyebrow="eventsSections.upcoming.eyebrow"
      :title="eventsSections.upcoming.title"
      :items="upcomingEvents"
      :paginated-items="upcomingPaginatedItems"
      :current-page="upcomingPage"
      :total-pages="upcomingTotalPages"
      variant="upcoming"
      @update:currentPage="upcomingPage = $event"
    />

    <EventsSection
      :eyebrow="eventsSections.past.eyebrow"
      :title="eventsSections.past.title"
      :items="pastEvents"
      :paginated-items="pastPaginatedItems"
      :current-page="pastPage"
      :total-pages="pastTotalPages"
      variant="past"
      @update:currentPage="pastPage = $event"
    />

    <EventsCTASection
      :title="eventsCta.title"
      :description="eventsCta.description"
      :button-label="eventsCta.buttonLabel"
      :button-to="eventsCta.buttonTo"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch, type Ref } from 'vue'

import EventsCTASection from '@/components/events/EventsCTASection.vue'
import EventsHeroSection from '@/components/events/EventsHeroSection.vue'
import EventsSection from '@/components/events/EventsSection.vue'

import {
  events as staticEvents,
  eventsCta,
  eventsHero,
  eventsSections,
} from '@/data/events'

import { fetchPublicEvents } from '@/services/eventService'
import type { EventItem } from '@/types/events'

const PER_PAGE = 3

const events = ref<EventItem[]>(staticEvents)

function parseLocalDate(dateString: string, endOfDay = false) {
  const parts = dateString.split('-')

  if (parts.length !== 3) {
    return new Date(dateString)
  }

  const year = Number(parts[0])
  const month = Number(parts[1])
  const day = Number(parts[2])

  if (endOfDay) {
    return new Date(year, month - 1, day, 23, 59, 59, 999)
  }

  return new Date(year, month - 1, day, 0, 0, 0, 0)
}

function createPagination(items: Ref<EventItem[]>, page: Ref<number>) {
  const totalPages = computed(() => Math.max(1, Math.ceil(items.value.length / PER_PAGE)))

  const paginatedItems = computed(() => {
    const safePage = Math.min(page.value, totalPages.value)
    const start = (safePage - 1) * PER_PAGE
    return items.value.slice(start, start + PER_PAGE)
  })

  watch(items, () => {
    if (page.value > totalPages.value) {
      page.value = 1
    }
  })

  return {
    totalPages,
    paginatedItems,
  }
}

const upcomingEvents = computed(() => {
  const now = new Date()

  return events.value
    .filter(
      (event) =>
        parseLocalDate(event.endDate, true).getTime() >= now.getTime() &&
        event.visible !== false,
    )
    .sort((a, b) => parseLocalDate(a.startDate).getTime() - parseLocalDate(b.startDate).getTime())
})

const pastEvents = computed(() => {
  const now = new Date()

  return events.value
    .filter(
      (event) =>
        parseLocalDate(event.endDate, true).getTime() < now.getTime() &&
        event.visible !== false,
    )
    .sort((a, b) => parseLocalDate(b.startDate).getTime() - parseLocalDate(a.startDate).getTime())
})

const upcomingPage = ref(1)
const pastPage = ref(1)

const { totalPages: upcomingTotalPages, paginatedItems: upcomingPaginatedItems } = createPagination(
  upcomingEvents,
  upcomingPage,
)

const { totalPages: pastTotalPages, paginatedItems: pastPaginatedItems } = createPagination(
  pastEvents,
  pastPage,
)

onMounted(async () => {
  const apiEvents = await fetchPublicEvents()

  if (apiEvents && apiEvents.length) {
    events.value = apiEvents
  }
})
</script>

 -->





<template>
  <div class="events-view bg-white">
    <EventsHeroSection :hero="eventsHero" />

    <EventsSection
      :eyebrow="eventsSections.upcoming.eyebrow"
      :title="eventsSections.upcoming.title"
      :items="upcomingEvents"
      :paginated-items="upcomingPaginatedItems"
      :current-page="upcomingPage"
      :total-pages="upcomingTotalPages"
      variant="upcoming"
      @update:currentPage="upcomingPage = $event"
    />

    <EventsSection
      :eyebrow="eventsSections.past.eyebrow"
      :title="eventsSections.past.title"
      :items="pastEvents"
      :paginated-items="pastPaginatedItems"
      :current-page="pastPage"
      :total-pages="pastTotalPages"
      variant="past"
      @update:currentPage="pastPage = $event"
    />

    <EventsCTASection
      :title="eventsCta.title"
      :description="eventsCta.description"
      :button-label="eventsCta.buttonLabel"
      :button-to="eventsCta.buttonTo"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, type Ref } from 'vue'

import EventsCTASection from '@/components/events/EventsCTASection.vue'
import EventsHeroSection from '@/components/events/EventsHeroSection.vue'
import EventsSection from '@/components/events/EventsSection.vue'

import {
  eventsCta,
  eventsHero,
  eventsSections,
  getUpcomingEvents,
  getPastEvents,
} from '@/data/events'

import type { EventItem } from '@/types/events'

const PER_PAGE = 3

function createPagination(items: Ref<EventItem[]>, page: Ref<number>) {
  const totalPages = computed(() => Math.max(1, Math.ceil(items.value.length / PER_PAGE)))

  const paginatedItems = computed(() => {
    const safePage = Math.min(page.value, totalPages.value)
    const start = (safePage - 1) * PER_PAGE
    return items.value.slice(start, start + PER_PAGE)
  })

  watch(items, () => {
    if (page.value > totalPages.value) {
      page.value = 1
    }
  })

  return {
    totalPages,
    paginatedItems,
  }
}

const upcomingEvents = computed(() => getUpcomingEvents())
const pastEvents = computed(() => getPastEvents())

const upcomingPage = ref(1)
const pastPage = ref(1)

const { totalPages: upcomingTotalPages, paginatedItems: upcomingPaginatedItems } = createPagination(
  upcomingEvents,
  upcomingPage,
)

const { totalPages: pastTotalPages, paginatedItems: pastPaginatedItems } = createPagination(
  pastEvents,
  pastPage,
)
</script>
