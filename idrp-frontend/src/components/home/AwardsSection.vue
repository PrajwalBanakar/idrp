<template>
  <section class="bg-[var(--color-bg-soft)] px-6 py-20 md:px-12 lg:px-16 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="mb-12 grid gap-10 lg:mb-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
        <div>
          <span
            class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]"
          >
            Milestones
          </span>
          <h2
            class="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl"
          >
            Awards & Recognition
          </h2>
          <div
            class="mt-6 h-1 w-14 rounded-full"
            style="
              background: linear-gradient(
                to right,
                var(--color-primary-light),
                var(--color-primary)
              );
            "
          />
        </div>

        <div class="space-y-4 text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg">
          <p>
            Recognition reflects the collective effort behind every founder, mentor, partner, and
            collaborator contributing to the ecosystem.
          </p>
          <p>
            As ventures grow, secure support, and create impact, the broader work of incubation,
            mentorship, and ecosystem building is also acknowledged by institutions and peers.
          </p>
          <p class="font-medium text-[var(--color-primary)]">
            These milestones represent momentum, trust, and the long-term value of building strong
            innovation pathways.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="award in awards"
          :key="`${award.entity ?? 'award'}-${award.title}-${award.year}`"
          class="group overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/20 hover:shadow-lg"
        >
          <div
            class="h-64 w-full overflow-hidden bg-gradient-to-br sm:h-72 lg:h-80"
            :class="award.bg"
          >
            <img
              v-if="award.image"
              :src="award.image"
              :alt="award.entity ? `${award.entity} - ${award.title}` : award.title"
              class="h-full w-full object-contain bg-white p-3 transition-transform duration-500 group-hover:scale-[1.02]"
            />

            <div
              v-else
              class="flex h-full w-full flex-col items-center justify-center gap-3 px-4 text-center"
            >
              <div class="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-7 w-7 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                  />
                </svg>
              </div>

              <span class="text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
                {{ award.issuer }}
              </span>
            </div>
          </div>

          <div class="px-5 py-5 text-center">
            <p
              v-if="award.entity"
              class="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]"
            >
              {{ award.entity }}
            </p>

            <p
              class="text-base font-semibold leading-7 text-[var(--color-text-primary)] transition-colors duration-300 group-hover:text-[var(--color-primary)]"
              :class="award.entity ? 'mt-2' : ''"
            >
              {{ award.title }}
            </p>

            <p class="mt-2 text-sm text-slate-500">{{ award.issuer }} · {{ award.year }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Award } from '@/data/home'

defineProps<{
  awards: Award[]
}>()
</script>
