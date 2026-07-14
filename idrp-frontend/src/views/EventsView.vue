<template>
  <div class="events-view bg-white">
    <EventsHeroSection :hero="eventsHero" />

    <EventsSection
      :eyebrow="eventsSections.upcoming.eyebrow"
      :title="eventsSections.upcoming.title"
      :items="upcomingEvents"
      :visible-items="upcomingVisibleItems"
      :has-more="upcomingHasMore"
      variant="upcoming"
      @load-more="loadMoreUpcoming"
    />

    <EventsSection
      :eyebrow="eventsSections.past.eyebrow"
      :title="eventsSections.past.title"
      :items="pastEvents"
      :visible-items="pastVisibleItems"
      :has-more="pastHasMore"
      variant="past"
      @load-more="loadMorePast"
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

const PAGE_SIZE = 6

function createLazyList(items: Ref<EventItem[]>) {
  const visibleCount = ref(PAGE_SIZE)

  const visibleItems = computed(() => items.value.slice(0, visibleCount.value))
  const hasMore = computed(() => visibleCount.value < items.value.length)

  function loadMore() {
    visibleCount.value = Math.min(visibleCount.value + PAGE_SIZE, items.value.length)
  }

  watch(items, () => {
    visibleCount.value = PAGE_SIZE
  })

  return {
    visibleItems,
    hasMore,
    loadMore,
  }
}

const upcomingEvents = computed(() => getUpcomingEvents())
const pastEvents = computed(() => getPastEvents())

const {
  visibleItems: upcomingVisibleItems,
  hasMore: upcomingHasMore,
  loadMore: loadMoreUpcoming,
} = createLazyList(upcomingEvents)

const {
  visibleItems: pastVisibleItems,
  hasMore: pastHasMore,
  loadMore: loadMorePast,
} = createLazyList(pastEvents)
</script>
