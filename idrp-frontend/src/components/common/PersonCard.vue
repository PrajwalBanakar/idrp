<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    name: string
    image?: string
    imageAlt?: string
    role?: string
    subtitle?: string
    size?: 'md' | 'lg'
    profileUrl?: string
    profileLabel?: string
    linkedinUrl?: string
    linkedinLabel?: string
  }>(),
  {
    image: '',
    imageAlt: '',
    role: '',
    subtitle: '',
    size: 'lg',
    profileUrl: '',
    profileLabel: 'View Profile',
    linkedinUrl: '',
    linkedinLabel: 'View LinkedIn',
  },
)

const showImage = ref(Boolean(props.image))

watch(
  () => props.image,
  (newImage) => {
    showImage.value = Boolean(newImage)
  },
)

const hasProfile = computed(() => Boolean(props.profileUrl?.trim()))
const hasLinkedin = computed(() => Boolean(props.linkedinUrl?.trim()))
const hasActions = computed(() => hasProfile.value || hasLinkedin.value)

const avatarSizeClass = computed(() =>
  props.size === 'lg' ? 'h-40 w-40 ring-slate-100 group-hover:ring-teal-200' : 'h-28 w-28 ring-slate-50 group-hover:ring-teal-100',
)

const initialTextClass = computed(() => (props.size === 'lg' ? 'text-4xl' : 'text-xl'))
</script>

<template>
  <article
    class="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/20 hover:shadow-xl"
  >
    <div
      :class="[
        'mx-auto mb-5 overflow-hidden rounded-full bg-slate-100 shadow-md ring-4 transition-all duration-300',
        avatarSizeClass,
      ]"
    >
      <img
        v-if="showImage && image"
        :src="image"
        :alt="imageAlt || name"
        loading="lazy"
        class="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        @error="showImage = false"
      />

      <div
        v-else
        :class="[
          'flex h-full w-full items-center justify-center bg-gradient-to-br from-teal-100 to-cyan-50 font-bold text-[var(--color-primary)]',
          initialTextClass,
        ]"
        aria-hidden="true"
      >
        {{ name.charAt(0) }}
      </div>
    </div>

    <h3 class="text-lg font-bold tracking-tight text-slate-900">
      {{ name }}
    </h3>

    <p v-if="role" class="mt-1 text-sm font-semibold text-[var(--color-primary)]">
      {{ role }}
    </p>

    <p v-if="subtitle" class="mt-2 text-sm text-slate-500">
      {{ subtitle }}
    </p>

    <div v-if="hasActions" class="mt-4 flex items-center justify-between gap-3">
      <a
        v-if="hasProfile"
        :href="profileUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary-soft)] px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)] transition hover:bg-teal-100"
      >
        {{ profileLabel }}
      </a>
      <span
        v-else
        class="invisible rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide"
      >
        {{ profileLabel }}
      </span>

      <a
        v-if="hasLinkedin"
        :href="linkedinUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:border-[var(--color-primary)]/20 hover:text-[var(--color-primary)]"
      >
        {{ linkedinLabel }}
      </a>
      <span
        v-else
        class="invisible rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide"
      >
        {{ linkedinLabel }}
      </span>
    </div>
  </article>
</template>
