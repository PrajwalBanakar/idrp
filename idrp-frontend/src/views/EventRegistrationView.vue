<template>
  <div class="min-h-screen bg-slate-50 px-6 py-16 md:px-12 lg:px-16">
    <div class="mx-auto max-w-3xl">
      <EventRegistrationHeader
        title="Event Registration"
        description="Complete the registration form below. Our team will share confirmation details with you shortly."
      />

      <p v-if="loading" class="rounded-3xl bg-white p-8 text-center text-slate-600">
        Loading event...
      </p>

      <EventRegistrationNotFound v-else-if="!event" />

      <EventRegistrationFormSection v-else :event="event" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import EventRegistrationFormSection from '@/components/events/EventRegistrationFormSection.vue'
import EventRegistrationHeader from '@/components/events/EventRegistrationHeader.vue'
import EventRegistrationNotFound from '@/components/events/EventRegistrationNotFound.vue'

import { getEventById } from '@/data/events'
import { fetchPublicEventById } from '@/services/eventService'
import type { EventItem } from '@/types/events'

const route = useRoute()

const event = ref<EventItem | null>(null)
const loading = ref(true)

onMounted(async () => {
  const id = Number(route.params.id)

  if (!id) {
    loading.value = false
    event.value = null
    return
  }

  event.value = (await fetchPublicEventById(id)) ?? getEventById(id) ?? null
  loading.value = false
})
</script>
