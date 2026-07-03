<template>
  <section class="overflow-hidden bg-[var(--color-bg-soft)] py-20 lg:py-24">
    <div class="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
      <div class="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
        <span class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
          Startup Voices
        </span>
        <h2
          class="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl"
        >
          Success Stories
        </h2>
        <p
          class="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg"
        >
          Stories from startups supported through mentorship, validation, technical guidance, and
          ecosystem access at IDRP.
        </p>
      </div>
    </div>

    <div class="relative">
      <!-- Gradient edges -->
      <div
        class="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--color-bg-soft)] to-transparent sm:w-24"
      />
      <div
        class="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--color-bg-soft)] to-transparent sm:w-24"
      />

      <!-- LEFT TRACK -->
      <div class="stories-track-left mb-6 flex gap-6">
        <article
          v-for="(story, index) in duplicatedStories"
          :key="`left-${index}`"
          class="flex w-[320px] shrink-0 flex-col rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/20 hover:shadow-lg sm:w-[360px] sm:p-7"
        >
          <svg
            class="mb-4 h-8 w-8 text-[var(--color-primary-soft)]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
            />
          </svg>

          <p class="mb-6 text-sm leading-7 text-[var(--color-text-secondary)] italic sm:text-base">
            "{{ story.quote }}"
          </p>

          <div class="mt-auto flex items-center gap-3 border-t border-slate-100 pt-4">
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm"
              :style="{ background: story.color }"
            >
              {{ story.initials }}
            </div>

            <div class="min-w-0">
              <p
                class="truncate text-sm font-semibold text-[var(--color-text-primary)] sm:text-base"
              >
                {{ story.company }}
              </p>
              <p v-if="story.tagline" class="truncate text-xs text-slate-500 sm:text-sm">
                {{ story.tagline }}
              </p>
            </div>
          </div>
        </article>
      </div>

      <!-- RIGHT TRACK -->
      <div class="stories-track-right flex gap-6">
        <article
          v-for="(story, index) in reversedDuplicatedStories"
          :key="`right-${index}`"
          class="flex w-[320px] shrink-0 flex-col rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/20 hover:shadow-lg sm:w-[360px] sm:p-7"
        >
          <svg
            class="mb-4 h-8 w-8 text-[var(--color-primary-soft)]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
            />
          </svg>

          <p class="mb-6 text-sm leading-7 text-[var(--color-text-secondary)] italic sm:text-base">
            "{{ story.quote }}"
          </p>

          <div class="mt-auto flex items-center gap-3 border-t border-slate-100 pt-4">
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm"
              :style="{ background: story.color }"
            >
              {{ story.initials }}
            </div>

            <div class="min-w-0">
              <p
                class="truncate text-sm font-semibold text-[var(--color-text-primary)] sm:text-base"
              >
                {{ story.company }}
              </p>
              <p v-if="story.tagline" class="truncate text-xs text-slate-500 sm:text-sm">
                {{ story.tagline }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Story } from '@/data/home'

const props = defineProps<{
  successStories: Story[]
}>()

const duplicatedStories = computed(() => [...props.successStories, ...props.successStories])

const reversedDuplicatedStories = computed(() => [...duplicatedStories.value].reverse())
</script>

<style scoped>
.stories-track-left {
  width: max-content;
  animation: scroll-left 40s linear infinite;
  will-change: transform;
}

.stories-track-left:hover {
  animation-play-state: paused;
}

.stories-track-right {
  width: max-content;
  animation: scroll-right 40s linear infinite;
  will-change: transform;
}

.stories-track-right:hover {
  animation-play-state: paused;
}

@media (max-width: 768px) {
  .stories-track-left,
  .stories-track-right {
    animation-duration: 28s;
  }
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
