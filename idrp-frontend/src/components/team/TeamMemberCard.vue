<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { TeamMember } from '@/types/team'

type Props = {
  member: TeamMember
}

const props = defineProps<Props>()
const showImage = ref(Boolean(props.member.image))

watch(
  () => props.member.image,
  (newImage) => {
    showImage.value = Boolean(newImage)
  },
)

const hasLinkedin = computed(() => Boolean(props.member.linkedinUrl?.trim()))
const hasProfile = computed(() => Boolean(props.member.profileUrl?.trim()))
const hasActions = computed(() => hasProfile.value || hasLinkedin.value)
</script>

<template>
  <article
    class="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/20 hover:shadow-xl"
  >
    <div
      class="mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full bg-slate-100 ring-4 ring-slate-50 transition-all duration-300 group-hover:ring-teal-100"
    >
      <img
        v-if="showImage && props.member.image"
        :src="props.member.image"
        :alt="props.member.imageAlt ?? props.member.name"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        @error="showImage = false"
      />

      <div
        v-else
        class="flex h-full w-full items-center justify-center bg-gradient-to-br from-teal-100 to-cyan-50 text-xl font-bold text-[var(--color-primary)]"
      >
        {{ props.member.name.charAt(0) }}
      </div>
    </div>

    <h3 class="text-lg font-bold tracking-tight text-slate-900">
      {{ props.member.name }}
    </h3>

    <p class="mt-1 text-sm font-medium text-slate-500">
      {{ props.member.role }}
    </p>

    <div v-if="hasActions" class="mt-4 flex items-center justify-between gap-3">
      <a
        v-if="hasProfile"
        :href="props.member.profileUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary-soft)] px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)] transition hover:bg-teal-100"
      >
        View Profile
      </a>

      <span
        v-else
        class="invisible rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide"
      >
        View Profile
      </span>

      <a
        v-if="hasLinkedin"
        :href="props.member.linkedinUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:border-[var(--color-primary)]/20 hover:text-[var(--color-primary)]"
      >
        View LinkedIn
      </a>

      <span
        v-else
        class="invisible rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide"
      >
        View LinkedIn
      </span>
    </div>
  </article>
</template>
