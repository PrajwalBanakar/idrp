<!-- <template>
  <div class="mentors-view bg-white">
    <MentorsHeroSection />

    <MentorsSearchSection
      :search-query="searchQuery"
      @update:searchQuery="searchQuery = $event"
    />

    <section v-if="loading" class="px-6 py-16 md:px-12 lg:px-16">
      <div class="mx-auto max-w-7xl rounded-3xl bg-slate-50 p-8 text-center text-slate-600">
        Loading mentors...
      </div>
    </section>

    <section v-else-if="errorMessage" class="px-6 py-16 md:px-12 lg:px-16">
      <div
        class="mx-auto max-w-7xl rounded-3xl border border-red-200 bg-red-50 p-8 text-center text-red-700"
      >
        {{ errorMessage }}
      </div>
    </section>

    <MentorsGridSection v-else :mentors="filteredMentors" />

    <MentorsCTASection />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import { mentorService } from '@/services/mentorService'
import type { Mentor } from '@/types/mentor'

import MentorsGridSection from '@/components/mentors/MentorsGridSection.vue'
import MentorsSearchSection from '@/components/mentors/MentorsSearchSection.vue'
import MentorsHeroSection from '@/components/mentors/MentorsHeroSection.vue'
import MentorsCTASection from '@/components/mentors/MentorsCTASection.vue'

const searchQuery = ref('')
const mentors = ref<Mentor[]>([])

const loading = ref(false)
const errorMessage = ref('')

const filteredMentors = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  if (!query) return mentors.value

  return mentors.value.filter((mentor) => {
    return [mentor.name, mentor.role, mentor.organization ?? '', mentor.bio ?? '']
      .join(' ')
      .toLowerCase()
      .includes(query)
  })
})

const fetchMentors = async () => {
  loading.value = true
  errorMessage.value = ''

  try {
    mentors.value = await mentorService.getAll()
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Failed to load mentors'
  } finally {
    loading.value = false
  }
}

onMounted(fetchMentors)
</script> -->

<!-- ========================================================= -->
<!-- 🔒 OLD STATIC VERSION (FALLBACK / REFERENCE)              -->
<!-- ========================================================= -->


<template>
  <div class="mentors-view bg-white">
    <MentorsHeroSection />

    <MentorsSearchSection :search-query="searchQuery" @update:searchQuery="searchQuery = $event" />

    <MentorsGridSection :mentors="filteredMentors" />

    <MentorsCTASection />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import { allMentors } from '@/data/mentors'

import MentorsGridSection from '@/components/mentors/MentorsGridSection.vue'
import MentorsSearchSection from '@/components/mentors/MentorsSearchSection.vue'
import MentorsHeroSection from '@/components/mentors/MentorsHeroSection.vue'
import MentorsCTASection from '@/components/mentors/MentorsCTASection.vue'

const searchQuery = ref('')

const filteredMentors = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  if (!query) return allMentors

  return allMentors.filter((mentor) => {
    return [mentor.name, mentor.role, mentor.organization ?? '', mentor.bio ?? '']
      .join(' ')
      .toLowerCase()
      .includes(query)
  })
})
</script>
