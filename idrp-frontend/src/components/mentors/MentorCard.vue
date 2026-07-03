<template>
  <article
    class="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/20 hover:shadow-xl"
  >
    <div
      class="mx-auto mb-5 h-40 w-40 overflow-hidden rounded-full bg-slate-100 shadow-md ring-4 ring-slate-100 transition-all duration-300 group-hover:ring-teal-200"
    >
      <img
        v-if="showImage && mentor.image"
        :src="mentor.image"
        :alt="mentor.imageAlt ?? mentor.name"
        class="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        @error="showImage = false"
      />

      <div
        v-else
        class="flex h-full w-full items-center justify-center bg-gradient-to-br from-teal-100 to-cyan-50 text-4xl font-bold text-[var(--color-primary)]"
      >
        {{ mentor.name.charAt(0) }}
      </div>
    </div>

    <h3 class="text-lg font-bold tracking-tight text-slate-900">
      {{ mentor.name }}
    </h3>

    <p class="mt-1 text-sm font-semibold text-[var(--color-primary)]">
      {{ mentor.role }}
    </p>

    <p v-if="mentor.organization" class="mt-2 text-sm text-slate-500">
      {{ mentor.organization }}
    </p>

    <div
      v-if="hasActions"
      class="mt-4 flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-wide"
    >
      <a
        v-if="hasProfile"
        :href="mentor.profileUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="text-[var(--color-primary)] transition hover:text-[var(--color-primary)]"
      >
        View Profile
      </a>

      <span v-else class="invisible">View Profile</span>

      <a
        v-if="hasLinkedin"
        :href="mentor.linkedin"
        target="_blank"
        rel="noopener noreferrer"
        class="text-[var(--color-primary)] transition hover:text-[var(--color-primary)]"
      >
        View LinkedIn
      </a>

      <span v-else class="invisible">View LinkedIn</span>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { Mentor } from '@/types/mentors'

const props = defineProps<{
  mentor: Mentor
}>()

const showImage = ref(Boolean(props.mentor.image))

watch(
  () => props.mentor.image,
  (newImage) => {
    showImage.value = Boolean(newImage)
  },
)

const hasLinkedin = computed(() => Boolean(props.mentor.linkedin?.trim()))
const hasProfile = computed(() => Boolean(props.mentor.profileUrl?.trim()))
const hasActions = computed(() => hasProfile.value || hasLinkedin.value)
</script>
