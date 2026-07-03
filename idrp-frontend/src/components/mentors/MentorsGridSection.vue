<template>
  <section class="bg-white px-6 pb-16 md:px-12 lg:px-16 lg:pb-20">
    <div class="mx-auto max-w-7xl">
      <div
        v-if="mentors.length === 0"
        class="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-14 text-center"
      >
        <p class="text-base font-medium text-slate-600">No mentors found.</p>
      </div>

      <div v-else class="flex flex-wrap justify-center gap-6">
        <div
          v-for="mentor in mentors"
          :key="mentor.name"
          class="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]"
        >
          <MentorCard :mentor="mentor" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import MentorCard from '@/components/mentors/MentorCard.vue'
import type { Mentor } from '@/types/mentors'

defineProps<{
  mentors: Mentor[]
}>()
</script>
