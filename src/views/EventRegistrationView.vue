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
import type { EventItem } from '@/types/events'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

const route = useRoute()

const event = ref<EventItem | null>(null)
const loading = ref(true)

async function fetchEventById(id: number) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/events/${id}`)
    const result = await response.json()

    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Event not found')
    }

    event.value = result.data
  } catch {
    event.value = getEventById(id) ?? null
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  const id = Number(route.params.id)

  if (!id) {
    loading.value = false
    event.value = null
    return
  }

  fetchEventById(id)
})
</script>






<!-- <template>
  <div class="min-h-screen bg-slate-50 px-6 py-16 md:px-12 lg:px-16">
    <div class="mx-auto max-w-3xl">
      <EventRegistrationHeader
        title="Event Registration"
        description="Complete the registration form below. Our team will share confirmation details with you shortly."
      />

      <EventRegistrationNotFound v-if="!event" />
      <EventRegistrationFormSection v-else :event="event" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import EventRegistrationFormSection from '@/components/events/EventRegistrationFormSection.vue'
import EventRegistrationHeader from '@/components/events/EventRegistrationHeader.vue'
import EventRegistrationNotFound from '@/components/events/EventRegistrationNotFound.vue'

import { getEventById } from '@/data/events'

const route = useRoute()

const event = computed(() => {
  const id = Number(route.params.id)
  return getEventById(id) ?? null
})
</script> -->
