<script setup lang="ts">
import { computed } from 'vue'
import EventCard from '@/components/events/EventCard.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import { getEventsByInitiative, isEventUpcoming } from '@/data/events'

const props = withDefaults(
  defineProps<{
    initiativeKey: string
    title?: string
    description?: string
  }>(),
  {
    title: 'Events Under This Initiative',
    description: 'Sessions, workshops, and milestones hosted as part of this initiative.',
  },
)

const events = computed(() => getEventsByInitiative(props.initiativeKey))
</script>

<template>
  <section class="bg-slate-50 px-6 py-16 md:px-16 md:py-20 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <SectionHeading eyebrow="Events" :title="title" :description="description" class="mb-12" />

      <div v-if="events.length" class="flex flex-col gap-8">
        <EventCard
          v-for="event in events"
          :key="event.id"
          :event="event"
          :variant="isEventUpcoming(event) ? 'upcoming' : 'past'"
        />
      </div>

      <div
        v-else
        class="rounded-3xl border border-dashed border-slate-200 bg-white py-16 text-center"
      >
        <p class="mb-4 text-4xl">🗂️</p>
        <p class="font-semibold text-slate-500">No events recorded for this initiative yet.</p>
      </div>
    </div>
  </section>
</template>
